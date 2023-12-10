import axios from 'axios'


const languages = axios.create({
    baseURL: 'http://localhost:8000/'
})
export const getAllCountryLanguage = () => languages.get('/showcountrysl/');


export const  createCLanguage = (language) => languages.post('/NewCl/',language);

export const  deleteCLanguage = (name_language) => languages.delete(`/deletecountrysl/${name_language}`);