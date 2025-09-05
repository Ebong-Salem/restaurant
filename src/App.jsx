import { useState } from "react"
import ExploreMenu from "./components/explore menu/ExploreMenu"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import FoodDisplay from "./components/food display/FoodDisplay"
import StoreContextProvider from "./components/context/StoreContext"
import Login from "./components/login popup/Login"
import Footer from "./components/footer/Footer"



function App() {

  const [showlogin,setShowlogin]=useState(false)

  const [category,setCategory]=useState('all')
  

  return (
    <>

    {showlogin && <Login  setShowlogin={setShowlogin}/>}
    <Navbar  showlogin={showlogin} setShowlogin={setShowlogin}/>
    <Header/>
    <StoreContextProvider>
        <ExploreMenu  category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    </StoreContextProvider>
     <Footer/>
    </>
  )
}

export default App
