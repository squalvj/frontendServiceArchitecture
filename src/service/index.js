import axios from 'axios';
const TIMEOUT = 10000
const API_URL = process.env.REACT_APP_API_URL
const isDev = process.env.NODE_ENV === 'development'

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

   const mapHeader = {
      get: GETHeader(header),
      post: POSTHeader(header)
   }

   const theHeader = mapHeader[method];
   let instance = axios.create({
      baseURL: `${API_URL}${url}`,
      timeout: TIMEOUT,
      headers: theHeader,
      method: method,
      data,
      responseType: 'json',
    })

   // Add a request interceptor
   instance.interceptors.request.use(reqIntersceptor);
   // Add a response interceptor
   instance.interceptors.response.use(resIntersceptor, generalErrorHandling);
   
   return instance.request();
}

const reqIntersceptor = config => {
   //   
   return config
}

const resIntersceptor = response => {
   if (isDev)
      console.log(response)
   return {
      data: response.data,
      error: response.data.error //this is useful to check backend error logic
   }
}

// GENERIC ERROR
const generalErrorHandling = error => {
   
   alert(error)
   return Promise.reject(error);
}