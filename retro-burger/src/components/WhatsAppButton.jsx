import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/utils";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir pelo WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 border-2 border-asfalto bg-gema px-4 py-3 font-cond text-lg font-bold text-asfalto shadow-hard-dark transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      Pedir
    </a>
  );
}
