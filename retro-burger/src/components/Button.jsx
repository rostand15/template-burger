const variants = {
  primary: "bg-gema text-asfalto border-asfalto shadow-hard-red",
  secondary: "bg-transparent text-creme border-creme/70 hover:bg-creme/10",
  light: "bg-creme text-asfalto border-asfalto shadow-hard-dark",
  dark: "bg-asfalto text-creme border-asfalto shadow-hard-cream",
};

const sizes = {
  md: "px-6 py-3 text-lg",
  sm: "px-4 py-2 text-base",
};

export default function Button({ href, children, variant = "primary", size = "md", external = false, className = "", ...rest }) {
  const base =
    "inline-flex items-center justify-center gap-2 border-2 font-cond font-bold tracking-wide transition-transform duration-150 " +
    (variant === "secondary" ? "" : "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ");
  return (
    <a
      href={href}
      className={`${base}${variants[variant]} ${sizes[size]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
