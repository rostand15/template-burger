import { useState } from "react";
import { menu, menuNote } from "../data/content";
import { whatsappUrl } from "../lib/utils";
import Button from "./Button";
import MenuItem from "./MenuItem";
import SectionTitle from "./SectionTitle";

export default function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active);

  return (
    <section id="cardapio" className="bg-asfalto">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <SectionTitle>Cardápio</SectionTitle>

        <div role="tablist" aria-label="Categorias do cardápio" className="-mx-5 mt-8 flex gap-3 overflow-x-auto px-5 pb-2">
          {menu.map((c) => {
            const selected = c.id === active;
            return (
              <button
                key={c.id}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={selected}
                aria-controls={`painel-${c.id}`}
                onClick={() => setActive(c.id)}
                className={`shrink-0 border-2 px-5 py-2 font-cond text-lg font-bold transition-colors ${
                  selected ? "border-gema bg-gema text-asfalto" : "border-creme/30 text-creme hover:border-creme"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <div role="tabpanel" id={`painel-${category.id}`} aria-labelledby={`tab-${category.id}`} className="mt-6">
          <ul className="grid gap-x-16 divide-y divide-creme/10 md:grid-cols-2 md:divide-y-0">
            {category.items.map((item) => (
              <MenuItem key={item.name} {...item} />
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 border-t border-creme/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-creme/60">{menuNote}</p>
          <Button href={whatsappUrl()} external>
            Pedir pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
