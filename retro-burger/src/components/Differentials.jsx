import { Beef, Flame, Clock } from "lucide-react";
import { differentials } from "../data/content";
import SectionTitle from "./SectionTitle";

const icons = { beef: Beef, flame: Flame, clock: Clock };

export default function Differentials() {
  return (
    <section className="bg-creme text-asfalto">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <SectionTitle>{differentials.title}</SectionTitle>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {differentials.items.map((item) => {
            const Icon = icons[item.icon] ?? Beef;
            return (
              <div key={item.title} className="border-t-4 border-cereja pt-6">
                <Icon className="h-9 w-9 text-cereja" aria-hidden="true" />
                <h3 className="mt-4 font-cond text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 max-w-sm leading-relaxed text-asfalto/75">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
