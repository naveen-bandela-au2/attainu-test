import axios from 'axios'
export function fetchleadsapi(){
    let url = 'http://localhost:2000/cities';
    return axios.get(url)
}
export function fetchairport(city){
    let url = `http://localhost:2000/airports/${city}`;
    return axios.get(url)
}