import axios from 'axios'


const TownHalls = axios.create({
    baseURL: 'http://localhost:8000/'
})


export const getAllTownHalls = () => TownHalls.get('/showtownhalls/');


export const  createtownhall = (townhall) =>TownHalls.post('/NewTownHall/',townhall);


export const  deletetownhall = (id_townhall) =>TownHalls.delete(`/deletetownhalls/${id_townhall}/`);
