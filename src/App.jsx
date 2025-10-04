
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
function App() {
  const dispatch = useDispatch()
   const products = useSelector((state)=>(state.products.products))

  // useEffect(()=>{
  //   fetch('https://fakestoreapi.com/products')
  // .then(response => response.json())
  // .then(data => setProducts(data))
  // .catch((err)=>console.log(err));

  // },[])

  useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      dispatch(setProduct(data));
      
    })
    .catch((err) => console.log(err));
}, [dispatch]);


  
  console.log(products)
  
  return(
  
    
    <BrowserRouter >
    <Header  />
    <Routes>
    <Route path='/' element={<Home   />}/>  
    <Route path='/products/:_id' element={<ProductDetails/>}/>    
    <Route path='/contacts' element={<Contact/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/cart' element={<Cart/>}/>
    
    </Routes>
    <Footer/>
    </BrowserRouter>
  )

  
}

export default App


