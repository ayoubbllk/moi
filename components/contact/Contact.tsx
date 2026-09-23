"use client";

import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCan3D } from "@/lib/hooks";
import { useI18n } from "@/lib/i18n/context";
import { site } from "@/lib/site";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { FormEvent, useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";

type CanvasProps = { mouse: { current: { x: number; y: number } } };

export function Contact() {
  const { t } = useI18n();
  const can3D = useCan3D();
  const mouse = useRef({ x: 0, y: 0 });
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [Canvas, setCanvas] = useState<ComponentType<CanvasProps> | null>(null);

  useEffect(() => {
    if (!can3D) return;
    let alive = true;
    import("@/components/contact/ContactCanvas").then((m) => {
      if (alive) setCanvas(() => m.default);
    });
    return () => {
      alive = false;
    };
  }, [can3D]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }
    const company = String(data.get("company") || "");
    const phone = String(data.get("phone") || "");
    const type = String(data.get("type") || "");
    const body = [`${t.contact.name}: ${name}`, company && `${t.contact.company}: ${company}`, `${t.contact.email}: ${email}`, phone && `${t.contact.phone}: ${phone}`, type && `${t.contact.type}: ${type}`, "", message]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${t.nav.contact} — ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  };

  const wa = site.whatsapp
    ? `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(t.waMessage)}`
    : `https://wa.me/?text=${encodeURIComponent(t.waMessage)}`;

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-paper text-ink"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouse.current.x = ((e.clientX - r.left) / r.width) * 2 - 1;
        mouse.current.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
    >
      <div className="absolute inset-0 z-0 opacity-40" aria-hidden>
        {can3D && Canvas ? <Canvas mouse={mouse} /> : <div className="contact-fallback absolute inset-0" />}
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-10 px-4 py-20 sm:px-6 md:px-10 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <div className="order-2 lg:order-1">
          <SectionLabel index="05">{t.contact.kicker}</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,8vw,4.1rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-md text-base text-ink/55 sm:text-lg">{t.contact.lead}</p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-sm">
              <MapPin size={16} className="shrink-0 text-ember" aria-hidden />
              {t.contact.location}
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                data-cursor="hover"
                className="inline-flex min-h-11 items-center gap-3 text-sm hover:text-ember"
              >
                <Mail size={16} className="text-ember" aria-hidden />
                {site.email}
              </a>
            </li>
          </ul>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="mt-6 hidden h-12 items-center gap-2 bg-ink px-6 font-mono text-[10px] uppercase tracking-[0.18em] text-paper hover:bg-ember hover:text-ink lg:inline-flex"
          >
            <MessageCircle size={14} />
            {t.contact.whatsapp}
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="order-1 border border-ink/10 bg-paper/85 p-5 backdrop-blur-sm sm:p-8 md:p-10 lg:order-2"
        >
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            <Field id="name" label={t.contact.name} required>
              <Input id="name" name="name" autoComplete="name" required />
            </Field>
            <Field id="company" label={t.contact.company}>
              <Input id="company" name="company" autoComplete="organization" />
            </Field>
            <Field id="email" label={t.contact.email} required>
              <Input id="email" name="email" type="email" autoComplete="email" required />
            </Field>
            <Field id="phone" label={t.contact.phone}>
              <Input id="phone" name="phone" type="tel" autoComplete="tel" />
            </Field>
          </div>
          <div className="mt-6">
            <Label htmlFor="type">{t.contact.type}</Label>
            <select
              id="type"
              name="type"
              className="mt-2 h-12 w-full border-0 border-b border-ink/25 bg-transparent text-base focus-visible:border-ember focus-visible:outline-none"
            >
              {t.contact.types.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-6">
            <Field id="message" label={t.contact.message} required>
              <Textarea id="message" name="message" required placeholder={t.contact.messagePh} />
            </Field>
          </div>
          <Button type="submit" className="mt-8 w-full sm:w-auto" data-cursor="hover">
            {t.contact.send}
          </Button>
          <p className="mt-4 text-sm text-ink/50" role="status" aria-live="polite">
            {status === "sent" && t.contact.sent}
            {status === "error" && t.contact.error}
          </p>
        </form>
      </div>

      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed inset-x-4 bottom-4 z-40 flex h-12 items-center justify-center gap-2 bg-ember font-mono text-[10px] uppercase tracking-[0.16em] text-ink shadow-lg lg:hidden"
      >
        <MessageCircle size={14} />
        {t.contact.whatsapp}
      </a>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="group">
      <Label htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </Label>
      <div className="mt-2 transition-transform duration-300 group-focus-within:translate-x-0.5">
        {children}
      </div>
    </div>
  );
}
