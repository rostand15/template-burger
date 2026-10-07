import { brand, nav } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-asfalto">
      <div className="checker h-4" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 pb-28 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl">{brand.name}</p>
          <p className="mt-1 text-creme/60">{brand.tagline}</p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="font-cond text-lg text-creme/80 hover:text-gema">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="border-t border-creme/10 px-5 py-4 text-center text-sm text-creme/50">
        © {new Date().getFullYear()} {brand.name}. {brand.footerNote}
      </p>
    </footer>
  );
}
