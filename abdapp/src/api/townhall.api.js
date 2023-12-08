import axios from 'axios'


const TownHalls = axios.create({
    baseURL: 'http://localhost:8000/'
})


export const getAllTownHalls = () => TownHalls.get('/showtownhalls/');


export const  createtownhall = (townhall) =>TownHalls.post('/NewTownHall/',townhall);


export const  deletetownhall = (townhall) =>TownHalls.delete('/showtownhalls/:id',townhall);
