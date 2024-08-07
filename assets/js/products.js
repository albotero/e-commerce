// Products from falabella.com.co
// Prices in COP

const CATEGORIES = {
  calzado: "Calzado",
  celulares: "Celulares",
  electro: "Electrodomésticos",
  perfumes: "Perfumes",
}

export const PRODUCTS = [
  {
    id: 1,
    title: "Perfume Yara 100ml Lattafa",
    price: 199000,
    category: CATEGORIES.perfumes,
    img: "yara-lataffa.avif",
  },
  {
    id: 2,
    title: "Perfume Lancome La Vie Est Belle Mujer 75 ml",
    price: 469990,
    category: CATEGORIES.perfumes,
    img: "lancome-la-vie-est-belle-mujer.avif",
  },
  {
    id: 3,
    title: "Perfume Carolina Herrera Hombre 212 NYC 200 ml",
    price: 579990,
    category: CATEGORIES.perfumes,
    img: "ch-212-men.avif",
  },
  {
    id: 4,
    title: "Perfume Hombre Versace Eros 100 ml",
    price: 519990,
    category: CATEGORIES.perfumes,
    img: "versace-eros-hombre.avif",
  },
  {
    id: 5,
    title: "Perfume Mujer Calvin Klein Ck In2U For Her",
    price: 199900,
    category: CATEGORIES.perfumes,
    img: "ck-mujer.avif",
  },
  {
    id: 6,
    title: "Perfume Mujer Hugo Boss Hugo Woman 50 ml",
    price: 229990,
    category: CATEGORIES.perfumes,
    img: "hugo-boss-mujer.avif",
  },
  {
    id: 7,
    title: "Perfume Mujer Gucci Bloom 100ml",
    price: 759900,
    category: CATEGORIES.perfumes,
    img: "gucci-bloom.avif",
  },
  {
    id: 8,
    title: "iPhone 13 128 GB 5G",
    price: 2879900,
    category: CATEGORIES.celulares,
    img: "iphone-13.avif",
  },
  {
    id: 9,
    title: "Celular Samsung S24 5G 256GB",
    price: 4199900,
    category: CATEGORIES.celulares,
    img: "samsung-s24.avif",
  },
  {
    id: 10,
    title: "Celular Samsung Galaxy S23 Ultra 256Gb",
    price: 3749900,
    category: CATEGORIES.celulares,
    img: "samsung-galaxy-s23-ultra.avif",
  },
  {
    id: 11,
    title: "iPhone 15 Pro Max 256GB 5G",
    price: 6499900,
    category: CATEGORIES.celulares,
    img: "iphone-15-pro-max.avif",
  },
  {
    id: 12,
    title: "Celular Motorola MOTO G24 POWER 256GB Azul",
    price: 599900,
    category: CATEGORIES.celulares,
    img: "motorola-moto-g24-power-azul.avif",
  },
  {
    id: 13,
    title: "Nevecón Side by Side No Frost Inverter 442L Electrolux",
    price: 3199900,
    category: CATEGORIES.electro,
    img: "nevecon-442l-electrolux.avif",
  },
  {
    id: 14,
    title: "Nevecón LG Side by Side 637L",
    price: 5979900,
    category: CATEGORIES.electro,
    img: "nevecon-lg-637l.avif",
  },
  {
    id: 15,
    title: "Freidora de aire Recco RFA-LEGGER ST 6L",
    price: 299900,
    category: CATEGORIES.electro,
    img: "air-fryer-recco-6l.avif",
  },
  {
    id: 16,
    title: "Aspiradora robot Xiaomi Vacuum S10 Aspira y Trapea",
    price: 1099900,
    category: CATEGORIES.electro,
    img: "aspiradora-robot-xiaomi-vacuum-s10.avif",
  },
  {
    id: 17,
    title: "Aire Acondicionado Mabe Inverter 220V 12000 BTU Blanco",
    price: 1669900,
    category: CATEGORIES.electro,
    img: "ac-mabe-inverter-12000btu-blanco.avif",
  },
  {
    id: 18,
    title: "Refrigerador No Frost 267L Brutos Black Steel Mabe",
    price: 1689900,
    category: CATEGORIES.electro,
    img: "refrigerador-nofrost-267l-mabe.avif",
  },
  {
    id: 19,
    title: "Nevera Mabe Congelador superior No Frost 297L Platinum",
    price: 1899900,
    category: CATEGORIES.electro,
    img: "nevera-mabe-congelador-superior-nofrost-297l.avif",
  },
  {
    id: 20,
    title: "Lavadora LG Carga frontal 22 KG",
    price: 3389900,
    category: CATEGORIES.electro,
    img: "lavadora-lg-frontal-22kg.avif",
  },
  {
    id: 21,
    title: "Horno microondas Recco 20L",
    price: 229900,
    category: CATEGORIES.electro,
    img: "microondas-recco-20l.avif",
  },
  {
    id: 22,
    title: "Lavadora Whirlpool Carga Superior 20 KG",
    price: 1949900,
    category: CATEGORIES.electro,
    img: "lavadora-whirlpool-superior-20kg.avif",
  },
  {
    id: 23,
    title: "Tenis moda New Balance Niña",
    price: 197990,
    category: CATEGORIES.calzado,
    img: "tenis-nb-nina.avif",
  },
  {
    id: 24,
    title: "Bota Mujer Ocai Mara",
    price: 126806,
    category: CATEGORIES.calzado,
    img: "bota-mujer-ocai-mara.avif",
  },
  {
    id: 25,
    title: "Tacones Aldo Mujer con Tacón Medio Deatram",
    price: 159990,
    category: CATEGORIES.calzado,
    img: "tacones-aldo-mujer.avif",
  },
  {
    id: 26,
    title: "Botines Mossimo Disoknit Mujer",
    price: 115990,
    category: CATEGORIES.calzado,
    img: "botines-mossimo-disoknit.avif",
  },
  {
    id: 27,
    title: "Tenis Adidas para Mujer Running",
    price: 249990,
    category: CATEGORIES.calzado,
    img: "tenis-adidas-mujer-running.avif",
  },
  {
    id: 28,
    title: "Tenis Para Hombre Cuero VillabonR",
    price: 168900,
    category: CATEGORIES.calzado,
    img: "tenis-hombre-cuero-villabonr.avif",
  },
  {
    id: 29,
    title: "Botin café HEX READY MID CAT",
    price: 269950,
    category: CATEGORIES.calzado,
    img: "botin-cafe-cat.avif",
  },
  {
    id: 30,
    title: "Bota Cuero Mujer Negro Ocai Cata",
    price: 159706,
    category: CATEGORIES.calzado,
    img: "bota-cuero-mujer-ocai-cata.avif",
  },
]
