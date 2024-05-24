import React, {  useState,useEffect, memo } from 'react'
import axios from 'axios'
import Dining from "../assets/images/Dining.png"
import Living from "../assets/images/living.png"
import Bedroom from "../assets/images/bedroom.png"
import CategoryCard from "../component/CategoryCard"
import Header from '../component/Header'


const backendURL ="https://test-ecommerce-gamma.vercel.app/categories";

const images ={
  "living.png":Living,
  "dining.png":Dining,
  "bedroom.png":Bedroom
}

 function Categories() {
    const [cards,setCards] = useState([]);
    useEffect(()=>{ 
     const getCategories = async ()=>{
      const response = await axios.get(backendURL);
     
      setCards(response.data);
     }
     getCategories();

},[])
  return (
    <div>
        <section className='p-10'>
        <div className="container">
          <div>
            <div>
               <Header
                  title="Browse The Range"
                  subTitle="Lorem ipsum dolor sit amet,consectetur adipisicing elit."
               />
            </div>
            <div className='flex flex-row gap-4'>
              {cards.map((card) => (
                  <CategoryCard name={card.name} img={images[card.img]}/>
                ))}
           
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default memo(Categories);