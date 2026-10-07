import { about, images } from "../data/content";
import ImageSlot from "./ImageSlot";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="sobre" className="bg-creme text-asfalto">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <SectionTitle>{about.title}</SectionTitle>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-asfalto/80">
            {about.paragraphs.map((p) => (
              <p key={p} className="max-w-prose">{p}</p>
            ))}
          </div>
        </div>
        <div className="aspect-[4/3] overflow-hidden border-4 border-asfalto shadow-hard-red">
          <ImageSlot src={images.about} alt="A Retro Burger por dentro" label="Foto do ambiente" />
        </div>
      </div>
    </section>
  );
}
