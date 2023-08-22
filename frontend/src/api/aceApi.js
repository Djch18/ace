import axios from 'axios';

const aceApi = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
})



export default aceApi;