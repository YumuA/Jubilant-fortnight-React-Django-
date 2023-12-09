import axios from 'axios'


const languages = axios.create({
    baseURL: 'http://localhost:8000/'
});

export const getAllLanguages = () => languages.get('/showlanguages/');

export const getLanguage = (id_language) => languages.get(`/showlanguages/${id_language}`);

export const  createLanguage = (language) => languages.post('/NewLanguage/',language);

export const  deleteLanguage = (id_language) =>languages.delete(`/deletelanguage/${id_language}`);

export const updateLanguage = (id_language, newData) => languages.put(`/updatelanguage/${id_language}`, newData)