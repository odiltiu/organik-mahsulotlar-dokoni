import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { CartContext } from './cartContext'
import { getProductById } from '../data/products'

const CART_STORAGE_KEY = 'organik_savat'
const WISHLIST_STORAGE_KEY = 'organik_sevimlilar'
const MAX_QUANTITY = 20
const NOTICE_DURATION_MS = 2200

function readStorage(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) ?? '[]')
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Brauzer xotirasi yopiq bo'lsa ham sayt ishlayveradi
  }
}

function clampQuantity(quantity) {
  return Math.min(MAX_QUANTITY, Math.max(1, Math.floor(Number(quantity)) || 1))
}

function loadCartLines() {
  return readStorage(CART_STORAGE_KEY)
    .filter((line) => line && getProductById(line.id))
    .map((line) => ({ id: Number(line.id), quantity: clampQuantity(line.quantity) }))
}

function loadWishlist() {
  return readStorage(WISHLIST_STORAGE_KEY).filter((id) => getProductById(id)).map(Number)
}

function addToLines(lines, id, quantity) {
  const existing = lines.find((line) => line.id === id)
  if (!existing) return [...lines, { id, quantity: clampQuantity(quantity) }]
  return lines.map((line) =>
    line.id === id ? { ...line, quantity: clampQuantity(line.quantity + quantity) } : line,
  )
}

function CartProvider({ children }) {
  const [lines, setLines] = useState(loadCartLines)
  const [wishlistIds, setWishlistIds] = useState(loadWishlist)
  const [notice, setNotice] = useState('')
  const noticeTimerRef = useRef(null)

  useEffect(() => writeStorage(CART_STORAGE_KEY, lines), [lines])
  useEffect(() => writeStorage(WISHLIST_STORAGE_KEY, wishlistIds), [wishlistIds])
  useEffect(() => () => clearTimeout(noticeTimerRef.current), [])

  const showNotice = useCallback((message) => {
    clearTimeout(noticeTimerRef.current)
    setNotice(message)
    noticeTimerRef.current = setTimeout(() => setNotice(''), NOTICE_DURATION_MS)
  }, [])

  const addItem = useCallback(
    (id, quantity = 1) => {
      const product = getProductById(id)
      if (!product) return
      setLines((current) => addToLines(current, product.id, quantity))
      showNotice(`"${product.title}" added to cart`)
    },
    [showNotice],
  )

  const setItemQuantity = useCallback((id, quantity) => {
    setLines((current) =>
      current.map((line) => (line.id === id ? { ...line, quantity: clampQuantity(quantity) } : line)),
    )
  }, [])

  const removeItem = useCallback((id) => {
    setLines((current) => current.filter((line) => line.id !== id))
  }, [])

  const clearCart = useCallback(() => setLines([]), [])

  const toggleWishlist = useCallback(
    (id) => {
      const isSaved = wishlistIds.includes(id)
      setWishlistIds((current) => (isSaved ? current.filter((item) => item !== id) : [...current, id]))
      showNotice(isSaved ? 'Removed from wishlist' : 'Saved to wishlist')
    },
    [wishlistIds, showNotice],
  )

  const value = useMemo(() => {
    const items = lines.map((line) => {
      const product = getProductById(line.id)
      return { ...product, quantity: line.quantity, lineTotal: product.price * line.quantity }
    })
    return {
      items,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce((sum, item) => sum + item.lineTotal, 0),
      wishlistIds,
      maxQuantity: MAX_QUANTITY,
      addItem,
      setItemQuantity,
      removeItem,
      clearCart,
      toggleWishlist,
    }
  }, [lines, wishlistIds, addItem, setItemQuantity, removeItem, clearCart, toggleWishlist])

  return (
    <CartContext.Provider value={value}>
      {children}
      <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-4 z-[60] flex justify-center px-4">
        {notice && (
          <p className="max-w-md rounded-lg bg-gray-900 px-4 py-2.5 text-xs font-semibold text-white shadow-lg">
            {notice}
          </p>
        )}
      </div>
    </CartContext.Provider>
  )
}

export default CartProvider
