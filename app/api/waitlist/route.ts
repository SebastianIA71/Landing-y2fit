import { NextRequest, NextResponse } from "next/server";

type WaitlistBody = {
  name?: unknown;
  email?: unknown;
  sportOrigin?: unknown;
  goal?: unknown;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return NextResponse.json(
      { message: "Supabase no esta configurado en el servidor." },
      { status: 500 }
    );
  }

  let body: WaitlistBody;
  try {
    body = (await request.json()) as WaitlistBody;
  } catch {
    return NextResponse.json({ message: "Payload invalido." }, { status: 400 });
  }

  const email = cleanText(body.email, 254)?.toLowerCase();
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ message: "Introduce un email valido." }, { status: 400 });
  }

  const record = {
    email,
    name: cleanText(body.name, 120),
    sport_origin: cleanText(body.sportOrigin, 80),
    goal: cleanText(body.goal, 120),
    source: "landing",
    user_agent: cleanText(request.headers.get("user-agent"), 500)
  };

  const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/waitlist_users`, {
    method: "POST",
    headers: {
      apikey: supabaseServiceKey,
      Authorization: `Bearer ${supabaseServiceKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    },
    body: JSON.stringify(record)
  });

  if (response.ok) {
    return NextResponse.json(
      { message: "Estas dentro. Te avisaremos antes del lanzamiento." },
      { status: 201 }
    );
  }

  const errorText = await response.text();
  if (response.status === 409 || errorText.includes("23505")) {
    return NextResponse.json(
      { message: "Ese email ya esta en la waitlist. Te avisaremos igualmente." },
      { status: 409 }
    );
  }

  return NextResponse.json(
    { message: "No se ha podido guardar el registro. Prueba otra vez." },
    { status: 502 }
  );
}
