import { useEffect, useState } from "react"
import getAllCitys from "../../api/city.api.js"
import Citycards from "./Citycards.jsx";
function CityList(){

    const [City, setCity] = useState([])

    useEffect(() => {

        async function loadCitys(){
            const res = await getAllCitys();
            setCity(res.data);
        }
        loadCitys();
    }, []);
    return(
        <div className=" ">
            {City.map(City =>  (
                <Citycards key={City.idCity} City={City} />
            ))}
        </div>
    )
}
export default CityList;