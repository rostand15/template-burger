# Retro Burger: landing page de demonstração

React + Vite + Tailwind CSS. Todo o conteúdo editável fica em **um único arquivo**.

## Como rodar (passo a passo)

1. Instale o Node.js 18 ou superior (nodejs.org).
2. Abra o terminal na pasta do projeto.
3. Rode `npm install` (só na primeira vez).
4. Rode `npm run dev` e abra o endereço que aparecer (normalmente http://localhost:5173).
5. Para gerar a versão final: `npm run build` (a pasta `dist/` é a que vai para o ar).

## O que editar e onde

| Quero trocar... | Arquivo |
| --- | --- |
| Textos, preços, cardápio, horários, endereço, WhatsApp, Instagram | `src/data/content.js` |
| Cores da marca | `tailwind.config.js` (bloco `colors`) |
| Fontes | `index.html` (link do Google Fonts) e `tailwind.config.js` (`fontFamily`) |
| Ordem das seções | `src/App.jsx` |

## Como colocar fotos

1. Copie as imagens para `public/images/` (ex.: `burger.jpg`).
2. Em `src/data/content.js`, no bloco `images`, troque `""` por `"/images/burger.jpg"`.
3. Enquanto o campo estiver vazio, aparece um placeholder.

## Antes de mostrar/publicar

- Troque tudo marcado como DEMO em `content.js` (WhatsApp, endereço, horários, preços).
- Remova a faixa amarela de demonstração: apague `<DemoBar />` em `src/App.jsx`.
- Para o mapa, cole em `mapEmbedUrl` o link de "Incorporar mapa" do Google Maps.

## Publicar

Suba a pasta no GitHub e conecte na Vercel ou Netlify (build: `npm run build`, saída: `dist`).
