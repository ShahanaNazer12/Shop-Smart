
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './components/Contact';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from './redux/productSlice';
import Register from './components/Register';
// import Logiin from './components/Logiin';
import { ToastContainer } from 'react-toastify';


import LoginNew from './components/LoginNew';
import AddProduct from './admin/addProduct';
import ProtuctedRoute from './utils/protectedRoute';
import EditProduct from './admin/EditProduct';
import ListProduct from './admin/ListProduct';
import Product from './components/Product';
import ListUsers from './admin/ListUsers';
import EditUsers from './admin/EditUsers';
import Dashboard from './admin/Dashboard';

function App() {
  const dispatch = useDispatch()
   const products = useSelector((state)=>(state.products.products));
//   useEffect(() => {
//   fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((data) => {
//       dispatch(setProduct(data));
      
//     })
//     .catch((err) => console.log(err));
// }, [dispatch]);
   
  // console.log(products)
   useEffect(()=>{
    const products = JSON.parse(localStorage.getItem("products")) || [];
    dispatch(setProduct(products))
    return()=>{}
   },[])
  return( 
    <BrowserRouter >
    <Header  />
    <ToastContainer position="top-right" autoClose={2000}/>
    <Routes>
    <Route path='/' element={<Home   />}/>  
    <Route path='/products/:_id' element={<ProductDetails/>}/>    
    <Route path='/contacts' element={<Contact/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/product' element={<Product/>}/>
    {/* <Route path='/login' element={<Logiin/>}/> */}
    <Route path='/loginnew' element={<LoginNew/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/admin/add-product' element={<ProtuctedRoute requiredrole = {["admin","seller"]}>
      <AddProduct/>
     </ProtuctedRoute>}/>
     <Route path='/admin/editt-product/:id' element={<ProtuctedRoute>
      <EditProduct/>
     </ProtuctedRoute>}/>
      <Route path='/admin/list-product/' element={<ProtuctedRoute requiredrole = {["admin","seller"]}>
      <ListProduct/>
     </ProtuctedRoute>}/>
       <Route path='/admin/list-users/' element={<ProtuctedRoute>
      <ListUsers/>
     </ProtuctedRoute>}/>
     <Route path='/admin/editt-users/:id' element={<ProtuctedRoute>
      <EditUsers/>
     </ProtuctedRoute>}/>

     
      <Route path='/admin/dashboard' element={<ProtuctedRoute>
      <Dashboard/>
     </ProtuctedRoute>}/>
     
     
    
    </Routes>
    <Footer/>
    </BrowserRouter>
  ) 
}

export default App



