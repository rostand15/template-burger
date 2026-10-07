import { contact } from "../data/content";

export const formatBRL = (value) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

export const whatsappUrl = (message = contact.whatsappMessage) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
