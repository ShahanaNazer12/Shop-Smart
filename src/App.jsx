
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
function App() {
  const [cartitem, setCartItem] = useState(0);
 

  // const products =[
  //   {_id:1,
  //     ProductName:"Apple iPhone 16",
  //     ProductPrice:74900,
  //     ProductDescription:"iPhone 16. Built for Apple Intelligence. Featuring Camera Control. 48 MP Fusion camera. Five vibrant colours. And A18 chip.",
  //     ProductPhoto:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/v/p/-original-imah4jyfveygyubc.jpeg?q=70"
  //   },
  //   {_id:2,
  //     ProductName:"Apple iPhone 13",
  //     ProductPrice:59900,
  //     ProductDescription:"iPhone 13. Built for Apple Intelligence. Featuring Camera Control. 48 MP Fusion camera. Five vibrant colours. And A18 chip.",
  //     ProductPhoto:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70"
  //   },
  //   {_id:3,
  //     ProductName:"Apple iPhone 14 ",
  //     ProductPrice:52990,
  //     ProductDescription:"Stay productive and improve your performance with the Super Retina XDR display that is comfortable for the eyes. Powered with a 12 MP main camera, enjoy taking pict",
  //     ProductPhoto:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWLidcPVgKqGcCsMFlFpN14o_GJn_mErcpCUw-3bZ-bMA38B2D5RBeyviwVSjjs7XHb4CIBOwJELVi3BsiQVFK3jJovKQN0FD2CpRLm8xb"
  //   },
  //   {_id:4,
  //     ProductName:"MOTOROLA g35 5G ",
  //     ProductPrice:8999,
  //     ProductDescription:"The moto g35 5G has been officially declared the fastest 5G phone under Rs. 13,000 by TechArc. Experience the fastest 5G in its segment, powered by advanced technology like 4 Carrier Aggregation (combining multiple network channels for faster speeds) and 4x4 MIMO. Enjoy lightning-fast downloads, seamless multitasking, and smooth streaming with support for all relevant 5G bands and network operators.",
  //     ProductPhoto:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/q/m/g35-5g-pb3h0000in-motorola-original-imah7c6ykgz5rtgv.jpeg?q=70"
  //   },
  //   {_id:5,
  //     ProductName:"iQOO Neo 10R 5G ",
  //     ProductPrice:3444,
  //     ProductDescription:"The moto g35 5G has been officially declared the fastest 5G phone under Rs. 13,000 by TechArc. Experience the fastest 5G in its segment, powered by advanced technology like 4 Carrier Aggregation (combining multiple network channels for faster speeds) and 4x4 MIMO. Enjoy lightning-fast downloads, seamless multitasking, and smooth streaming with support for all relevant 5G bands and network operators.",
  //     ProductPhoto:"https://m.media-amazon.com/images/I/61wL8Qbo0HL._SX679_.jpg"
  //   },
  //   {_id:6,
  //     ProductName:"OPPO K13x 5G  ",
  //     ProductPrice:12999,
  //     ProductDescription:"The moto g35 5G has been officially declared the fastest 5G phone under Rs. 13,000 by TechArc. Experience the fastest 5G in its segment, powered by advanced technology like 4 Carrier Aggregation (combining multiple network channels for faster speeds) and 4x4 MIMO. Enjoy lightning-fast downloads, seamless multitasking, and smooth streaming with support for all relevant 5G bands and network operators.",
  //     ProductPhoto:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/q/m/g35-5g-pb3h0000in-motorola-original-imah7c6ykgz5rtgv.jpeg?q=70"
  //   },
  //  {_id:7,
  //   ProductName:"Apple iPhone 16 (Ultramarine, 128 GB)",
  //     ProductPrice:51999,
  //     ProductDescription:"iPhone 16. Built for Apple Intelligence. Featuring Camera Control. 48 MP Fusion camera. Five vibrant colours. And A18 chip.",
  //     ProductPhoto:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/n/s/-original-imah4jyfrgsbebg9.jpeg?q=70"
  //  },
  //  {_id:8,
  //   ProductName:"Apple iPhone 15 Plus (Black, 128 GB)",
  //     ProductPrice:69999,
  //     ProductDescription:"Experience the iPhone 15 Plus – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 Plus – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
  //     ProductPhoto:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70"
  //  },
  //  {_id:9,
  //   ProductName:"Apple iPhone 17 (Lavender, 256 GB)",
  //     ProductPrice:82900,
  //     ProductDescription:"NA",
  //     ProductPhoto:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/7/f/-original-imahft5gfgwpt6pr.jpeg?q=70"
  //  },
  //  {_id:10,
  //   ProductName:"Apple iPhone Air (Light Gold, 1 TB)",
  //     ProductPrice:159900,
  //     ProductDescription:"NA",
  //     ProductPhoto:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/o/9/-original-imahft57w68athx4.jpeg?q=70"
  //  }
   
  // ]
   const[products,setProducts]=useState([])
  

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
      setProducts(data);
      
    })
    .catch((err) => console.log(err));
}, []);


  
  console.log(products)
  
  return(
  
    
    <BrowserRouter >
    <Header cartitem={cartitem} />
    <Routes>
    <Route path='/' element={<Home products={products} setCartItem={setCartItem} />}/>  
    <Route path='/products/:_id' element={<ProductDetails products={products}/>}/>    
    <Route path='/contacts' element={<Contact/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/cart' element={<Cart/>}/>
    
    </Routes>
    <Footer/>
    </BrowserRouter>
  )

  
}

export default App

//details
//cart
