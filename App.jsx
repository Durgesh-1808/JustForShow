import './App.css'
import Header from './Header'
// import { data } from './utils/data'
// import ShowCard from './ShowCard'
import NavBar from './NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Paris from './screens/Paris.jsx';
import NewYork from './screens/NewYork';
import Mumbai from './screens/Mumbai';
import London from './screens/London';
import Property from './screens/Property';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<NewYork/>}/>
          <Route path='/Mumbai' element={<Mumbai/>}/>
          <Route path='/London' element={<London/>}/>
          <Route path='/Paris' element={<Paris/>}/>
          <Route path='/property/:id' element={<Property/>}/>
        </Routes>
    </>
  )
}

export default App
