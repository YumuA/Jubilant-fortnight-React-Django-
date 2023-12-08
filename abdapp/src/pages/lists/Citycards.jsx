import { useNavigate } from "react-router-dom"
import '../../styles/sass/components/cards.sass'


function Citycards({ City }){
    const navigate = useNavigate();
    return(
        <div className="cards" onClick={() =>{
            navigate('')
        }}>
            <h1 className="">City's name: 
                <span className="">{City.name}</span>
            </h1>
            <p>Population {City.population}</p>
            <p>Country {City.idcountry}</p>
            <button type='' className="botones">Delete</button>
                            
        </div>
    )
}
export default Citycards