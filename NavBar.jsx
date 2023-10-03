import { useNavigate } from "react-router-dom";
import {BiRightArrowAlt} from 'react-icons/bi';
import './App.css';
import { useContext } from "react";
import { AppContext } from "./Context.jsx";

const NavBar = () => {

    const {city, setCity} = useContext(AppContext);

    function goToCity(c){
        if(c === 'NewYork'){
            navigate('/');
            setCity(c);
        }
        else if(c === 'Mumbai'){
            navigate('/Mumbai');
            setCity(c);
        }
        else if(c === 'London'){
            navigate('/London');
            setCity(c);
        }
        else if(c === 'Paris'){
            navigate('/Paris');
            setCity(c);
        }
    }

    const navigate=useNavigate();
    return(
        <div className="navbar">
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '25rem', marginRight: '30rem'}}>
                <button className='nav-button' style={city==='NewYork' ? {backgroundColor: 'white'} : {backgroundColor: 'darkblue', color: 'white'}} onClick={()=>{
                        goToCity('NewYork');
                    }}>New York</button>
                <button className='nav-button' style={city==='Mumbai' ? {backgroundColor: 'white'} : {backgroundColor: 'darkblue', color: 'white'}} onClick={()=>{
                        goToCity('Mumbai');
                    }}>Mumbai</button>
                <button className='nav-button' style={city==='Paris' ? {backgroundColor: 'white'} : {backgroundColor: 'darkblue', color: 'white'}} onClick={()=>{
                        goToCity('Paris');
                    }}>Paris</button>
                <button className='nav-button' style={city==='London' ? {backgroundColor: 'white'} : {backgroundColor: 'darkblue', color: 'white'}} onClick={()=>{
                        goToCity('London');
                    }}>London</button>
            </div>
            <div>
                <button className='nav-button'>View All <BiRightArrowAlt style={{fontSize: '1rem'}}/></button>
            </div>
        </div>
    )
}

export default NavBar;