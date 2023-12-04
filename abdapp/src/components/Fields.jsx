import React from "react";
import { useForm } from "react-hook-form";

function Fields(props) {
  

    const {labelname, placehold, registerform, register,type } = props;



    return (
        <>
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                    <label
                        htmlFor={labelname}
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        {labelname}
                    </label>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w-md">
                        <input
                            {...register(labelname)}
                            type={type}
                            name={labelname}
                            id={labelname}
                            autoComplete={labelname}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-600 placeholder:text-gray-600 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder={placehold}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fields;
