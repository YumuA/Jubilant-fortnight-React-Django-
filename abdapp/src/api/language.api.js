import axios from 'axios'


const languages = axios.create({
    baseURL: 'http://localhost:8000/'
});

export const getAllLanguages = () => languages.get('/showlanguages/');

export const  createLanguage = (language) => languages.post('/NewLanguage/',language);

export const  deleteLanguage = (language) =>languages.delete('/showlanguage/:id',language);