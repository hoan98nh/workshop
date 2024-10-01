import { Link } from "react-router-dom"
import CheckoutPaymentRadio from "../../../components/CheckoutPaymentRadio"

const CheckOut = () => {
  return (
    <div className='max-w-7xl mx-auto my-16'>
      <div>
        <h1>Billing details</h1>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        {/* trai */}
        <div className='col-span-1'>
          <div className='grid grid-cols-2 gap-8'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name='firstName' className='border border-[#A3A3A3] px-4 py-2' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name='lastName' className='border border-[#A3A3A3] px-4 py-2' />
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor="">Company Name (Optional)</label>
            <input type="text" name='' className='border border-[#A3A3A3] px-4 py-2' />
          </div>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor="">Country / Region</label>
            <select name="" id="" className='border border-[#A3A3A3] px-4 py-2'>
              <option value="1">Sri lanka</option>
              <option value="2">asdas</option>
              <option value="3">Lorem</option>
            </select>
          </div>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor="">Street address</label>
            <input type="text" name='' className='border border-[#A3A3A3] px-4 py-2' />
          </div>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor="">Town / City</label>
            <input type="text" name='' className='border border-[#A3A3A3] px-4 py-2' />
          </div>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor="">Province</label>
            <select name="" id="" className='border border-[#A3A3A3] px-4 py-2'>
              <option value="1">Sri lanka</option>
              <option value="2">asdas</option>
              <option value="3">Lorem</option>
            </select>
          </div>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor="">ZIP code</label>
            <input type="text" name='' className='border border-[#A3A3A3] px-4 py-2' />
          </div>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor="">Phone</label>
            <input type="tel" name='' className='border border-[#A3A3A3] px-4 py-2' />
          </div>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor="">Email address</label>
            <input type="email" name='' className='border border-[#A3A3A3] px-4 py-2' />
          </div>
        </div>
        {/* phai */}
        <div className="col-span-1">
          <div className=''>
            <div className='mt-5 border-b border-[#A3A3A3] pb-4'>
              <div className='flex justify-between mb-4 font-semibold text-[24px]'>
                <span className='text-[#262626]'>Product</span>
                <span className='text-[#262626]'>Subtotal</span>
              </div>
              <div className='flex justify-between mb-4'>
                <span className='text-[#262626]'>
                  <span className='text-[#A3A3A3] mr-3'>Asgaard sofa</span>
                  <span>x1</span>
                </span>
                <span className='text-[#A3A3A3]'>25.000.000đ</span>
              </div>
              <div className='flex justify-between mb-4'>
                <span className='text-[#262626]'>Subtotal</span>
                <span className='text-[#A3A3A3]'>25.000.000đ</span>
              </div>
              <div className='flex justify-between mb-4'>
                <span className='text-[#262626]'>Total</span>
                <span className='text-[#B88E2F] font-bold'>25.000.000đ</span>
              </div>
            </div>
            <div>
              {/* <input type="radio" name="" id="" className="" /> */}
              {/* radio input + collapse */}
              <CheckoutPaymentRadio/>
              <p className="mt-8">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link to={"privacy"} className="font-medium">privacy policy</Link>.
              </p>
            </div>
            <div className='text-center mt-8'>
              <button className='w-full max-w-[342px] py-2 border border-[#CA8A04] text-[#CA8A04] font-semibold'>Place order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut