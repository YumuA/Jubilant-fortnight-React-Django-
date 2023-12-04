import React from "react";
import Fields from "../../components/Fields";
import {useForm} from 'react-hook-form';
import { createCity } from '../../api/city.api.js'
import { useNavigate } from "react-router-dom";

function PageP (){

        const {register, handleSubmit, formState} = useForm();
        const onSubmit = handleSubmit( async (data) => {
            const res = await createCity(data)
            console.log(data);
            
        });

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
                                        <Fields type='text'labelname="idcountry" placehold="COL" register={register} />
                                        <Fields type='text'labelname="district" placehold="CD" register={register} />
                                        <Fields type='number'labelname="population" placehold="12000" register={register} />
                                        <Fields type='text'labelname="idTownHall" placehold="GAL" register={register} />

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
    )
}

export default PageP