import {React} from "react"; 
import { useEffect, useState } from "react"
import Fields from "../../components/Fields";
import { useNavigate } from "react-router-dom"
import {useForm} from 'react-hook-form';
import '../../styles/sass/components/TownHall.sass'; 
import { createtownhall, getAllTownHalls } from '../../api/townhall.api'; 

function TownHall (){
    const {register, handleSubmit, formState} = useForm();
    const onSubmit = handleSubmit( async (data) => {
        const res = await createtownhall(data)
        console.log(data);
        
    });
    var nameforms = 'TownHall'
    return(
      <div>
        <section className="w-screen relative">
            <div className="z-30 relative flex flex-col"> 
              <section className="pt-[70px] mx-20 relative">
            <div className="town-hall-rounded-container">
              <h2 className="town-hall-title">Forms {nameforms}</h2>
              <div className="town-hall-text-container">
                <form className="town-hall-form" onSubmit={onSubmit}>
                  <div className="town-hall-space-container">
                    <div className="town-hall-border-container">
                      <h2 className="town-hall-subtitle">{nameforms}'s informations</h2>
                      <Fields
                        labelname='id_townhall'
                        placehold='GUS'
                        register={register}
                      />
                      <Fields
                        labelname='mayor'
                        placehold='Galan'
                        register={register}
                      />
                      <Fields
                        labelname='councillor'
                        placehold='councillor'
                        register={register}
                      />

                    </div>
                  </div>
                  <div className="town-hall-button-container">
                    <button type="button" className="town-hall-cancel-button">Cancel</button>
                    <div className="div-button">
                      <button type="submit" className="town-hall-create-button">Create</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </section>
        {showtown()}
      </div>
    )
}

export default TownHall

function showtown(){

  const [TownHall, setTownHall] = useState([])

  useEffect(() => {

      async function loadTownHalls(){
          const res = await getAllTownHalls();
          setTownHall(res.data);
      }
      loadTownHalls();
  }, []);
  return(
      <div className="flex m-0">
          {TownHall.map(TownHall =>  (
              <TownHallcards key={TownHall.id_TownHall} TownHall={TownHall} />
          ))}
      </div>
  )
}

function TownHallcards({ TownHall }){
  const navigate = useNavigate();
  return(
      <div className="cards" onClick={() =>{
          navigate('')
      }}>
          <h1 className="">TownHall's name: 
              <span className="">{TownHall.id_townhall}</span>
          </h1>
          <p>Mayor {TownHall.mayor}</p>
          <p>Councillor {TownHall.councillor}</p>
          <button onClick= { async () =>{
            const accept = window.confirm('are u sure=')
            if (accept){
                await deletetownhall(townhall.id_townhall)
                navigate("/townhall")
            }
        }} className="botones">Delete</button>
                          
      </div>
  )
}