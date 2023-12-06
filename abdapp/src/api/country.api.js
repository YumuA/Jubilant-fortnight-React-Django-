import axios from 'axios'


const countrys = axios.create({
    baseURL: 'http://localhost:8000/'
})
export const getAllcountrys = () =>{
    return countrys.get('/showcountry/');
}
export default getAllcountrys;

export const  createCountry = (country) =>{
    return countrys.post('/NewCountry/',country);
}

export const  deleteCountry = (country) =>{
    return countrys.delete('/showcountry/:id',country);
}