import { useCart } from '../hooks/useCart.js'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import './Products.css'

export function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong>
              </div>
              <div>
                <h3>${product.price}</h3>
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                  isProductInCart
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon />
                }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
