import React from "react";
import { useState, useEffect } from "react";
import Fields from "../../components/Fields";
import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom"
import { getAllcountrys, createCountry, deleteCountry } from "../../api/country.api";


function CountryForm (){
    const {register, handleSubmit, formState} = useForm();
    const onSubmit = handleSubmit( async (data) => {
        const res = await createCountry(data)
        console.log(data);
        
    });

    useEffect(() => {
        async function loadCountries() {
            const res = await getAllcountrys();
            setCountries(res.data);
            console.log(res)
        }
        loadCountries();
    }, [])


    const [languages, setCountries] = useState([]);
    var nameforms = 'Country'
    return(
        <div>
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
                                        <Fields 
                                            labelname = 'id_country'  
                                            register={register}
                                            placehold = 'Spain' 
                                            />
                                        <Fields 
                                            labelname = 'nombre_country' 
                                            register={register}
                                            placehold = 'SP' 
                                            />
                                        <Fields 
                                            labelname = 'continent_country' 
                                            register={register}
                                            placehold = 'Europe' 
                                            />
                                        <Fields 
                                            labelname = 'region_country' 
                                            register={register}
                                            placehold = 'Europe' 
                                            />
                                        <Fields 
                                            labelname = 'surface_country' 
                                            register={register}
                                            placehold = '30000' 
                                            />
                                        <Fields 
                                            labelname = 'indep_year_country' 
                                            register={register}
                                            placehold = '300000' 
                                            />
                                        <Fields 
                                            labelname = 'population'
                                            placehold = '700'
                                            register={register}
                                            />
                                        <Fields 
                                            labelname = 'life_expectancy'
                                            placehold = '70'
                                            register={register}
                                            />
                                        <Fields 
                                            labelname = "GNP"
                                            placehold = '300000'
                                            register={register}
                                            />
                                        <Fields 
                                            labelname = "GNPold"
                                            placehold = 'Spain'
                                            register={register}
                                            />
                                        <Fields 
                                            labelname = "localname"
                                            placehold = 'King'
                                            register={register}
                                            />
                                        <Fields 
                                            labelname = "government"
                                            placehold = '3'
                                            register={register}
                                            />
                                        <Fields 
                                            labelname = "statehead"
                                            placehold = '29'
                                            register={register}
                                            />    
                                            <Fields 
                                            labelname = "capital_country"
                                            placehold = '29'
                                            register={register}
                                            />    
                                            <Fields 
                                            labelname = "code2"
                                            placehold = '29'
                                            register={register}
                                            />    
                                                                
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
        </section>
 
            {showCL()}
        </div>
    )
}

export default CountryForm


function showCL(){

    const [Countrys, setCountry] = useState([])
  
    useEffect(() => {
  
        async function loadCountrys(){
            const res = await getAllcountrys ();
            setCountry(res.data);
        }
        loadCountrys();
    }, []);
    return(
        <div className=" ">
            {Countrys.map(Country =>  (
                <Countrycards key={Country.nombre_country} Country={Country} />
            ))}
        </div>
    )
  }
  
  function Countrycards({ Country }){
    const navigate = useNavigate();
    return(
        <div className="cards" onClick={() =>{
            navigate('')
        }}>
            <h1 className="">Country's name: 
                <span className="">{Country.nombre_country}</span>
            </h1>
            <p>Id country  {Country.id_country}</p>
            <p>Id population {Country.population}</p>
            <p>Language{Country.id_language}</p>
            <button onClick= { async () =>{
            const accept = window.confirm('are u sure=')
            if (accept){
                await deleteCountry(Country.id_country)
                navigate("/country")
            }
        }} className="botones">Delete</button>
                            
        </div>
    )
  }