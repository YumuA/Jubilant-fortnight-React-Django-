import React from "react";
import Fields from "../../components/Fields";
import FieldsCheckBox from "../../components/FieldsCheckBox";

class Language extends React.Component{
    constructor(props){
        super(props);
        this.state = {


        };

    }
    render(){
        var nameforms = 'Language';
        
        return(
            <>
             <section id="languageForm" className="w-screen relative">
            <div className="z-30 relative flex flex-col"> 
                <section className="pt-[70px] mx-20 relative">
                    <div className="rounded bg-blue-50">
                        <h2 className="text-black pt-6 text-5xl mb-4 text-center font-medium">Forms {nameforms}</h2>
                        <div className="text-black text-sm pb-4">
                            <form className="px-5 ">
                            <div className="space-y-12 flex justify-center">
                                    <div className="border-b border-gray-900/10 pb-12">
                                        <h2 className="text-base font-semibold leading-7 text-gray-900">{nameforms}'s informations</h2>
                                        <Fields 
                                            labelname = 'Name Of Language' 
                                            placehold = 'Latín' />
                                        <Fields 
                                            labelname = 'Id Language'  
                                            placehold = 'Englush' />
                                        <Fields 
                                            labelname = 'Percentage of speakers' 
                                            placehold = '10' />
                                        <FieldsCheckBox 
                                            labelname = 'Active' 
                                            placehold = '✅' />

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
            </>
        )
    }
}
export default Language;