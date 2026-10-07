import { Sandwich } from "lucide-react";

// Mostra a foto se `src` existir; senão, um placeholder discreto.
export default function ImageSlot({ src, alt, label = "Foto aqui", className = "" }) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />;
  }
  return (
    <div role="img" aria-label={alt} className={`slot flex h-full w-full flex-col items-center justify-center gap-2 text-creme/50 ${className}`}>
      <Sandwich className="h-10 w-10" aria-hidden="true" />
      <span className="font-cond text-base font-semibold">{label}</span>
    </div>
  );
}
