export default function SectionTitle({ children, className = "" }) {
  return (
    <h2 className={`max-w-2xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl ${className}`}>
      {children}
    </h2>
  );
}
