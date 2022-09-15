import axios from "axios"
const Url = "https://shopify-rest-server.herokuapp.com";
const BASE_URL = `${Url}/api`;
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.token;


export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const UserRequest = axios.create({
    baseURL: BASE_URL,
    headers: {Authorization: `Bearer ${TOKEN}`},
})