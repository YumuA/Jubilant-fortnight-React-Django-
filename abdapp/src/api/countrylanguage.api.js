import axios from 'axios'


const languages = axios.create({
    baseURL: 'http://localhost:8000/'
})
export const getAllCountryLanguage = () => languages.get('/showcountryl/');


export const  createLanguage = (language) => languages.post('/Newlanguage/',language);

export const  deletelanguage = (language) => languages.delete('/showlanguage/:id',language);