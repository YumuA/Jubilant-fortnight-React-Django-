import React from "react";
import Fields from "../../components/Fields";
import {useForm} from 'react-hook-form';
import { useEffect, useState } from "react"
import { getAllLanguages } from '../../api/language.api.js';
import { getAllcountrys } from '../../api/country.api.js';
import { useNavigate } from "react-router-dom"
import { getAllCountryLanguage, deleteCLanguage, createCLanguage  } from "../../api/countrylanguage.api";



function CountryLanguage (){
    const {register, handleSubmit, formState} = useForm();
    const [languages, setLanguage] = useState([])
    const [countrys, setCountry] = useState([])

    useEffect(() => {
        
        async function loadLanguages(data){
            const res = await getAllLanguages(data);
            setLanguage(res.data);

        }
           
        async function loadCountrys(){
            const res = await getAllcountrys();
            setCountry(res.data);

        }
        loadCountrys(); 
        loadLanguages(); 
    },[])
   
   

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        try {
            const res = await createCLanguage(data);
            console.log(res.data); 
        } catch (error) {
            console.error(error); 
        }
    });

    var nameforms = 'Country Language'
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
                                        <Fields type='text' labelname="name_language" placehold="name of language" register={register} />
                                        <label htmlFor="id_country" className="text-sm font-medium leading-5 text-gray-700 flex mb-1">Select Country</label>
                                            <select name="id_country" {...register("id_country")} className="ring-gray-300 border-0 rounded p-2 w-full text-gray-700 text-sm bg-transparent ">
                                                {countrys.map(country => (
                                                    <option key={country.id_country} value={country.id_country}>
                                                        {country.nombre_country}
                                                    </option>
                                                ))}
                                            </select>
                                            <label htmlFor="id_language" className="text-sm font-medium leading-5 text-gray-700 flex mb-1">Select Language</label>
                                            <select name="id_language" {...register("id_language")} className="ring-gray-300 border-0 rounded p-2 w-full text-gray-700 text-sm bg-transparent ">
                                                {languages.map(Language => (
                                                    <option key={Language.id_language} value={Language.id_language}>
                                                        {Language.id_language}
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
            {showCL()}
        </section>
    )
}

export default CountryLanguage



function showCL(){

    const [CountryLanguages, setCountryLanguage] = useState([])
  
    useEffect(() => {
  
        async function loadCountryLanguages(){
            const res = await getAllCountryLanguage();
            setCountryLanguage(res.data);
        }
        loadCountryLanguages();
    }, []);
    return(
        <div className=" ">
            {CountryLanguages.map(CountryLanguage =>  (
                <CountryLanguagecards key={CountryLanguage.name_language} CountryLanguage={CountryLanguage} />
            ))}
        </div>
    )
  }
  
  function CountryLanguagecards({ CountryLanguage }){
    const navigate = useNavigate();
    return(
        <div className="cards" onClick={() =>{
            navigate('')
        }}>
            <h1 className="">CountryLanguage's name: 
                <span className="">{CountryLanguage.name_language}</span>
            </h1>
            <p>Id language {CountryLanguage.id_language}</p>
            <p>Id country {CountryLanguage.id_country}</p>
            <button onClick= { async () =>{
            const accept = window.confirm('are u sure=')
            if (accept){
                await deleteCLanguage(CountryLanguage.name_language)
                navigate("/Countryl")
            }
        }} className="botones">Delete</button>
                            
        </div>
    )
  }