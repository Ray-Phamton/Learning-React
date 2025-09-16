import { products } from './mocks/products.json'
import { Products } from './components/Products'

import './App.css'
export function App () {
  return (
    <>
      <Products products={products} />
    </>
  )
}
