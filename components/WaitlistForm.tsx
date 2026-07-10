"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "duplicate" | "error";

const initialForm = {
  name: "",
  email: "",
  sportOrigin: "",
  goal: ""
};

export default function WaitlistForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const payload = (await response.json()) as { message?: string };

      if (response.ok) {
        setStatus("success");
        setMessage(payload.message ?? "Estas dentro. Te avisaremos antes del lanzamiento.");
        setForm(initialForm);
        return;
      }

      if (response.status === 409) {
        setStatus("duplicate");
        setMessage(payload.message ?? "Ese email ya esta en la waitlist.");
        return;
      }

      setStatus("error");
      setMessage(payload.message ?? "No se ha podido guardar. Prueba otra vez.");
    } catch {
      setStatus("error");
      setMessage("No se ha podido conectar. Prueba otra vez en unos segundos.");
    }
  }

  const isLoading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 grid max-w-[760px] gap-3 rounded-[28px] border border-border bg-card p-4 text-left shadow-[0_28px_70px_rgba(0,0,0,.35)] sm:grid-cols-2 sm:p-5"
    >
      <label className="block">
        <span className="mb-2 block text-[11px] font-bold uppercase tracking-[.16em] text-dim">
          Nombre
        </span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
          placeholder="Tu nombre"
          className="h-[52px] w-full rounded-2xl border border-border bg-surface px-4 text-[15px] font-semibold text-fog outline-none transition placeholder:text-dim/60 focus:border-volt/60"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-[11px] font-bold uppercase tracking-[.16em] text-dim">
          Email
        </span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          value={form.email}
          onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          placeholder="tu@email.com"
          className="h-[52px] w-full rounded-2xl border border-border bg-surface px-4 text-[15px] font-semibold text-fog outline-none transition placeholder:text-dim/60 focus:border-volt/60"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-[11px] font-bold uppercase tracking-[.16em] text-dim">
          Vienes de
        </span>
        <select
          name="sportOrigin"
          value={form.sportOrigin}
          onChange={(event) => setForm((current) => ({ ...current, sportOrigin: event.target.value }))}
          className="h-[52px] w-full rounded-2xl border border-border bg-surface px-4 text-[15px] font-semibold text-fog outline-none transition focus:border-volt/60"
        >
          <option value="">Elige una opcion</option>
          <option value="futbol">Futbol</option>
          <option value="basket">Basket</option>
          <option value="rugby">Rugby</option>
          <option value="tenis">Tenis / padel</option>
          <option value="ninguno">No venia de equipo</option>
          <option value="otro">Otro deporte</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-[11px] font-bold uppercase tracking-[.16em] text-dim">
          Objetivo
        </span>
        <select
          name="goal"
          value={form.goal}
          onChange={(event) => setForm((current) => ({ ...current, goal: event.target.value }))}
          className="h-[52px] w-full rounded-2xl border border-border bg-surface px-4 text-[15px] font-semibold text-fog outline-none transition focus:border-volt/60"
        >
          <option value="">Elige una opcion</option>
          <option value="empezar-gym">Empezar el gym sin perderme</option>
          <option value="ganar-fuerza">Ganar fuerza</option>
          <option value="ser-constante">Ser constante</option>
          <option value="volver-forma">Volver a estar en forma</option>
          <option value="otro">Otro objetivo</option>
        </select>
      </label>

      <button
        type="submit"
        disabled={isLoading}
        className="min-h-[56px] rounded-2xl bg-volt px-6 font-display text-[15px] font-black uppercase tracking-wide text-ink transition hover:bg-fog disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
      >
        {isLoading ? "Guardando..." : "Unirme a la waitlist"}
      </button>

      <p
        className={`min-h-5 text-center text-[13px] font-semibold sm:col-span-2 ${
          status === "error" ? "text-red-300" : "text-dim"
        }`}
        aria-live="polite"
      >
        {message || "Sin spam. Solo acceso anticipado, beta y fecha de lanzamiento."}
      </p>
    </form>
  );
}
