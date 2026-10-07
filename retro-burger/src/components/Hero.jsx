import { hero, images } from "../data/content";
import { whatsappUrl } from "../lib/utils";
import Button from "./Button";
import ImageSlot from "./ImageSlot";

export default function Hero() {
  return (
    <section id="inicio" className="bg-asfalto">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-10 md:grid-cols-2 md:gap-10 md:pt-16 lg:pb-28">
        <div>
          <h1 className="wordmark-shadow font-display text-[clamp(3.5rem,16vw,5.5rem)] leading-[0.92] text-creme md:text-[4.25rem] lg:text-[6.5rem]">
            <span className="hero-in block" style={{ "--d": "0ms" }}>{hero.titleTop}</span>
            <span className="hero-in block" style={{ "--d": "120ms" }}>{hero.titleBottom}</span>
          </h1>

          <div className="hero-in my-6 flex w-40 flex-col gap-1.5" style={{ "--d": "240ms" }} aria-hidden="true">
            <span className="h-1.5 bg-cereja" />
            <span className="h-1.5 bg-creme" />
            <span className="h-1.5 bg-turquesa" />
          </div>

          <p className="hero-in max-w-md text-lg leading-relaxed text-creme/80" style={{ "--d": "320ms" }}>
            {hero.subtitle}
          </p>

          <div className="hero-in mt-8 flex flex-col gap-4 sm:flex-row" style={{ "--d": "420ms" }}>
            <Button href="#cardapio">{hero.primaryCta}</Button>
            <Button href={whatsappUrl()} external variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="hero-in relative mx-auto w-full max-w-md md:max-w-none" style={{ "--d": "300ms" }}>
          <div className="aspect-[4/5] rotate-1 overflow-hidden border-4 border-creme shadow-hard-red sm:aspect-square">
            <ImageSlot src={images.hero} alt="Hambúrguer da Retro Burger" label="Foto principal do burger" />
          </div>
          <div className="absolute -bottom-6 -left-2 flex h-28 w-28 -rotate-6 items-center justify-center rounded-full border-4 border-asfalto bg-gema p-3 text-center font-display text-base leading-tight text-asfalto sm:-left-6">
            {hero.badge}
          </div>
        </div>
      </div>
      <div className="checker h-8" aria-hidden="true" />
    </section>
  );
}
