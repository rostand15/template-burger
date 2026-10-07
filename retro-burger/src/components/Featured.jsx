import { featured, images } from "../data/content";
import { formatBRL, whatsappUrl } from "../lib/utils";
import Button from "./Button";
import ImageSlot from "./ImageSlot";

export default function Featured() {
  return (
    <section className="bg-cereja text-creme">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="aspect-square -rotate-1 overflow-hidden border-4 border-creme shadow-hard-dark">
          <ImageSlot src={images.featured} alt={featured.title} label="Foto do burger destaque" />
        </div>
        <div>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">{featured.title}</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-creme/90">{featured.description}</p>
          <p className="mt-4 font-cond text-lg font-semibold">{featured.ingredients.join(", ")}</p>
          <p className="mt-6 font-display text-4xl">{formatBRL(featured.price)}</p>
          <Button
            href={whatsappUrl(`Olá! Quero pedir o ${featured.title}.`)}
            external
            variant="light"
            className="mt-6"
          >
            {featured.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
