import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl, firstWord } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <>
      <section className='section-title'>
        <h1>data fetching</h1>
        <button onClick={handleClick}>
          <strong>
            Get new fact
          </strong>
        </button>
      </section>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl &&
          <a href='https://cataas.com' target='_blank' rel='noreferrer'>
            <img className='image-of-cat' src={imageUrl} alt={`image of a cat saying ${firstWord} `} />
          </a>}
      </section>
    </>
  )
}
