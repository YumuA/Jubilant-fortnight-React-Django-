import React from "react";
class FieldsCheckBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            

        };
    }

    render(){
        const {labelname, placehold} = this.props
        return(
            <>
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                    <label for="username" className="block text-sm font-medium leading-6 text-gray-900">{labelname}</label>
                        <label className="switch">
                        <input 
                        type="checkbox" 
                        name="countryname" id="countryname"  
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-600 placeholder:text-gray-600 focus:ring-0 sm:text-sm sm:leading-6"/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            </>
        )
    }
}


export default FieldsCheckBox;