
import High from "../assets/images/High.png"
import Guarantee from "../assets/images/guarantee.png"
import Shipping from "../assets/images/shipping.png"
import Support from "../assets/images/customer-support.png"
import contactLogo from "../assets/images/contactImg.png"


const Contact =()=>{
  return (
    <div>
      <section className='p-20 bg-[url(./assets/images/CartBg.png)] bg-no-repeat bg-center '>
        <div className="container">
            <div className='text-center '>
                 <div className='ml-[450px]'>
                 <img src={contactLogo} alt="cartLogo" width={196} height={72} />
                 </div>
                 <p>Contact - Cart</p>
            </div>
        </div>
      </section>
      
      <section className='p-10'>
        <div className="container">
          <div >
          <div className='text-center w-[644px] m-0 m-auto'>
          <h2 className='font-semibold text-[36px] mb-[7px]'>Get In Touch With Us</h2>
            <p className='font-normal tetx-[16px] mb-[133px] text-[#9F9F9F]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
          </div>
          <div className='flex items-start justify-between'>
            <div>
              <div className='w-[212px] mb-[42px]'>
                <h2 className='font-medium text-[24px] '>Address</h2>
                <p className='font-normal text-[16px] '>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
              <div className='w-[212px] mb-[42px]'>
                <h2 className='font-medium text-[24px] ' >Phone</h2>
                <p className='font-normal text-[16px] ' >Mobile: +(84) 546-6789</p>
                <p className='font-normal text-[16px] '>Hotline: +(84) 456-6789</p>
              </div>
              <div className='w-[180px] mb-[42px]'>
                <h2 className='font-medium text-[24px] '>Working Time</h2>
                <p className='font-normal text-[16px] ' >Monday-Friday: 9:00 - 22:00</p>
                <p className='font-normal text-[16px] ' >Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
            <div >
            <div className='gap-[24px] w-[600px] p-5'>
                        <strong className='mb-[22px] font-medium text-[16px]'>Your name</strong>
                       <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" placeholder='Abc' className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
             </div>
             <div className='gap-[24px] w-[600px] p-5'>
                        <strong className='mb-[22px] font-medium text-[16px]'>Email address</strong>
                       <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" placeholder='Abc@def.com' className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
             </div>
             <div className='gap-[24px] w-[600px] p-5 items-start'>
                        <strong className='mb-[22px] font-medium text-[16px]'>Subject</strong><br />
                       <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" placeholder='This is an optional' className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
             </div>
             <div className='gap-[24px] w-[600px] p-5'>
                        <strong className='mb-[22px] font-medium text-[16px]'>Message</strong>
                       <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" placeholder='Hi! i’d like to ask about' className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-10 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
             </div>
             <button className='w-[237px] font-normal text-[16px] bg-[#B88E2F] py-[13px] text-white rounded-md mt-[49px]'>Submit</button>
                        
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-[#F9F1E7] '>
        <div className="container">
          <div className='flex items-center justify-between'>
              <div className='flex items-center justify-between'>
                <img src={High} alt="High" width={60} height={60} />
                <div className='ml-[5px]' >
                  <h2 className='font-semibold text-[25px] mb-[2px]'>High Quality</h2>
                  <p className='font-medium text-[20px] text-[#898989]'>crafted from top materials</p>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <img src={Guarantee} alt="High" width={60} height={60} />
                <div className='ml-[5px]'  >
                  <h2 className='font-semibold text-[25px] mb-[2px]'>Warranty Protection</h2>
                  <p className='font-medium text-[20px] text-[#898989]'>Over 2 years</p>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <img src={Shipping} alt="High" width={60} height={60} />
                <div className='ml-[5px]' >
                  <h2 className='font-semibold text-[25px] mb-[2px]'>Free Shipping</h2>
                  <p className='font-medium text-[20px] text-[#898989]'>Order over 150 $</p>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <img src={Support} alt="High" width={60} height={60} />
                <div className='ml-[5px]' >
                  <h2 className='font-semibold text-[25px] mb-[2px]'>24 / 7 Support</h2>
                  <p className='font-medium text-[20px] text-[#898989]'>Dedicated support</p>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact;
