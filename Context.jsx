import {createContext, useState} from 'react';

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [city, setCity] = useState('NewYork');

    return(<AppContext.Provider value={{city, setCity}}>{children}</AppContext.Provider>)
}

export {AppContext, AppProvider};