import { useNavigate } from "react-router-dom"
import '../../styles/sass/components/cards.sass'
import { deleteCity } from "../../api/city.api.js";


function Citycards({ City }){
    const navigate = useNavigate();

    const handleDeleteCity = async () => {
        const accept = window.confirm('¿Estás seguro de que quieres eliminar esta ciudad?');
        if (accept) {
            try {
                await deleteCity(City.name);
                navigate("/city", { replace: true });
            } catch (error) {
                console.error("Error al eliminar la ciudad:", error);
            }
        }
    };

    return(
        <div className="cards" onClick={() => navigate('')}>
            <h1 className="">City's name:
                <span className="">{City.name}</span>
            </h1>
            <p>Population {City.population}</p>
            <p>Country {City.idcountry}</p>
            <button onClick={handleDeleteCity} className="botones">Delete</button>
        </div>
    )
}
export default Citycards