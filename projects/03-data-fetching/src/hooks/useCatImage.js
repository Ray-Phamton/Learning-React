import { useState, useEffect } from 'react'
import { getImageFromFact } from '../services/gets'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState('meow')
  const [firstWord, setFirstWord] = useState('')

  useEffect(() => {
    if (!fact) return
    getImageFromFact(fact).then(({ url, firstWord }) => {
      setImageUrl(url)
      setFirstWord(firstWord)
    })
  }, [fact])
  return { imageUrl, firstWord }
}
