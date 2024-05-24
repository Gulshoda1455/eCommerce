
import one from "../assets/images/one.png"
import two from "../assets/images/two.png"
import three from "../assets/images/three.png"
import four from "../assets/images/four.png"
import five from "../assets/images/five.png"
import six from "../assets/images/sixth.png"
import seven from "../assets/images/seven.png"
import eight from "../assets/images/eight.png"
import nine from "../assets/images/nine.png"
import { memo } from "react"



const Furniture=()=>{
 
  return (
    <div>
      <div className='text-center mb-4'>   
      <p className='font-semibold text-[20px]'>Share your setup with</p>
      <h2 className='font-bold text-[40px]'>#FuniroFurniture</h2>
      </div>
      

      <div className='flex items-center justify-center gap-4'>
            <div>
            <div className='flex items-end gap-2 mb-2'>
              <img src={one} alt="1" />
              <img src={two} alt="2" width={400} height={312}/>
            </div>
            <div className='flex items-start gap-2'>
              <img src={four} alt="4" width={200} height={242}/>
              <img src={three} alt="3" width={300}/>
            </div>
            </div>
            <div>
              <img src={five} alt="5" width={255} height={392}/>
            </div>
            <div>
            <div className='flex items-end gap-2 mb-2'>
              <img src={six} alt="6" width={270} height={348}/>
              <img src={seven} alt="7" width={190} height={548}/>
            </div>
            <div className='flex items-start gap-2'>
              <img src={eight} alt="8" width={158} height={242}/>
              <img src={nine} alt="9"  width={258} height={196}/>
            </div>
            </div>


      </div>
    </div>
  )
}
export default memo(Furniture);