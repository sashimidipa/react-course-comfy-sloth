import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import {getFirestore} from '../firebase/config'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  const fetchSingleProduct = (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
      try {
        const db = getFirestore()
        const url = '/products/' + id + '/itemDetail'
        const prod = db.collection(url)
        prod.get()
        .then((res)=> {
          const singleProduct = res.docs.map((doc) => {
              return {id: doc.id, ...doc.data()}
            })
            dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct[0] })
          })
      } catch (error) {
        dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
      }
  }

  useEffect(() => {
  dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const db = getFirestore()
      const prod = db.collection('products')
      prod.get()
        .then((res)=> {
          const newItem = res.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
          })
          dispatch({ type: GET_PRODUCTS_SUCCESS, payload: newItem })
          
        })
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR })
    }
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
      }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
