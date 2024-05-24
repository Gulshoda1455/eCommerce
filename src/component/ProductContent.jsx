import { memo, useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

const ProductContent=()=>{
   const [products,setProducts]=useState([]);
  useEffect(()=>{
    axios.get("https://test-ecommerce-gamma.vercel.app/products ")
    .then((response)=>{
      setProducts(response.data)
    })
    .catch(()=>{
      console.log("error");
    })
  }, [])
  return (
      <div>
        
           <h2 className='font-bold text-[40px] text-center mb-5'>Our Products</h2>
            <div className='flex flex-wrap gap-4 mb-5 '>
                
                {
          products.map(p=>(
          <Link to={`/products/${p.id}`} className="w-[285px]  bg-[#F4F5F7]" key={p.id}>
            <img src={p.img} alt={p.title} width={285} height={285}   />
            <h3 className='font-semibold text-[24px] '>{p.title}</h3>
            <p className='font-medium text-[16px] text-[#898989]'>{p.subtitle}</p>
            <strong className='font-semibold text-[20px] mr-4'>{p.newPrice}</strong>
            <strong className='font-normal text-[16px] text-[#898989] line-through '>{p.oldPrice}</strong>
          </Link>))
        }
                
            </div>
            <button className=" border-1 border-solid border-[#B88E2F] py-5 font-semibold text-[16px] text-[#B88E2F] ">Show More</button>
            
      
       </div> 
)
}
export default memo(ProductContent); 
