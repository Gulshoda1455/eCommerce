
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Logo from "../assets/images/Furniro.logo.svg"
import Contact from "../assets/images/contact.svg"
import Lupa from "../assets/images/search.svg"
import Heart from '../assets/images/heart.love.svg'
import Korzinka from '../assets/images/korzinkaFur.svg'
import { useEffect } from 'react'



 const Layout=()=>{
      const navigate = useNavigate();
     useEffect(()=>{
         const token = localStorage.getItem("auth-token");
         if(!token){
            navigate("/login")
         }
     },[navigate])

    return (
        <div>
            <header className="p-5">
            <div className="container">
                   <div className="header flex items-center justify-between">
                   <img src={Logo} alt="Logo" />
                   <nav className="flex items-center gap-40 ">
                       <ul className='flex items-center  gap-10'>
                           <li>
                               <NavLink className={({isActive, isPending})=>isPending? "text-black-300 font-bold size-[24px]" : isActive ? "text-black-300 font-bold size-[24px]" : "" } to="/">Home</NavLink>
                           </li>
                           <li>
                               <NavLink className={({isActive, isPending})=>isPending? "text-black-300" : isActive ? "text-black-300 font-bold size-[24px]" : "" } to="/cart">Shop</NavLink>
                           </li>
                           <li>
                               <NavLink className={({isActive, isPending})=>isPending? "text-black-300" : isActive ? "text-black-300 font-bold size-[24px]" : "" } to="/checkout">About</NavLink>
                           </li>
                           <li>
                               <NavLink className={({isActive, isPending})=>isPending? "text-black-300" : isActive ? "text-black-300 font-bold size-[24px]" : "" } to="/contact">Contact</NavLink>
                           </li>
                       </ul>
                       <div className="flex items-center justify-between gap-8">
                           <a href="/">
                               <img src={Contact} alt="Contact" />
                           </a>
                           <a href="/">
                               <img src={Lupa} alt="search" />
                           </a>
                           <a href="/">
                               <img src={Heart} alt="heart" />
                           </a>
                           <a href="/">
                               <img src={Korzinka} alt="korzinka" />
                           </a>
                       </div>
                   </nav>
   
                   </div>
   
           
            </div>
         </header>
   
         <main>
           <Outlet/>
         </main>
   
         <footer className='my-10'>
           <div className="container">
           <span className='absolute w-[95%] border-solid border-[1px] border-[rgb(217, 217, 217)] '></span>
               <div className="footer flex items-start justify-between pb-[48px] pt-[48px]">
                   <div className='w-[285px] '>
                       <h2 className='font-bold size-[24px] mb-[50px]'>Funiro.</h2>
                       <p className='font-normal text-[16px]  text-[rgb(159, 159, 159)]'>400 University Drive Suite 200 Coral Gables,</p>
                       <p className='font-normal text-[16px]  text-[rgb(159, 159, 159)]'>FL 33134 USA</p>
                   </div>
                   <div>
                       <h3 className='font-medium text-[16px] text-[#9F9F9F] mb-[50px]'>Links</h3>
                       <ul>
                           <li className='font-medium text-[16px] mb-[40px]'>Home</li>
                           <li className='font-medium text-[16px] mb-[40px]'>Shop</li>
                           <li className='font-medium text-[16px] mb-[40px]'>About</li>
                           <li className='font-medium text-[16px] mb-[40px]'>Contact</li>
                       </ul>
                   </div>
                   <div>
                       <h3 className='font-medium text-[16px] text-[#9F9F9F] mb-[50px]'>Help</h3>
                       <ul>
                           <li className='font-medium text-[16px] mb-[40px]'>Payment Options</li>
                           <li className='font-medium text-[16px] mb-[40px]'>Returns</li>
                           <li className='font-medium text-[16px] mb-[40px]'>Privacy Policies</li>
                       </ul>
                   </div>
                   <div>
                       <h3 className='font-medium text-[16px] text-[#9F9F9F] mb-[50px]'>Newsletter</h3>
                       <strong className='underline font-normal size-[14px] mr-5 text-[#9F9F9F]'>Enter Your Email Address</strong>
                       <strong className='underline font-medium size-[14px] text-black'>SUBSCRIBE</strong>
                   </div>
                   
               </div>
               <span className='absolute w-[95%] border-solid border-[1px] border-[rgb(217, 217, 217)]'></span>
               <div className='mt-[35px] '>
               <strong className='font-normal size-[16px] text-black'>2023 furino. All rights reverved</strong>
               </div>
           </div>
         </footer>
        </div>
       )
}
export default Layout;