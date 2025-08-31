import responseMovies from '../mock/with_results.json'
// import withoutResults from '../mock/without_results.json'

const ListOfMovies = ({ movies }) => {
  return (
    <ul>
      {
          movies.map(movie => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          ))
          }
    </ul>
  )
}

const NoMoviesResults = () => {
  return (
    <p>don't have any result</p>
  )
}

export function Movies () {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}
