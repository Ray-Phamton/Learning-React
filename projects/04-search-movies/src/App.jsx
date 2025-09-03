import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/movies'
import { useEffect, useRef, useState } from 'react'

// const moviesDirectory = `http://www.omdbapi.com/?apikey=a93f7e73&s=${nombreDePelicula}`
// API KEY: a93f7e73

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState('')
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('el campo no puede estar vacio')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No puede buscar numeros')
      return
    }
    if (search.length < 3) {
      setError('No puede buscar peliculas de menos de 3 letras')
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

export function App () {
  const { movies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(search)
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h2>Search Movies</h2>
        <form className='from' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }} onChange={handleChange} value={search} name='search' placeholder='Zootopia, Cars, Turbo...'
          />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
