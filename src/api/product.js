import http from 'src/helpers/http';
import {PRODUCT_ENDPOINT} from 'src/config/endpoints';

export const getProducts = (currentPage = 1, pageSize = 10) => http.get(PRODUCT_ENDPOINT, {
  'searchCriteria[pageSize]': pageSize,
  'searchCriteria[currentPage]': currentPage
});