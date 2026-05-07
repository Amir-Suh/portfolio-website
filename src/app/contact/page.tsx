import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — open to opportunities and collaborations.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "", // TODO: add email
  },
  {
    icon: Phone,
    label: "Phone",
    value: "", // TODO: add phone number
  },
  {
    icon: MapPin,
    label: "Location",
    value: "", // TODO: add location
  },
] as const;

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm tracking-widest text-accent">
            Get In Touch
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Open to new opportunities, research collaborations, or just a
            conversation. Fill out the form or reach out directly.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {contactDetails.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="mt-0.5 rounded-md border border-border p-2 text-muted-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-0.5 text-sm text-foreground">
                    {value || (
                      <span className="text-muted-foreground italic">
                        Not provided
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
