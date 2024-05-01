import './App.css';
import { useState } from "react";
import Home from './Components/Home';
import  RecipesContextProvider  from './context/RecipesContext';
import About from './Components/About';
import Contact from './Components/Contact';
import LoginPopup from './Components/LoginPopup/LoginPopup';
import Navbar from './Components/Navbar';
function App() {
  const[showLogin,setShowLogin]= useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
  <div className="App">
    <RecipesContextProvider>
    <Navbar setShowLogin={setShowLogin} />
    <Home/>
    <About/>
    <Contact/>
    </RecipesContextProvider>
  </div>
  </>
  );
}

export default App;
