import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useState, useContext } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { FilterContext } from './context/filters'

function useFilters () {
  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
        product.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}

export function App () {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  )
}
