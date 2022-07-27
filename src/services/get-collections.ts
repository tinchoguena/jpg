export const getCollections = async () => {
  const result = await fetch('https://server.jpgstoreapis.com/search/collections?nameQuery=yumm&verified=should-be-verified&pagination=%7B%7D&size=7', { method: 'GET', })
  const jsonCollections = await result.json()
  return jsonCollections.collections
}