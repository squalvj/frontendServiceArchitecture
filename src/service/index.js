import axios from 'axios';
const TIMEOUT = 1000
const API_URL = process.env.REACT_APP_API_URL

export const list = {
  getUser: '/api/users'
}

export const call = (obj) => {
   const {
      url, 
      method,
      header,
      data
   } = obj

   const GETHeader = (obj = {}) => {
      const headers = {
        Accept: 'application/json',
        ...obj,
      };
    
      return headers;
    };
    
    const POSTHeader = (obj = {}) => {
      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...obj,
      };
      return headers;
    };

   const theHeader = method === 'get' ? GETHeader(header) : POSTHeader(header)
   let instance = axios.create({
      baseURL: `${API_URL}${url}`,
      timeout: TIMEOUT,
      headers: theHeader,
      method: method,
      data,
      responseType: 'json'
    })

   // Add a request interceptor
   instance.interceptors.request.use(reqIntersceptor);

// Add a response interceptor
   instance.interceptors.response.use(resIntersceptor);
    
    
    
    return instance.request();
}

const reqIntersceptor = config => {
   //   
   return config
}

const resIntersceptor = response => {
   console.log({response: response})
   return response
}