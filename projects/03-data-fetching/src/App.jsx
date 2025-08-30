import { useState, useEffect } from 'react'
import { getRamdomFact } from './services/facts'
import './App.css'

let firstWord = null
const CAT_ENDPOINT_IMAGE_URL = (fact) => {
  firstWord = fact.split(' ')[0]
  return (`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
}

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState('meow')

  useEffect(() => {
    getRamdomFact().then(setFact)
  }, [])

  useEffect(() => {
    if (!fact) return

    fetch(CAT_ENDPOINT_IMAGE_URL(fact))
      .then(res => res.json())
      .then(APIresponse => {
        const { url } = APIresponse
        setImageUrl(url)
        console.log(url)
      })
  }
  , [fact])

  const handleClick = async () => {
    const newFact = await getRamdomFact()
    setFact(newFact)
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
            <img className='image-of-cat' src={imageUrl} alt={`image of a cat saying ${firstWord}`} />
          </a>}
      </section>
    </>
  )
}
