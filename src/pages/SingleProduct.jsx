import React, { useEffect, useState } from 'react'
import Single1 from "../assets/images/single11.png"
import Single2 from "../assets/images/single2.png"
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function SingleProduct() {
    const [products,setProduct] = useState({})
    const {productId} = useParams()

    useEffect(()=>{
      const getData =async()=>{
          try{
            const response= await axios.get(
              `https://test-ecommerce-gamma.vercel.app/products/${productId}`
            )
            setProduct(response.data)
          }catch(err){
            console.log(err);
          }
      }
      getData()
    },[productId])
   
  return (
    <div>
        <section className='bg-[#FCF8F3] py-10'>
        <div className="container">
        <h2  className='font-semibold text-[32px] text-center'>{products.title}</h2>
        </div>
      </section>
      <div className='flex flex-wrap items-center gap-2 mt-8  '>
        <div className='ml-[100px]'>
          <img className='mx-auto my-[50px]'  src={products.img} alt="productimg" width={300} height={300} />
        </div>
        <div className='ml-[100px]'>
            <h3 className='font-semibold text-[40px] mb-[50px]'>{products.title}</h3>
            <p className='font-medium text-[25px] mb-5'>{products.subtitle}</p>
           <strong className='font-semibold text-[30px] text-[#898989]  mr-4 block mb-[40px]'><span >RS</span> {products.newPrice}</strong>

           <button className='px-8 py-2 border rounded-md ' >Add to Cart</button>
        </div>

        
      </div>
      <section className=' py-10'>
        <div className="container">
        <h2 className='font-bold text-[32px] mb-2 text-center'>Description</h2>
             <div className='w-[920px] '>
             <p className='font-medium text-[16px] mb-6 text-[#9F9F9F]'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
             <p className='font-medium text-[16px] mb-6 text-[#9F9F9F]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
             </div>
             <div className='flex items-center justify-between'>
                <img src={Single1} alt="single1 img" width={605} height={348}/>
                <img src={Single2} alt="single1 img" width={605} height={348} />
             </div>
        </div>
      </section>

    </div>
  )
}
