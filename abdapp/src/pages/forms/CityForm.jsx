import React from "react";
import Fields from "../../components/Fields";
import { createCity, deleteCity, getAllCitys } from '../../api/city.api.js'
import { getAllTownHalls } from '../../api/townhall.api.js'
import { getAllcountrys } from '../../api/country.api.js'
import { useNavigate } from "react-router-dom";
import CityList from "../lists/CityList.jsx";
import {useForm} from 'react-hook-form';
import { useEffect, useState } from "react"
function PageP (){
    const [Citys, setCity] = useState([])
        const {register, handleSubmit, formState} = useForm();
        const [townhalls, settownhalls] = useState([])
        const [Countrys, setcountrys] = useState([])
        
        const onSubmit = handleSubmit(async (data) => {
            try {
                const res = await createCity(data);
                console.log(res.data);
            } catch (error) {
                console.error("Error al enviar datos:", error);
            }
        });

        useEffect(() => {

            async function loadTownhall(data){
                const res = await getAllTownHalls(data);
                settownhalls(res.data);
            }

            async function loadCitys(data){
                const res = await getAllCitys(data);
                setCity(res.data);
            };
            async function loadCountrys(){
                const res = await getAllcountrys();
                setcountrys(res.data);
            }
            loadCountrys(); 
            loadCitys();
            loadTownhall();
        }, []);


    var nameforms = 'City'
    return(
        <section className="w-screen relative">
            <div className="z-30 relative flex flex-col"> 
                <section className="pt-[70px] mx-20 relative">
                    <div className="rounded bg-blue-50">
                        <h2 className="text-black pt-6 text-5xl mb-4 text-center font-medium">Forms {nameforms}</h2>
                        <div className="text-black text-sm pb-4">
                            <form className="px-5 " onSubmit={onSubmit}>
                            <div className="space-y-12 flex justify-center">
                                    <div className="border-b border-gray-900/10 pb-12">
                                        <h2 className="text-base font-semibold leading-7 text-gray-900">{nameforms}'s informations</h2>
                                        <Fields type='text'labelname="idCity" placehold="BOG" register={register}/>
                                        <Fields type='text'labelname="name" placehold="Bogotá" register={register} />
                                        <select name="id_country" {...register("id_country")} className="ring-gray-300 border-0 rounded p-2 w-full text-gray-700 text-sm bg-transparent ">
                                            {Countrys.map(Country => (
                                                <option key={Country.id_country} value={Country.id_country}>
                                                    {Country.id_country}
                                                </option>
                                            ))}
                                        </select>
                                        
                                        <Fields type='text'labelname="district" placehold="CD" register={register} />
                                        <Fields type='number'labelname="population" placehold="12000" register={register} />
                                         <label htmlFor="id_townhall" className="text-sm font-medium leading-5 text-gray-700 flex mb-1">Select Townhall</label>
                                        <select name="id_townhall" {...register("id_townhall")} className="ring-gray-300 border-0 rounded p-2 w-full text-gray-700 text-sm bg-transparent ">
                                            {townhalls.map(townhall => (
                                                <option key={townhall.id_townhall} value={townhall.id_townhall}>
                                                    {townhall.id_townhall}
                                                </option>
                                            ))}
                                        </select>


                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-center gap-x-6">
                                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>

                                </div>
                            </form>
                            
                        </div>
                    </div>
                </section>
            </div>
            <div className="flex">
            <CityList />
            </div>
        </section>
        
    )
}

export default PageP

