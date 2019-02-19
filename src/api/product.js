import http from 'src/helpers/http';
import { PRODUCT_ENDPOINT, CREATE_CART_QUOTE_ENDPOINT, CART_ENDPOINT} from 'src/config/endpoints';

export const getProducts = (currentPage = 1, pageSize = 10) => http.get(PRODUCT_ENDPOINT, {
  'searchCriteria[pageSize]': pageSize,
  'searchCriteria[currentPage]': currentPage
});

export const addToCart = (token, sku) => http.post(CREATE_CART_QUOTE_ENDPOINT, null, {'Authorization': `Bearer ${token}`})
  .then(quote => http.post(
    CART_ENDPOINT, {
    'cartItem': {
      'sku': sku,
      'qty': '1',
      'quote_id': quote
    }
  }, {
    'Authorization': `Bearer ${token}`
  }));

export const getFromCart = (token) => http.get(CART_ENDPOINT, {}, {'Authorization': `Bearer ${token}`});