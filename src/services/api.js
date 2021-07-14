import axios from "axios";

import { getData } from '../storage';

const api = axios.create({
    baseURL: 'https://livrariahabitualapi.herokuapp.com'
})

// api.interceptors.request.use((config) => {
//     const token = getData('token');

//     if(token) {
//         config.headers.Authorization = token;
//     }

//     return config;
// })

// api.interceptors.request.use((config) => {
//     const token = getData('token');

//     if(token) {
//         config.headers.Authorization = token; 
//     }

//     return config;
// });

export default api;
