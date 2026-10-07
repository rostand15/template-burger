// =====================================================================
//  CONTEÚDO DO SITE: é aqui que você troca tudo.
//  Tudo marcado como "DEMO" é ilustrativo e deve ser substituído pelos
//  dados reais da hamburgueria antes de publicar.
// =====================================================================

export const brand = {
  name: "Retro Burger",
  tagline: "Hambúrguer artesanal com alma de diner.",
  footerNote: "Site de demonstração. Textos, preços e fotos são ilustrativos.",
};

// DEMO: contatos fictícios. Troque pelos reais.
export const contact = {
  whatsappNumber: "5500000000000", // formato: 55 + DDD + número, só dígitos
  whatsappMessage: "Olá! Vim pelo site da Retro Burger e gostaria de fazer um pedido.",
  phoneDisplay: "(00) 00000-0000",
  instagramUrl: "https://instagram.com/", // ex.: https://instagram.com/perfil
  instagramHandle: "@seuinstagram",
  address: ["Rua Exemplo, 000", "Bairro, Cidade/UF"],
  // Cole aqui o link "Incorporar mapa" do Google Maps (src do iframe). Vazio = mostra placeholder.
  mapEmbedUrl: "",
  mapsLink: "", // link "Abrir no Google Maps" (opcional)
};

// Imagens: coloque os arquivos em /public/images e use "/images/nome.jpg".
// Deixe "" para exibir o placeholder.
export const images = {
  hero: "",
  featured: "",
  about: "",
  gallery: [
    { src: "", alt: "Hambúrguer na chapa", wide: true },
    { src: "", alt: "Batatas fritas" },
    { src: "", alt: "Milkshake" },
    { src: "", alt: "Interior da hamburgueria" },
    { src: "", alt: "Equipe preparando pedidos" },
  ],
};

export const nav = [
  { label: "Cardápio", href: "#cardapio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Visite", href: "#visite" },
];

export const hero = {
  titleTop: "Retro",
  titleBottom: "Burger",
  subtitle:
    "Pão macio, carne suculenta e aquele clima de lanchonete clássica. Feito na hora, do jeito que a gente gosta.",
  primaryCta: "Ver cardápio",
  secondaryCta: "Pedir pelo WhatsApp",
  badge: "Feito na chapa",
};

export const differentials = {
  title: "O que não pode faltar num bom burger",
  items: [
    {
      icon: "beef",
      title: "Blend da casa",
      text: "Hambúrguer suculento, preparado com ingredientes frescos e montado no capricho.",
    },
    {
      icon: "flame",
      title: "Direto da chapa",
      text: "Cada pedido sai quente, no ponto certo e com crosta dourada.",
    },
    {
      icon: "clock",
      title: "Pedido sem fila",
      text: "Peça pelo WhatsApp, retire no balcão ou receba onde estiver.",
    },
  ],
};

export const featured = {
  title: "Double Chrome",
  description:
    "Dois blends na chapa, queijo derretido, picles crocantes e o molho da casa em pão brioche tostado.",
  ingredients: ["2 blends", "queijo cheddar", "picles", "cebola caramelizada", "molho da casa"],
  price: 42,
  cta: "Pedir este burger",
};

// DEMO: preços e itens ilustrativos. price em número (ex.: 32 ou 32.5).
export const menu = [
  {
    id: "burgers",
    label: "Burgers",
    items: [
      { name: "Clássico da Casa", description: "Blend, queijo, alface, tomate e maionese da casa.", price: 32 },
      { name: "Double Chrome", description: "Dois blends, cheddar, picles, cebola caramelizada e molho da casa.", price: 42, tag: "Destaque" },
      { name: "Bacon Jukebox", description: "Blend, bacon crocante, cheddar e molho barbecue.", price: 38 },
      { name: "Cheddar Noir", description: "Blend, cheddar cremoso, cebola roxa e pão preto.", price: 39 },
      { name: "Veggie 66", description: "Burger vegetal, queijo, rúcula e tomate seco.", price: 36, tag: "Vegetariano" },
    ],
  },
  {
    id: "acompanhamentos",
    label: "Acompanhamentos",
    items: [
      { name: "Batata Frita", description: "Porção crocante com sal na medida.", price: 18 },
      { name: "Batata Cheddar e Bacon", description: "Batata coberta com cheddar e bacon.", price: 26 },
      { name: "Onion Rings", description: "Anéis de cebola empanados.", price: 22 },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    items: [
      { name: "Milkshake", description: "Baunilha, chocolate ou morango.", price: 24 },
      { name: "Limonada", description: "Gelada, com limão espremido na hora.", price: 12 },
      { name: "Refrigerante", description: "Lata 350 ml.", price: 7 },
    ],
  },
  {
    id: "sobremesas",
    label: "Sobremesas",
    items: [
      { name: "Brownie com Sorvete", description: "Brownie quente com bola de creme.", price: 20 },
      { name: "Torta de Maçã", description: "Fatia com canela e calda.", price: 16 },
    ],
  },
];
export const menuNote = "Preços e itens ilustrativos para demonstração.";

export const about = {
  title: "Uma lanchonete clássica, com cara de hoje",
  paragraphs: [
    "A Retro Burger nasce da vontade de unir o clima dos diners americanos dos anos 50 e 60 com o hambúrguer artesanal que as pessoas procuram hoje.",
    "Aqui o foco é simples: ingrediente bom, chapa quente e atendimento que faz você querer voltar.",
  ],
  // DEMO: texto provisório. Troque pela história real do proprietário.
};

export const gallery = { title: "Dá uma olhada" };

export const visit = {
  title: "Venha nos visitar",
  // DEMO: horários ilustrativos
  hours: [
    { days: "Segunda a quinta", time: "18h às 23h" },
    { days: "Sexta e sábado", time: "18h à 0h" },
    { days: "Domingo", time: "18h às 22h" },
  ],
  hoursNote: "Horários ilustrativos para demonstração.",
};
