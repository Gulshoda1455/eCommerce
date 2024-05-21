
import cartLogo from "../assets/images/cartLogo.svg"
import Mebel from "../assets/images/mebel.png"
import Number from "../assets/images/number1.png"
import Delete from "../assets/images/delete-img.png"
import High from "../assets/images/High.png"
import Guarantee from "../assets/images/guarantee.png"
import Shipping from "../assets/images/shipping.png"
import Support from "../assets/images/customer-support.png"


 
 const Cart =()=>{
  return (
    <div>  
      <section className='p-20 bg-[url(./assets/images/CartBg.png)] bg-no-repeat bg-center '>
        <div className="container">
            <div className='text-center mx-auto '>
                 <div className='ml-[480px]' >
                 <img src={cartLogo} alt="cartLogo"/>
                 </div>
                 <p>Home - Cart</p>
            </div>
        </div>
      </section>

      <section className='pt-[72px] pb-[63px]'>
        <div className="container">
            <div className='flex items-center justify-between'>
                 <div>
                  <ul className='flex items-center justify-between py-[16px] px-[142px] bg-[#F9F1E7] mb-[60px]'>
                    <li className='font-medium text-[16px] mr-[114px]'>Product</li>
                    <li className='font-medium text-[16px] mr-[137px]'>Price</li>
                    <li className='font-medium text-[16px] mr-[36px]'>Quantity</li>
                    <li className='font-medium text-[16px]'>Subtotal</li>
                  </ul>
                  <div className='flex items-start justify-between'>
                    <div className='w-108px bg-[#F9F1E7]'>
                    <img src={Mebel} alt="Mebel" width={108} height={105} />
                    </div>
                    <p>Asgaard sofa</p>
                    <p>Rs. 250,000.00</p>
                    <img src={Number} alt="number" width={32} height={32} />
                    <strong>Rs. 250,000.00</strong>
                    <img src={Delete} alt="delete" width={28} height={28} />
                  </div>
                 </div>
                 <div className='w-[393px] pt-[15px] pb-[80px] bg-[#F9F1E7] text-center ' >
                    <h2 className='font-semibold text-[32px] mb-[61px]'>Cart Totals</h2>
                    <div className='flex items-center justify-center'>
                      <strong className='font-medium text-[16px] mr-[62px]'>Subtotal</strong>
                      <p className='font-normal text-[16px] text-[#9F9F9F]'>Rs. 250,000.00</p>
                    </div>
                    <div className='flex items-center justify-center mb-[42px] '>
                      <strong className='font-medium text-[16px] mr-[62px]'>Total</strong>
                      <p className='font-medium text-[20px] text-[#B88E2F]'>Rs. 250,000.00</p>
                    </div>
                    <button className='w-[222px] font-normal text-[20px] py-[14px] border-[1px] border-black rounded-md'>Check Out</button>
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
export default Cart;



