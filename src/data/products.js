const IMAGE_BASE = 'https://images.unsplash.com/photo-'

function imageUrl(photoId, width) {
  return `${IMAGE_BASE}${photoId}?w=${width}`
}

const PHOTO_IDS = {
  lemon: '1534706936160-d5ee67737249',
  nuts: '1540420773420-3366772f4999',
  apple: '1610832958506-aa56368176cf',
  watermelon: '1587049352847-4a222e784d38',
  nutMix: '1599599810769-bcde5a160d32',
  bread: '1509440159596-0249088772ff',
  pomegranate: '1615485290382-441e4d049cb5',
  peach: '1603569283847-be29b883bc5d',
  orangeJuice: '1613478223719-2ab802602423',
  spinach: '1576045057995-568f588f82fb',
  quinoa: '1544025162-d76694265947',
}

const PRODUCT_SEEDS = [
  { id: 1, category: 'Vegetables', title: 'Fresh organic villa farm lemon 500gm pack', rating: 4.5, price: 120.25, oldPrice: 123.25, photo: 'lemon', brand: 'Villa Farm', weight: '500 Grams', diet: 'Vegan' },
  { id: 2, category: 'Snacks', title: 'Best snacks with hazel nut pack 200gm', rating: 5, price: 145, oldPrice: 150, photo: 'nuts', brand: 'Nutri Crunch', weight: '200 Grams', diet: 'Vegetarian' },
  { id: 3, category: 'Fruits', title: 'Fresh organic apple 1kg simla morning', rating: 4.5, price: 120.25, oldPrice: 123.25, photo: 'apple', brand: 'Simla Morning', weight: '1 Kilogram', diet: 'Vegan' },
  { id: 4, category: 'Fruits', title: 'Organic fresh villa farm watermelon 5kg', rating: 3.2, price: 50.3, oldPrice: 72, photo: 'watermelon', brand: 'Villa Farm', weight: '5 Kilograms', diet: 'Vegan' },
  { id: 5, category: 'Snacks', title: 'Sweet crunchy nut mix 250gm pack', rating: 5, price: 120.25, oldPrice: 123.25, photo: 'nutMix', brand: 'Nutri Crunch', weight: '250 Grams', diet: 'Vegetarian' },
  { id: 6, category: 'Bakery', title: 'Delicious white baked fresh bread and toast', rating: 5, price: 20, oldPrice: 22.1, photo: 'bread', brand: 'Golden Oven', weight: '400 Grams', diet: 'Vegetarian' },
  { id: 7, category: 'Fruits', title: 'Organic pomegranate 5kg pack', rating: 4.4, price: 90, oldPrice: 99, photo: 'pomegranate', brand: 'Orchard Fresh', weight: '5 Kilograms', diet: 'Vegan' },
  { id: 8, category: 'Fruits', title: 'Organic peach fruits 1kg basket', rating: 4.1, price: 50, oldPrice: 55, photo: 'peach', brand: 'Orchard Fresh', weight: '1 Kilogram', diet: 'Vegan' },
  { id: 9, category: 'Drinks', title: 'Pressed apple juice 1L bottle', rating: 4.6, price: 75, oldPrice: 80, photo: 'apple', brand: 'Simply Pure', weight: '1 Litre', diet: 'Vegan' },
  { id: 10, category: 'Drinks', title: 'Simply orange juice fresh and pure', rating: 4.7, price: 22.85, oldPrice: 25.8, photo: 'orangeJuice', brand: 'Simply Pure', weight: '1 Litre', diet: 'Vegan' },
  { id: 11, category: 'Vegetables', title: 'Signature organic baby spinach', rating: 4.3, price: 18.85, oldPrice: 20.8, photo: 'spinach', brand: 'Organic Signature', weight: '250 Grams', diet: 'Vegan' },
  { id: 12, category: 'Snacks', title: 'Seeds of Change organic quinoa rice', rating: 4.8, price: 28.85, oldPrice: 32.8, photo: 'quinoa', brand: 'Seeds Of Change', weight: '500 Grams', diet: 'Gluten Free' },
]

const GALLERY_EXTRA_PHOTOS = ['nuts', 'orangeJuice']

export const PRODUCTS = PRODUCT_SEEDS.map(({ photo, ...seed }) => ({
  ...seed,
  image: imageUrl(PHOTO_IDS[photo], 300),
  gallery: [photo, ...GALLERY_EXTRA_PHOTOS].map((name) => imageUrl(PHOTO_IDS[name], 600)),
  description: `${seed.title}. Carefully selected ${seed.category.toLowerCase()} from ${seed.brand}, packed fresh and delivered straight to your door.`,
}))

export const CATEGORIES = [...new Set(PRODUCTS.map((product) => product.category))]

export const PRICE_MAX = Math.ceil(Math.max(...PRODUCTS.map((product) => product.price)))

export function getProductById(id) {
  return PRODUCTS.find((product) => product.id === Number(id)) ?? null
}
