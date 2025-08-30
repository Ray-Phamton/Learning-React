const CAT_ENDPOINT_RAMDOM_CAT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RAMDOM_CAT)
  const data = await res.json()
  const { fact } = data
  return (fact)
}

export const getImageFromFact = async (fact) => {
  if (!fact) return

  const firstWord = fact.split(' ')[0]
  const APIurl = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

  const res = await fetch(APIurl)
  const APIresponse = await res.json()
  const { url } = APIresponse
  return { url, firstWord }
}
