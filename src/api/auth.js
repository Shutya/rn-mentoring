import http from 'src/helpers/http';
import {AUTH_ENDPOINT} from 'src/config/endpoints';

export const authenticate = (data) => http.post(AUTH_ENDPOINT, data)
  .then(data => typeof data === 'string' ? data : Promise.reject());
