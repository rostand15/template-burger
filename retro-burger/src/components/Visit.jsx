import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, visit } from "../data/content";
import { whatsappUrl } from "../lib/utils";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

export default function Visit() {
  return (
    <section id="visite" className="bg-cereja text-creme">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 lg:py-24">
        <div>
          <SectionTitle>{visit.title}</SectionTitle>

          <div className="mt-8 flex gap-3">
            <MapPin className="mt-1 h-6 w-6 shrink-0" aria-hidden="true" />
            <address className="text-lg not-italic leading-relaxed">
              {contact.address.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
              {contact.mapsLink && (
                <a href={contact.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block underline underline-offset-4">
                  Abrir no Google Maps
                </a>
              )}
            </address>
          </div>

          <dl className="mt-8 max-w-sm divide-y divide-creme/25 border-y border-creme/25">
            {visit.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4 py-3">
                <dt className="font-cond text-lg font-semibold">{h.days}</dt>
                <dd className="font-cond text-lg">{h.time}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-sm text-creme/80">{visit.hoursNote}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href={whatsappUrl()} external variant="light">
              <MessageCircle className="h-5 w-5" aria-hidden="true" /> WhatsApp
            </Button>
            <Button href={contact.instagramUrl} external variant="secondary">
              <Instagram className="h-5 w-5" aria-hidden="true" /> {contact.instagramHandle}
            </Button>
          </div>
          <p className="mt-5 flex items-center gap-2 font-cond text-lg">
            <Phone className="h-5 w-5" aria-hidden="true" /> {contact.phoneDisplay}
          </p>
        </div>

        <div className="min-h-72 overflow-hidden border-4 border-creme shadow-hard-dark">
          {contact.mapEmbedUrl ? (
            <iframe
              title="Mapa de localização"
              src={contact.mapEmbedUrl}
              loading="lazy"
              className="h-full min-h-72 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="slot flex h-full min-h-72 flex-col items-center justify-center gap-2 text-creme/70">
              <MapPin className="h-10 w-10" aria-hidden="true" />
              <span className="font-cond text-lg font-semibold">Mapa aqui</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
