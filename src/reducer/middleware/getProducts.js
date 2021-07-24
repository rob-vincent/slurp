import axios from 'axios'

export const getProducts = () => {
  return async (dispatch) => {
    let products = await axios.get('data.json')
    products = products.data.sort((a, b) => (a.name > b.name ? 1 : -1))
    dispatch({ type: 'LOAD_PRODUCTS', payload: products })
  }
}
