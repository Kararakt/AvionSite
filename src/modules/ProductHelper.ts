export interface itemsView {
  id: number;
  src: string;
  name: string;
  cost: number;
  url: string;
  priceRange: string;
  productType: string;
  designer: string;
  height: number;
  width: number;
  depth: number;
}

export const allItems = ref<itemsView[]>([
  {
    id: 1,
    src: "/src/assets/chair_pic.png",
    name: "The Dandy chair",
    cost: 250,
    url: "/DandyChair",
    priceRange: "101 - 250",
    productType: "Furniture",
    designer: "Robert Smith",
    height: 110,
    width: 75,
    depth: 50,
  },
  {
    id: 2,
    src: "/src/assets/backless_stool.png",
    name: "The cool stool",
    cost: 150,
    url: "/Stool",
    priceRange: "101 - 250",
    productType: "Furniture",
    designer: "Biggie Smalls",
    height: 130,
    width: 90,
    depth: 40,
  },
  {
    id: 3,
    src: "/src/assets/second_chair.png",
    name: "The Dandy chair",
    cost: 280,
    url: "/SecondDandyChair",
    priceRange: "250+",
    productType: "Furniture",
    designer: "Thom Yorke",
    height: 170,
    width: 40,
    depth: 55,
  },
  {
    id: 4,
    src: "/src/assets/three_chairs.png",
    name: "The Dandy chairs",
    cost: 500,
    url: "/DandyChairs",
    priceRange: "250+",
    productType: "Furniture",
    designer: "Robert Smith",
    height: 220,
    width: 56,
    depth: 77,
  },
  {
    id: 5,
    src: "/src/assets/last_chair.png",
    name: "The Dandy chair",
    cost: 320,
    url: "/LastDandyChair",
    priceRange: "250+",
    productType: "Furniture",
    designer: "Liam Gallagher",
    height: 552,
    width: 33,
    depth: 45,
  },
  {
    id: 6,
    src: "/src/assets/The_Lucy_Lamp.png",
    name: "The Lucy Lamp",
    cost: 399,
    url: "/LucyLamp",
    priceRange: "250+",
    productType: "Light fittings",
    designer: "Biggie Smalls",
    height: 352,
    width: 22,
    depth: 33,
  },
  {
    id: 7,
    src: "/src/assets/the_dancy_lamp.png",
    name: "The Dancy Lamp",
    cost: 200,
    url: "/DancyLamp",
    priceRange: "101 - 250",
    productType: "Light fittings",
    designer: "Thom Yorke",
    height: 621,
    width: 73,
    depth: 22,
  },
  {
    id: 8,
    src: "/src/assets/Rustic_Vase_Set.png",
    name: "Rustic Vase Set",
    cost: 50,
    url: "/RusticVase",
    priceRange: "0 - 100",
    productType: "HomeWare",
    designer: "Robert Smith",
    height: 131,
    width: 36,
    depth: 77,
  },
  {
    id: 9,
    src: "/src/assets/The_Silky_Vase.png",
    name: "The Silky Vase",
    cost: 65,
    url: "/SilkyVase",
    priceRange: "0 - 100",
    productType: "HomeWare",
    designer: "Liam Gallagher",
    height: 177,
    width: 22,
    depth: 11,
  },
  {
    id: 10,
    src: "/src/assets/basic_white_vase.png",
    name: "Basic white vase",
    cost: 85,
    url: "/WhiteVase",
    priceRange: "0 - 100",
    productType: "HomeWare",
    designer: "Biggie Smalls",
    height: 62,
    width: 11,
    depth: 41,
  },
  {
    id: 11,
    src: "/src/assets/second_Rusty_Vase.png",
    name: "The Rusty Vase",
    cost: 90,
    url: "/RustyVase",
    priceRange: "0 - 100",
    productType: "HomeWare",
    designer: "Thom Yorke",
    height: 44,
    width: 11,
    depth: 22,
  },
]);

export const checkProductType = ref<string[]>([]);
export const checkProductPrice = ref<string[]>([]);
export const checkDesigner = ref<string[]>([]);

export const productType = ["Furniture", "Light fittings", "HomeWare"];
export const productPrice = ["0 - 100", "101 - 250", "250+"];
export const productDesigner = [
  "Robert Smith",
  "Liam Gallagher",
  "Biggie Smalls",
  "Thom Yorke",
];

export const sortedItems = computed(() =>
  allItems.value.filter(
    (p) =>
      (checkProductType.value.length > 0
        ? checkProductType.value.includes(p.productType)
        : p) &&
      (checkProductPrice.value.length > 0
        ? checkProductPrice.value.includes(p.priceRange)
        : p) &&
      (checkDesigner.value.length > 0
        ? checkDesigner.value.includes(p.designer)
        : p)
  )
);

export const sortedArrayHasItem = computed(() => sortedItems.value.length > 0);

export const brandInformation = [
  {
    id: 1,
    src: "/src/assets/first_logo_brand.png",
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard",
  },
  {
    id: 2,
    src: "/src/assets/second_logo_brand.png",
    title: "Made by true artisans",
    description:
      "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    id: 3,
    src: "/src/assets/third_logo_brand.png",
    title: "Unbeatable prices",
    description:
      "For our materials and quality you won’t find better prices anywhere",
  },
  {
    id: 4,
    src: "/src/assets/fourth_logo_brand.png",
    title: "Recycled packaging",
    description:
      "We use 100% recycled packaging to ensure our footprint is manageable",
  },
];
