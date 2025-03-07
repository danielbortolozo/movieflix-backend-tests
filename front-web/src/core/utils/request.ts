import axios, { AxiosRequestConfig, Method } from 'axios';
import { CLIENT_ID, CLIENT_SECRET, getSessionData } from './auth';
import  qs  from 'qs';
import history from './history';

// type RequestParams = {
//     method?: Method;
//     url?: string;
//     data?: object | string;
//     params?: object;
//     headers?: object;
// }

type LoginData = {
    username: string;
    password: string;
}
const BASE_URL = 'http://localhost:8080';

export const makeRequest = (params: AxiosRequestConfig) => {

    return axios({
        ...params,
        baseURL: BASE_URL
    })
}

export const makeLogin = (loginData: LoginData) => {

    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;
    
    const headers =  {
       Authorization: `Basic ${window.btoa(token)}`,
       'Content-Type': 'application/x-www-form-urlencoded' 
    }

    const payload = qs.stringify({
       ...loginData, 
       grant_type: 'password'
    })

   return makeRequest({
       url: '/oauth/token', 
       data: payload, 
       method: 'POST', 
       headers
    })
}

export const makePrivateRequest = (params: AxiosRequestConfig) => {
    const sessionData = getSessionData();
    
    const headers = {
        'Authorization' : `Bearer ${sessionData.access_token} `
    }    
   console.log('request private', headers);
        
    return makeRequest({...params, headers }) 
}

axios.interceptors.response.use(function (response) {
    
    
     return response;
}, function (error) {

    if (error.response.status === 401) {
        history.push('/');        
    }
    
    return Promise.reject(error);
});