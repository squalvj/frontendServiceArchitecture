import dotenv from 'dotenv'
import axios from 'axios';
const env = dotenv.config().parsed;

const {API_URL} = env || ''

const serviceList = {
  getUser: '/api/users?page=2'
}

const theCall = () => {
  
}