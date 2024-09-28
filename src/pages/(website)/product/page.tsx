import React from 'react'
import { FaArrowRight, FaRegCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ProductItem from '../../../components/ProductItem'

const ShopPage = () => {
  return (
    <div>
      {/* banner */}
      <div className='banner'>
        <img src="https://picsum.photos/1440/600" alt="" className='w-full' />
      </div>
      {/* end banner */}

      {/* products */}
      <div className='max-w-7xl mx-auto mt-16'>
        <div className='grid grid-cols-4 gap-8 pt-4'>
          {/* categories */}
          <div className="col-span-1">
            <h2 className="font-semibold text-[20px] text-[#262626] mb-4">Categories</h2>
            <div>
              <ul className="text-[#737373]">
                <li>
                  <Link to={'shop'} className="text-[#CA8A04]">Cafe Chair</Link>
                </li>
                <li>
                  <Link to={'shop'}>Sofa</Link>
                </li>
                <li>
                  <Link to={'shop'}>Lamp</Link>
                </li>
                <li>
                  <Link to={'shop'}>Carpet</Link>
                </li>
                <li>
                  <Link to={'shop'}>Cabinet</Link>
                </li>
                <li>
                  <Link to={'shop'}>Tea table</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* list product */}
          <div className='col-span-3 pt-[46px]'>
            <div className="grid grid-cols-4 gap-8">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
            {/* Pagination */}
            <div className='flex justify-start gap-4 text-white mt-8'>
              <button className="py-[15px] px-[24px] rounded-[10px] bg-[#CA8A04] text-[20px] ">1</button>
              <button className="py-[15px] px-[24px] rounded-[10px] bg-[#A3A3A3] text-[20px]">2</button>
              <button className="py-[15px] px-[24px] rounded-[10px] bg-[#A3A3A3] text-[20px] ">3</button>
              <button className="py-[15px] px-[24px] rounded-[10px] bg-[#A3A3A3] text-[20px] ">Next</button>
            </div>
            {/* end Pagination */}
          </div>
          {/* end list */}
        </div>
      </div>
      {/* end  products */}

      {/* quality - support - privacy */}
      <div className='w-full bg-[#FFF7ED] mt-16 pt-16 pb-[60px]'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-4'>
            {/* item */}
            <div className='flex gap-5 items-center justify-center'>
              <div>
                <img src="./cup.svg" alt="" />
              </div>
              <div>
                <div className="font-semibold text-[#262626] text-[20px]">High Quality</div>
                <div className="text-[#898989] mt-1">Crafted from top materials</div>
              </div>
            </div>
            {/* item */}
            <div className=' flex gap-5 items-center justify-center'>
              <div>
                <img src="./service.svg" alt="" />
              </div>
              <div>
                <div className="font-semibold text-[#262626] text-[20px]">24 / 7 Support</div>
                <div className="text-[#898989] mt-1">Dedicated support</div>
              </div>
            </div>
            {/* item */}
            <div className='flex gap-5 items-center justify-center'>
              <div>
                <img src="./checked.svg" alt="" />
              </div>
              <div>
                <div className="font-semibold text-[#262626] text-[20px]">Warranty Protection</div>
                <div className="text-[#898989] mt-1">Over 2 years</div>
              </div>
            </div>
            {/* item */}
            <div className='flex gap-5 items-center justify-center'>
              <div>
                <img src="./ship.svg" alt="" />
              </div>
              <div>
                <div className="font-semibold text-[#262626] text-[20px]">Free Shipping</div>
                <div className="text-[#898989] mt-1">Order over 150 $</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ShopPage