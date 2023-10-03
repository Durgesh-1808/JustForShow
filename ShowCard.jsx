import {AiOutlineHeart} from 'react-icons/ai';
import {CiLocationOn} from 'react-icons/ci';
import {BiBuildings, BiBed, BiBath} from 'react-icons/bi';
import {BsArrowsMove} from 'react-icons/bs';
import './App.css';

const ShowCard = ({img, name, street, room, Bed, Bath, area, rent_price}) => {
    return(<div className='Card'>
        <div style={{position: 'relative', top: '1.8rem', display: 'flex', flexDirection: 'row'}}>
            <button style={{border: 'none', color: 'blue', borderRadius: '.6rem', marginRight: '12rem',
        padding: '.1rem'}}>For Rent</button>
            <AiOutlineHeart style={{backgroundColor: 'white', color: 'blue', borderRadius: '5rem', padding: '.2rem'}}/>
        </div>
        <div>
            <img style={{height: '12rem', width: '19rem', borderRadius: '.4rem'}} src={img} alt="Nothing"/>
        </div>
        <div style={{display:'flex', flexDirection:'row', marginRight: '11rem', marginBottom: '.4rem'}}>
            <CiLocationOn/>
            <p>{street}</p>
        </div>
        <div style={{marginLeft: '.4rem', marginBottom: '.4rem'}}>
            <h4>
                {name}
            </h4>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', marginBottom: '.6rem', marginTop: '.3rem', width: '22rem', justifyContent: 'space-evenly',
            fontSize: '.8rem'}}>
            <div>
                <BiBuildings />
                <p>{room} Room</p>
            </div>
            <div>
                <BiBed/>
                <p>{Bed} Bed</p>
            </div >
            <div>
                <BiBath/>
                <p>{Bath} Bath</p>
            </div>
            <div>
                <BsArrowsMove/>
                <p>{area}sft</p>
            </div>
        </div>
        <div style={{marginTop: '.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '32rem'}}>
            <p style={{color: 'blue'}}>${rent_price}/month</p>
            <button style={{border: 'none' ,color: 'blue'}}>Read More</button>
        </div>
    </div>)
}

export default ShowCard;