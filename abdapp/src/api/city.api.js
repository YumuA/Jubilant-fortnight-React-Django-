import axios from 'axios'


const citys = axios.create({
    baseURL: 'http://localhost:8000/'
})
export const getAllCitys = () =>{
    return citys.get('/showcity/');
}
export default getAllCitys;

export const  createCity = (city) =>{
    return citys.post('/NewCity/',city);
}