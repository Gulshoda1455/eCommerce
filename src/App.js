
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
 import Layout from './pages/Layout';
import React, { Suspense } from 'react';



const Home = React.lazy(()=>import("./pages/Home"))
const Cart = React.lazy(()=>import("./pages/Cart"))
const Checkout = React.lazy(()=>import("./pages/Checkout"))
const Contact =React.lazy(()=>import("./pages/Contact"))
const SingleProduct =React.lazy(()=>import("./pages/SingleProduct"))
const Login = React.lazy(()=>import("./pages/Login"))

function App() {
  return (
   <BrowserRouter>
   <Suspense fallback={<div>Loading...</div>}>
   <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/contact' element={<Contact/>}/>
         <Route path='/products/:productId' element={<SingleProduct/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
   </Suspense>
     
   </BrowserRouter>
  );
}

export default App;
