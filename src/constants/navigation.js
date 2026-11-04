export const HOME_LINKS = [
  { label: 'Home 1', to: '/' },
  { label: 'Home 2', to: '/home2' },
  { label: 'Home 3', to: '/home3' },
]

export const NAV_GROUPS = [
  {
    label: 'Products',
    items: [
      { label: 'Shop with Sidebar', to: '/product-list-left' },
      { label: 'Shop Full Width', to: '/full-wide' },
      { label: 'Product Details', to: '/product/1' },
    ],
  },
  {
    label: 'Pages',
    items: [
      { label: 'About Us', to: '/about-us' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Cart', to: '/cart' },
      { label: 'Checkout', to: '/checkout' },
    ],
  },
  {
    label: 'Blog',
    items: [
      { label: 'Blog Full Width', to: '/blog-full-width' },
      { label: 'Blog Right Side', to: '/blog-right-side' },
    ],
  },
]

export const ACCOUNT_LINKS = [
  { label: 'Login', to: '/login' },
  { label: 'Register', to: '/register' },
]
