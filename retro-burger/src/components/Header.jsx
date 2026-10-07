import { useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, nav } from "../data/content";
import { whatsappUrl } from "../lib/utils";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-creme/10 bg-asfalto/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" onClick={close} className="font-display text-xl text-creme">
          {brand.name}
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="font-cond text-lg font-semibold text-creme/80 hover:text-gema">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={whatsappUrl()} external size="sm" className="hidden sm:inline-flex">
            Pedir agora
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-creme/40 text-creme md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="border-t border-creme/10 bg-asfalto px-5 pb-6 pt-2 md:hidden">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-creme/10">
                <a href={item.href} onClick={close} className="block py-4 font-cond text-2xl font-semibold text-creme">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={whatsappUrl()} external className="mt-5 w-full">
            Pedir pelo WhatsApp
          </Button>
        </nav>
      )}
    </header>
  );
}
