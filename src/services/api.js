//package using for API
import axios from 'axios'

const LOCAL_API_BASE_URL = 'https://coders-tokyo-shop-api.herokuapp.com'
const API_GET_LISTPRODUCTS = LOCAL_API_BASE_URL + '/product'

export const getListProducts =  (success, error) => {
    const url = API_GET_LISTPRODUCTS
    axios
      .get(url)
      .then(res => success(res))
      .catch(res => error(res))
}