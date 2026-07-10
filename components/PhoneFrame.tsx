import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-[30px] bg-ink", className)}>
      {children}
    </div>
  );
}

export function PhoneDevice({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[44px] border border-border bg-ink p-[10px] shadow-phone",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-[#0e1013]">
        {children}
      </div>
    </div>
  );
}
