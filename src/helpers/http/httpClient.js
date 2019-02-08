import axios from 'axios';

class HttpService {
  constructor() {
    this.service = axios.create({
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  request({ method, url, data, headers }) {
    return this.service.request({
      method,
      url,
      responseType: 'json',
      data,
      headers
    })
      .then(({ data }) => data);
  }

  get(resource, params = {}, headers) {
    return this.service.get(resource, {
      responseType: 'json',
      params,
      headers
    })
      .then(({ data }) => data);
  }

  post(url, data, headers) {
    return this.request({
      method: 'post',
      url,
      data,
      headers
    });
  }

  put(url, data) {
    return this.request({
      method: 'put',
      url,
      data
    });
  }

  delete(url, data) {
    return this.request({
      method: 'delete',
      url,
      data
    });
  }
}

const httpClient = new HttpService();

export default httpClient;
