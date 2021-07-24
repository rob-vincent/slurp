const initialState = {
  products: [],
  filteredProducts: [],
  cart: [],
  totalOrderedQuantity: 25,
  totalAmount: 0,
  whatPage: '/',
  windowSize: window.innerWidth,
  filter: {
    category: 'All',
    size: 'small',
    newProduct: false,
    bestseller: false,
    stars: 5,
  },
}

const reducer = (state = initialState, action) => {
  if (action.type === 'LOAD_PRODUCTS') {
    return {
      ...state,
      products: action.payload,
      filteredProducts: action.payload,
    }
  }
  if (action.type === 'SWITCH_PAGE') {
    return { ...state, whatPage: action.payload }
  }
  if (action.type === 'SET_WINDOW_SIZE') {
    return { ...state, windowSize: action.payload }
  }
  if (action.type === 'UPDATE_FILTER') {
    const { name, value } = action.payload
    return { ...state, filter: { ...state.filter, [name]: value } }
  }
  if (action.type === 'CLEAR_FILTER') {
    return { ...state, filter: { category: 'All', size: 'small', newProduct: false, bestseller: false, stars: 5 } }
  }
  if (action.type === 'FILTER_PRODUCTS') {
    const { category, newProduct, bestseller, stars } = state.filter

    const filteredProducts = state.products.filter((product) => {
      return (
        (category === 'All' ? true : product.category === category) &&
        (newProduct === false ? true : product.newProduct) &&
        (bestseller === false ? true : product.bestseller) &&
        stars >= product.stars
      )
    })

    return { ...state, filteredProducts }
  }
  return state
}

export default reducer
