
import High from "../assets/images/High.png"
import Guarantee from "../assets/images/guarantee.png"
import Shipping from "../assets/images/shipping.png"
import Support from "../assets/images/customer-support.png"
import CheckoutLogo from "../assets/images/checkoutImg.png"



const Checkout=()=>{
  return (
    <div>
      <section className='p-20 bg-[url(./assets/images/CartBg.png)] bg-no-repeat bg-center '>
        <div className="container">
            <div className='text-center mx-auto '>
                 <div className='ml-[450px]'>
                 <img src={CheckoutLogo} alt="cartLogo" width={196} height={72}/>
                 </div>
                 <p>Checkout - Cart</p>
            </div>
        </div>
      </section>

      <section className='p-20'>
        <div className="container">
          <div className='flex items-start justify-between '>
            <div className='w-[508px]'>
              <h2 className='font-semibold  text-[36px] mb-[36px]'>Billing details</h2>
              <div className='flex items-center justify-between mb-[36px]'>
                       <div>
                        <strong className='mb-[22px] font-medium text-[16px]'>First Name</strong><br />
                       <label className=' mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" className='bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
                       </div>
                       <div>
                        <strong className='mb-[22px] font-medium text-[16px]'>Last Name</strong><br />
                       <label className=' mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" className='bg-gray-50   border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
                       </div>
                       
              </div>
              <div className='gap-[24px]'>
                        <strong className='mb-[22px] font-medium text-[16px]'>Company Name (Optional)</strong>
                       <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
             </div>
             <div className='gap-[24px] mt-[24px]'>
                        <strong className='mb-[22px] font-medium text-[16px]'>Country / Region</strong>
                       <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" placeholder='Sri Lanka' className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
             </div>
             <div className='gap-[24px] mt-[24px]'>
                        <strong className='mb-[22px] font-medium text-[16px]'>Street address</strong>
                       <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
             </div>
             <div className='gap-[24px] mt-[24px]'>
                        <strong className='mb-[22px] font-medium text-[16px]'>Town / City</strong>
                       <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
             </div>
             <div className='gap-[24px] mt-[24px]'>
                        <strong className='mb-[22px] font-medium text-[16px]'>Province</strong>
                       <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" placeholder='Western Province' className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
             </div>
             <div className='gap-[24px] mt-[24px]'>
                        <strong className='mb-[22px] font-medium text-[16px]'>ZIP code</strong>
                       <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
             </div>
             <div className='gap-[24px] mt-[24px]'>
                        <strong className='mb-[22px] font-medium text-[16px]'>Phone</strong>
                       <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
             </div>
             <div className='gap-[24px] mt-[24px]'>
                        <strong className='mb-[22px] font-medium text-[16px]'>Email address</strong>
                       <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
             </div>
             <div className='gap-[24px] mt-[24px]'>

                       <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                          <input type="text" placeholder='Additional information' className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                       </label>
                       
             </div>

            </div>
            <div className='w-[508px]'>
            <div className='flex items-start justify-between '>
              <div>
                <h2 className='font-medium text-[24px] mb-[14px]'>Product</h2>
                <p className='font-normal text-[16px] text-[#9F9F9F] mb-[14px] '>Asgaard sofa</p>
                <p className='font-normal text-[16px] mb-[14px]'>Subtotal</p>
                <p className='font-normal text-[16px]'>Total</p>
              </div>
              <div>
                <h2 className='font-medium text-[24px] mb-[14px]'>Subtotal</h2>
                <p className='font-normal text-[16px]  mb-[14px]'>Rs. 250,000.00</p>
                <p className='font-normal text-[16px] mb-[14px]'>Rs. 250,000.00</p>
                <p className='font-bold text-[24px] text-[#B88E2F] mb-[14px]'>Rs. 250,000.00</p>
              </div>
            </div>
            <span className='absolute w-[600px] border-solid border-[1px] border-[rgb(217, 217, 217)]'></span>
            <div className='mt-23px'>
              <h2 className='font-normal text-[16px] mt-[23px] mb-[11px]'>Direct Bank Transfer</h2>
              <p className='font-light text-[16px] text-[#9F9F9F] mb-[22px]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
               <ul className='mb-[22px]'>
                <li className='font-medium text-[16px]'>Direct Bank Transfer</li>
                <li className='font-medium text-[16px]'>Cash On Delivery</li>
               </ul>
               <p className='font-light text-[16px] text-[#9F9F9F]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
               <button className='w-[318px] py-[17px] mt-[39px] font-normal text-[20px] border-[1px] border-black rounded-md'>Place order</button>
            </div>
            </div>
          </div>
        </div>
      </section>

      <sectiont className='py-20 bg-[#FAF3EA] '>
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
      </sectiont>
    </div>
  )
}
export default Checkout;
