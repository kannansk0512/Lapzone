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
import OrderConfirm from './components/OrderConfirm';
import Profile from './components/Profile';
import Checkout from './components/Checkout';
import MyOrders from './components/Myorders';


const App = () => 
  {
    
  return (
    <>
  
    <Navbar/>
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
      <Route path='NavHome/' element={<NavHome/>}/>
      <Route path='order_confirm/' element={<OrderConfirm/>}/>
      <Route path='products/' element={<Products/>}/>
      <Route path='profile/' element={<Profile/>}/>
      <Route path='checkout/' element={<Checkout/>}/>
      <Route path='myorders/' element={<MyOrders/>}/>
    </Routes>
    <Footer/>
    <cardSection/>
    </>
  )
}

export default App