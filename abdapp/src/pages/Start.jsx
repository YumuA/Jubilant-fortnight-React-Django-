import React from "react"
import { Link } from "react-router-dom"


function Start(){
    return(
        <section className="w-screen relative">
            <div className="z-30 relative flex flex-col"> 
                <section className="pt-[70px] mx-20 relative">
                    <div className="rounded bg-blue-50">
                        <h2 className="text-black pt-6 text-5xl mb-4 text-center font-medium">WELCOME</h2>
                        <div className="text-black text-sm pb-4">
                            <div className="space-y-12 flex justify-center">
                                <div className="grid border-green-900/10 pb-12">
                                    <h1 className="text-base font-semibold leading-7 text-gray-900">This is the proyect of Kevin Santiago Rojas Rosas, Engineer of systems</h1>
                                    <Link to='/townhall'>
                                        <button className="bg-blue-400 py-3 px-2 rounded-md text-sm text-white justify-center">Press here to continue</button>
                                    </Link>

                                </div>
                            
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Start