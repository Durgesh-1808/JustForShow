import { useParams } from "react-router-dom";
import ShowCard from "../ShowCard";
import { data } from "../utils/data";
import '../App.css';

const Property = () => {

    const {id} = useParams();

    let newList;

    if(id >= 1 && id <= 9){
        newList = data.cities.NewYork.filter((city)=>city.id==id);
    }
    else if(id >= 10 && id <= 18){
        newList = data.cities.Paris.filter((city)=>city.id==id);
    }
    else if(id >= 19 && id <= 27){
        newList = data.cities.Mumbai.filter((city)=>city.id==id);
    }
    else if(id >= 28 && id <= 36){
        newList = data.cities.London.filter((city)=>city.id==id);
    }

    return(<div className="Property">
        <h3 style={{color: 'darkblue', fontStyle: "italic"}}>Interested in this property? Contact now!</h3>
        {newList.map((city)=>{
            return(<div key={city.id}>
                <ShowCard img={city.img} name={city.name} street={city.street} room={city.room} Bed={city.Bed} Bath={city.Bath}
                area={city.area} rent_price={city.rent_price} />
                </div>
            );
        })}
        </div>
    )
}

export default Property;