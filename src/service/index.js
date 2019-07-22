import axios from 'axios';
import apiList from './list'
const TIMEOUT = 10000
const API_URL = process.env.REACT_APP_API_URL
const isDev = process.env.NODE_ENV === 'development'

export const list = apiList

export const call = (obj, errHandling = false) => {
   const {
      url, 
      method,
      header,
      data
   } = obj
   const CancelToken = axios.CancelToken;
   let cancel;

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
   const config = {
      baseURL: `${API_URL}${url}`,
      timeout: TIMEOUT,
      headers: theHeader,
      method: method,
      data,
      responseType: 'json',
      cancelToken: new CancelToken(function (c) {
         cancel = c
      })
   }
   let instance = axios.create()

   // useful for custom error hadnling
   const theErroHandling = !!errHandling ? errHandling : resIntersceptor

   // Add a request interceptor
   instance.interceptors.request.use(config => reqInterceptor(config, cancel), interceptReqErr);

   // Add a response interceptor
   instance.interceptors.response.use(theErroHandling, interceptResErr);
   
   return instance.request(config).then(theHandler);
}

const theHandler = (res, err) => {

   // CHECKING LOGIC FROM DOWNSTREAM IF YOU 
   // HAVE SOME ERROR CODE STRUCTURE
   if (res.error === 1 || err){
      // GENERIC ERROR BACKEND, OR DO ANY GENERIC ERROR YOU PLANNING TO
      alert('Backend generic error')
      return Promise.reject();
   }
   else 
      return res
}

// ---------------------- REQUEST INTERCEPTOR ----------------------
const reqInterceptor = (config, cancel) => {
   //do checking session or checking you app version is lower than backend, to cancel any request being triggered...
   // or any condition that require to canceling the request
   // cancel() for canceling the request
   return config
}

const interceptReqErr = error => {
   alert(error)
   return Promise.reject(error);
}
// ---------------------- / ----------------------------------------


// ---------------------- RESPONSE INTERCEPTOR ----------------------
const resIntersceptor = response => {
   // TRANSFORM DATA FROM DOWNSTREAM INTO WHATEVER YOU WANT
   return response.data
}

// GENERIC ERROR RESPPONSE HANDLING
const interceptResErr = error => {
   alert(error)
   return Promise.reject();
}
// ---------------------- / ----------------------------------------

