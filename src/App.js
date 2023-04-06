import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Musique from "./Pages/Musique/Musique.js"
import Article from "./Pages/Article/Article.js"
import "./App.css"
import { useState, useEffect } from 'react';
import Aos from 'aos';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 
import QuiEstElle from "./Pages/QuiEstElle/QuiEstElle.js";
import { Login, Signup } from "./Pages/Login-Inscription/Forms.js"
import ShopShirt from './Pages/ShopShirt/ShopShirt.js';



function App() {
  const [item, setItem] = useState(0);

    const handleItem = () =>{
        setItem(item + 1)
        sessionStorage.setItem("item", item + 1)
    }

  useEffect(()=>{
    Aos.init()
  }, [])

  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home item={item} handleItem={handleItem} />} />
        <Route  path="/musique" element={<Musique />} />
        <Route  path="/article" element={<Article />} />
        <Route  path="/quiestelle" element={<QuiEstElle />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} /> 
        <Route path='/shopshirt' element={<ShopShirt />} /> 
      </Routes>
    </Router>
  );
}

export default App;

