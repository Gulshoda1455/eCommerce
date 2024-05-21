import React from 'react'
import ProductContent from '../component/ProductContent'
import Rooms from "../assets/images/rooms.png"
import innerRooms from "../assets/images/innerRooms.png"
import Furniture from '../component/Furniture'
import Categories from '../component/Categories'






export default function  Home (){
 

  return (
    <div>
      <section className='pt-20 pb-[200px] bg-[url(./assets/images/hero-design.png)] bg-no-repeat bg-center pl-[550px]'>
        <div className="container">
          <div className='w-[643px] pt-[62px] pb-[37px] pl-[41px] pr-[43px] mt-[200px] bg-[#FFF3E3] rounded-md'>
            <strong className='text-[16px] font-semibold'>New Arrival</strong>
            <div className='w-[430px]'>
            <h1 className='text-[52px] font-bold text-[#ebc34a]'>Discover Our New Collection</h1>
            </div>
            <div className='w-[480px] mb-[46px]'>
            <p className='text-[18px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            <button className='font-bold text-[16px] text-white bg-[#ebc34a] py-[20px] px-[72px]'>BUY Now</button>
          </div>
        </div>
      </section>

      <Categories/>

      <section className='p-5'>
        <div className="container">
         
          <ProductContent/>
        </div>
      </section>

      <section className='bg-[#FCF8F3] py-10'>
        <div className="container">
          <div className='flex items-center justify-between gap-4'>
              <div className='w-[422px]'>
                      <h2 className='font-bold text-[40px] mb-2'>50+ Beautiful rooms inspiration</h2>
                      <p className='font-medium text-[16px] mb-6'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                      <button className='w-[176px] bg-[#B88E2F] py-3 font-semibold text-[16px] text-white '>Explore More</button>
              </div>
                   <div className='flex items-start justify-between gap-4'>
                   <img src={Rooms} alt="Rooms" width={404} height={582} />
                   <img src={innerRooms} alt="innerRooms" width={372} height={486} />
                   </div>
          </div>
        </div>
      </section>


      <section className='py-10'>
        <div className="container">
               <Furniture/>
        </div>
      </section>



    </div>
  )
}


