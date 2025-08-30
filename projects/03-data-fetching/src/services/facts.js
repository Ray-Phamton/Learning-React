const CAT_ENDPOINT_RAMDOM_CAT = 'https://catfact.ninja/fact'

export const getRamdomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RAMDOM_CAT)
  const data = await res.json()
  const { fact } = data
  return (fact)
}
