import basket from "../images/basket.webp";
import bulb from "../images/bulb.webp";
import lamp from "../images/lamp.webp";
import image3 from "../images/image3.webp";
import chair from "../images/chair.webp";
import kitchen from "../images/Kitchen.webp";
const reviewcount = 11;
const review = "item is prolly one of my best buys so far ";

const products = [
  {
    id: 1,
    name: "Loveseat Sofa",
    price: 199.0,
    originalPrice: "$600.00",
    image: "chair.png",
    subimg: "livingroom.png",
    message:
      "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
    measurement: "17 1/2x20 5/8 ",
    tinyimg1: "chair.png",
    tinyimg2: "chair.png",
    tinyimg3: "chair.png",
    tinyimg4: "chair.png",
    SKU: "904.243.23",
    category: "living room",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    packaging:
      'Width: 20" Height: 1 ½" Length: 21 ½" Weight: 7 lb 8 oz Package(s): 1',
    review: review,
    reviewcount: reviewcount,
    discount: "-50%",
    rating: 5,
  },
  {
    id: 2,
    name: "Luxury Sofa",
    price: 299.0,
    originalPrice: "$500.00",
    image: "LivingRoom.png",
    reviewcount: reviewcount,
    discount: "-50%",
    rating: 5,
  },
  {
    id: 3,
    name: "Table Lamp",
    price: 19.0,
    originalPrice: null,
    image: "lamp.png",
    discount: "-50%",
    rating: 5,
  },
  {
    id: 4,
    name: "Cozy Sofa",
    price: 299.0,
    originalPrice: null,
    image: "cozy-sofa.png",
    discount: "-50%",
    rating: 5,
  },
  {
    id: 5,
    name: "White Drawer Unit",
    price: 89.99,
    originalPrice: null,
    image: "drawer.png",
    discount: "-50%",
    rating: 5,
  },
  {
    id: 6,
    name: "Black Tray Table",
    price: 19.99,
    originalPrice: null,
    image: "tray-table.png",
    discount: "-50%",
    rating: 5,
  },
  {
    id: 7,
    name: "Table Lamp",
    price: 19.0,
    originalPrice: null,
    image: "lamp2.png",
    discount: "-50%",
    rating: 5,
  },
  {
    id: 8,
    name: "Black Brow Side Table",
    price: 16.99,
    originalPrice: null,
    image: "side-table.png",
    discount: "-50%",
    rating: 5,
  },
  {
    id: 9,
    name: "Light Beige Pillow",
    price: 3.99,
    originalPrice: null,
    image: "pillow1.png",
    discount: "-50%",
    rating: 5,
  },
  {
    id: 10,
    name: "Table Lamp",
    price: 39.99,
    originalPrice: null,
    image: "bulb.png",
    discount: "-50%",
    rating: 5,
  },
  {
    id: 11,
    name: "Bamboo Basket",
    price: 9.99,
    originalPrice: null,
    image: "basket.png",
    discount: "-50%",
    rating: 5,
  },
  {
    id: 12,
    name: "Off-white Pillow",
    price: 7.99,
    originalPrice: null,
    image: "pillow2.png",
    discount: "-50%",
    rating: 5,
  },
];

const newAarrival = [
  {
    id: 1,
    name: "Loveseat Sofa",
    price: 199.0,
    originalPrice: 249.0,
    image: chair,
    discount: "-30%",
    rating: 5,
  },
  {
    id: 2,
    name: "Table Lamp",
    price: 24.99,
    originalPrice: null,
    image: bulb,
    discount: "-50%",
    rating: 4,
  },
  {
    id: 3,
    name: "Beige Table Lamp",
    price: 32.99,
    originalPrice: null,
    image: lamp,
    discount: "-50%",
    rating: 5,
  },
  {
    id: 4,
    name: "Bamboo Basket",
    price: 21.0,
    originalPrice: null,
    image: basket,
    discount: "-50%",
    rating: 5,
  },
  {
    id: 5,
    name: "Toaster",
    price: 29.99,
    originalPrice: null,
    image: kitchen,
    discount: "-50%",
    rating: 5,
  },
  {
    id: 6,
    name: "Beige Table Lamp",
    price: 32.99,
    originalPrice: null,
    image: lamp,
    discount: "-50%",
    rating: 5,
  },
  {
    id: 7,
    name: "Drawer",
    price: 32.99,
    originalPrice: null,
    image: image3,
    discount: "-50%",
    rating: 5,
  },
];

const articles = [
  {
    id: 1,
    title: "7 ways to decorate your home",
    image: "image1.webp", // Replace with actual image URL
    link: "#",
  },
  {
    id: 2,
    title: "Kitchen organization",
    image: "image2.webp", // Replace with actual image URL
    link: "#",
  },
  {
    id: 3,
    title: "Decor your bedroom",
    image: "image4.webp", // Replace with actual image URL
    link: "#",
  },
];

export { newAarrival, products, articles };
