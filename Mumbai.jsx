import { useState } from "react";
import ShowCard from "../ShowCard";
import { data } from "../utils/data";
import {GiSandsOfTime} from 'react-icons/gi';
import Header from "../Header";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";

function Mumbai(){
    const [showMore, setShowMore] = useState(false);
    const navigate=useNavigate();
    const goToProperty = (id) => {
        navigate(`/property/${id}`);
    }
        return(<>
            <Header/>
            <NavBar />
            <div className="city">
            {data.cities.Mumbai.slice(0, 6).map((city)=>{
            const {img, name, street, room, Bed, Bath, area, rent_price, id} = city;
                return <div key={id} onClick={()=>goToProperty(id)}><ShowCard img={img} name={name} street={street} room={room} Bed={Bed} Bath={Bath} area={area} rent_price={rent_price}/></div>
        })}
        </div>
        <div className="city">
        {!showMore ? (<div style={{display: "flex", flexDirection: 'row', justifyContent: 'center', marginBottom: '.4rem', width: '70rem'}}>
            <button onClick={()=>{
                setShowMore(true);
            }}
            style={{textAlign:'center', backgroundColor: 'darkblue', color: "white",
            border: 'none', borderRadius: '.4rem', padding: '.5rem'}}><GiSandsOfTime/> Show more</button>
        </div>) 
        : data.cities.Mumbai.slice(6,10).map((city)=>{
            return <div key={city.id} onClick={()=>goToProperty(city.id)}><ShowCard name={city.name} room={city.room} img={city.img} street={city.street} Bath={city.Bath}
            Bed={city.Bed} area={city.area} rent_price={city.rent_price}/></div>
        })
        }
        </div>
        </>
        )
}

export default Mumbai;