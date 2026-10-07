import { formatBRL } from "../lib/utils";

export default function MenuItem({ name, description, price, tag }) {
  return (
    <li className="py-4">
      <div className="flex items-baseline gap-3">
        <h3 className="font-cond text-xl font-bold text-creme sm:text-2xl">{name}</h3>
        {tag && (
          <span className="border border-turquesa px-2 font-cond text-sm font-semibold text-turquesa">{tag}</span>
        )}
        <span className="min-w-4 flex-1 translate-y-[-4px] border-b-2 border-dotted border-creme/30" aria-hidden="true" />
        <span className="font-cond text-xl font-bold text-gema sm:text-2xl">{formatBRL(price)}</span>
      </div>
      <p className="mt-1 max-w-md text-creme/70">{description}</p>
    </li>
  );
}
