export const categorizeProducts = (products = [], type) => {
  const result = products.map((product) => product[type])
  return ['All', ...new Set(result)]
}
