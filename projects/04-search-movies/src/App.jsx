import './App.css'
import responseMovies from './mock/with_results.json'
import { Movies } from './components/movies'

// const moviesDirectory = `http://www.omdbapi.com/?apikey=a93f7e73&s=${nombreDePelicula}`
// API KEY: a93f7e73

export function App () {
  const movies = responseMovies.Search
  return (
    <>
      <header>
        <h2>Search Movies</h2>
        <form className='from'>
          <input placeholder='Zootopia, Cars, Turbo...' />
          <button>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}
