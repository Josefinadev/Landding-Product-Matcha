const px = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMG = {
  heroDrink: px(32268862, 800, 1200), // iced matcha latte on white background
  bowlsStrip: px(38987827, 1200, 480), // matcha bowl with bamboo whisk on tray
  circleTop: px(37119337, 640, 640), // iced matcha latte top view
  drinksRow: px(32972519, 1200, 640), // assorted iced drinks minimal setting
  product1: px(5078583, 700, 700), // matcha powder on spoon, white bg
  product2: px(32695045, 700, 700), // iced matcha with whisk on marble
  product3: px(33433785, 700, 700), // matcha latte with whipped cream
  product4: px(33037261, 700, 700), // bamboo whisk in bowl of matcha
  product5: px(5078591, 700, 700), // spoons with green + cocoa powder
  product6: px(33371820, 700, 700), // two iced matcha lattes with straws
  bannerCup: px(19845889, 480, 480), // iced matcha plastic cup with straw
  energizeBowl: px(38987827, 760, 760), // matcha bowl square crop
  energizeSplash: px(17011667, 760, 760), // green drink splash in glass
  reviewDrink: px(33433785, 480, 560), // matcha frappe with cream
  plantation: px(39618616, 1200, 900), // lush green tea plantation rows
  whiskArtisan: px(33094634, 700, 700), // barista whisking matcha close up
  avatar1: px(6497112, 200, 200),
  avatar2: px(6497114, 200, 200),
  avatar3: px(6102841, 200, 200),
  reviewAvatar: px(6497114, 300, 300),
};

export const PRODUCTS = [
  { id: "duo-prueba", name: "Dúo de prueba ceremonial y premium (20 g)", price: 39, img: "/producto%201.jpg" },
  { id: "premium-moland", name: "Matcha premium japonés (50 g)", price: 70, img: "/producto2.jpg" },
  { id: "ceremonial-shizuoka", name: "Matcha ceremonial Shizuoka (50 g)", price: 89, img: "/producto3.jpg" },
  { id: "premium-uji", name: "Matcha premium Uji (100 g)", price: 89, img: "/producto4.jpg" },
  { id: "duo-ceremonial", name: "Dúo ceremonial y premium (150 g)", price: 169, img: "/producto5.jpg" },
];

export type Product = (typeof PRODUCTS)[number];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN" }).format(price);
