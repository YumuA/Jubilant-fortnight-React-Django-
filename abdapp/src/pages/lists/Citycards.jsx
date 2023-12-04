import { useNavigate } from "react-router-dom"


function Citycards({ City }){
    const navigate = useNavigate();
    return(
        <div className="bg-blue-50 mt-3 mx-20 w-60 p-3 rounded" onClick={() =>{
            navigate('')
        }}>
            <h1 className="">City's name: 
                <span className="">{City.name}</span>
            </h1>
            <p>Population {City.population}</p>
            <p>Country {City.idcountry}</p>
        </div>
    )
}
export default Citycards