import { gallery, images } from "../data/content";
import ImageSlot from "./ImageSlot";
import SectionTitle from "./SectionTitle";

export default function Gallery() {
  return (
    <section id="galeria" className="bg-asfalto">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <SectionTitle>{gallery.title}</SectionTitle>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {images.gallery.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden border-2 border-creme/20 ${
                img.wide ? "col-span-2 aspect-[2/1] md:aspect-auto md:min-h-[16rem]" : "aspect-square"
              }`}
            >
              <ImageSlot src={img.src} alt={img.alt} label={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
