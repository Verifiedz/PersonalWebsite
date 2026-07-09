import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/Components/ui/card";
import contactData from "@/data/contact.json";
import type { Contact } from "@/types";

const contact = contactData as Contact;

interface InfoRow {
  icon: LucideIcon;
  label: string;
  value?: string;
  href?: string;
}

/**
 * Contact section.
 *
 * Per the brief this just displays my information — no forms or email APIs.
 * Fields are read from contact.json; optional ones are skipped when empty.
 */
export default function ContactSection() {
  const rows: InfoRow[] = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      href: contact.phone ? `tel:${contact.phone}` : undefined,
    },
    { icon: MapPin, label: "Location", value: contact.location },
  ].filter((row) => Boolean(row.value));

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-gold">{contact.heading}</span>
        </h2>

        <Card className="mx-auto max-w-xl">
          <CardContent className="divide-y divide-border p-0">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-base font-medium transition-colors hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-base font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
