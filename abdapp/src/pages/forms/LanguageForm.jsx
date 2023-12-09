import React from "react";
import Fields from "../../components/Fields";
import FieldsCheckBox from "../../components/FieldsCheckBox";
import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createLanguage, getAllLanguages, deleteLanguage, updateLanguage, getLanguage } from "../../api/language.api"; 
import { useParams } from "react-router-dom";

function Language(){
        const { register, handleSubmit, formState, setValue } = useForm();
        const params = useParams();
        const navigate = useNavigate();
    
        const onSubmit = handleSubmit(async (data) => {
            if (params.id_Language) {
                const res = await updateLanguage(params.id_Language, data);
                console.log(res);
            } else {
                const res = await createLanguage(data);
                console.log(res);
            }
        });
    
        useEffect(() => {
            async function loadLanguage() {
                if (params.id_Language) {
                    console.log('Funciona obtener');
                    const res = await getLanguage(params.id_Language);
    
                    setValue('id_language', res.data.id_language);
                    setValue('percentage', res.data.percentage);
                }
            }
    
            loadLanguage();
        }, [params.id_Language, setValue]);
        var nameforms = 'Language';
        
        return(
            <>
             <section id="languageForm" className="w-screen relative">
            <div className="z-30 relative flex flex-col"> 
                <section className="pt-[70px] mx-20 relative">
                    <div className="rounded bg-blue-50">
                        <h2 className="text-black pt-6 text-5xl mb-4 text-center font-medium">Forms {nameforms}</h2>
                        <div className="text-black text-sm pb-4">
                            <form className="px-5 " onSubmit={onSubmit}>
                            <div className="space-y-12 flex justify-center">
                                    <div className=" border-b  border-gray-900/10 pb-12">
                                        <h2 className="text-base font-semibold leading-7 text-gray-900">{nameforms}'s informations</h2>

                                        <Fields 
                                            labelname = 'id_language'  
                                            placehold = 'Englush' 
                                            register={register}
                                            />
                                        <Fields 
                                            labelname = 'percentage' 
                                            placehold = '10' 
                                            type = 'number'
                                            register={register}
                                            />
                                        <FieldsCheckBox 
                                            labelname = 'is_official' 
                                            placehold = '✅' 
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
            {showLan()}

            </>
        )
    }

export default Language;

function showLan(){

    const [Language, setLanguage] = useState([])
  
    useEffect(() => {
  
        async function loadLanguages(){
            const res = await getAllLanguages();
            setLanguage(res.data);
        }
        loadLanguages();
    }, []);
    return(
        <div className="flex m-0">
            {Language.map(Language =>  (
                <Languagecards key={Language.id_Language} Language={Language} />
            ))}
        </div>
    )
  }
  
  function Languagecards({ Language }){
    const navigate = useNavigate();
    return(
        <div className="cards" >
            <h1 className="">Language's name: 
                <span className="">{Language.id_language}</span>
            </h1>
            <p>Percentege {Language.percentage}</p>
            <p>Official {Language.is_official}</p>
            <button onClick= { async () =>{
            const accept = window.confirm('are u sure=')
            if (accept){
                await deleteLanguage(Language.id_language)
                navigate("/language")
            }
        }} className="botones">Delete</button>
                            
        </div>
    )
  }