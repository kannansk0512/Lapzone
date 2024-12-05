import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/NavBar";
import Footer from './components/Footer';
import Home from './components/Home';
import LaptopCards from './components/cards';
import AddProduct from './components/AddProduct';
import Signup from './components/SignUp';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import NavHome from './components/NavHome';
import Products from './components/Products';


const App = () => {
  const isLoggedIn = !!localStorage.getItem("authToken");
  return (
    <>
    {isLoggedIn ? <NavHome/> : <Navbar/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='shop/' element={<LaptopCards/>}/>
      <Route path='add_product/' element={<AddProduct/>}/>
      <Route path='signup/' element={<Signup/>}/>
      <Route path='login/' element={<Login/>}/>
      <Route path='about/' element={<About/>}/>
      <Route path='contact/' element={<Contact/>}/>
      <Route path='productdetails/:id' element={<ProductDetails/>}/>
      <Route path='cart/' element={<Cart/>}/>
    </Routes>
    <Footer/>
    <cardSection/>
    </>
  )
}

export default App