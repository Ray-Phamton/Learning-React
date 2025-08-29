import { useState, useEffect } from 'react'
import './App.css'

let firstWord = null
const CAT_ENDPOINT_RAMDOM_CAT = 'https://catfact.ninja/fact'

const CAT_ENDPOINT_IMAGE_URL = (fact) => {
  firstWord = fact.split(' ')[0]
  return (`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
}

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState('meow')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RAMDOM_CAT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
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

  return (
    <>
      <h1>data fetching</h1>
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
