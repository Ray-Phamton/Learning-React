import { useState, useRef, useEffect } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState('')
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('the field cannot be empty')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('cannot search for numbers alone')
      return
    }
    if (search.length < 3) {
      setError('you cannot search for novies with fewer than 3 letters')
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
