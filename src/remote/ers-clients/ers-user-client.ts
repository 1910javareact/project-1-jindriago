import axios from 'axios'


export const ersUserClient = axios.create({
    baseURL: 'http://localhost:2001/',
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials:true
})