import React from 'react'
import { FaArrowRight, FaRegCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ProductItem from '../../../components/ProductItem'
import NewsItem from '../../../components/NewsItem'

const HomePage = () => {
  return (
    <div>
      {/* banner */}
      <div className='banner'>
        <img src="https://picsum.photos/1440/600" alt="" className='w-full' />
      </div>
      {/* end banner */}

      {/* new products */}
      <div className='max-w-7xl mx-auto mt-16'>
        <div className='flex justify-between items-center'>
          <h1 className='font-semibold text-[#262626] text-[40px]'>New Products</h1>
          <button className='h-10 px-4 border border-[#CA8A04] text-[#CA8A04] font-semibold'>View all products</button>
        </div>
        <div className='grid grid-cols-4 gap-8 pt-4'>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
      {/* end new products */}

      {/* Gallery */}
      <div className='max-w-7xl mx-auto mt-16'>
        <div className='flex justify-between items-center'>
          <h1 className='font-semibold text-[#262626] text-[40px]'>Gallery</h1>
          <button className='h-10 px-4 border border-[#CA8A04] text-[#CA8A04] font-semibold'>View all gallery</button>
        </div>
        <div className='grid grid-cols-3 gap-8 pt-4'>
          {/* item */}
          <div className='bg-[#F5F5F5] transition duration-500 ease-in-out hover:scale-105'>
            <Link to={'linkdemo'} className=''>
              <img src="https://picsum.photos/405/296" alt="" className='w-full' />
            </Link>
          </div>
          {/* item */}
          <div className='bg-[#F5F5F5] transition duration-500 ease-in-out hover:scale-105'>
            <Link to={'linkdemo'} className=''>
              <img src="https://picsum.photos/405/296" alt="" className='w-full' />
            </Link>
          </div>
          {/* item */}
          <div className='bg-[#F5F5F5] transition duration-500 ease-in-out hover:scale-105'>
            <Link to={'linkdemo'} className=''>
              <img src="https://picsum.photos/405/296" alt="" className='w-full' />
            </Link>
          </div>
          {/* item */}
          <div className='bg-[#F5F5F5] transition duration-500 ease-in-out hover:scale-105'>
            <Link to={'linkdemo'} className=''>
              <img src="https://picsum.photos/405/296" alt="" className='w-full' />
            </Link>
          </div>
          {/* item */}
          <div className='bg-[#F5F5F5] transition duration-500 ease-in-out hover:scale-105'>
            <Link to={'linkdemo'} className=''>
              <img src="https://picsum.photos/405/296" alt="" className='w-full' />
            </Link>
          </div>
          {/* item */}
          <div className='bg-[#F5F5F5] transition duration-500 ease-in-out hover:scale-105'>
            <Link to={'linkdemo'} className=''>
              <img src="https://picsum.photos/405/296" alt="" className='w-full' />
            </Link>
          </div>
        </div>
      </div>
      {/* end Gallery */}

      {/* News */}
      <div className='max-w-7xl mx-auto mt-16'>
        <div className='flex justify-between items-center'>
          <h1 className='font-semibold text-[#262626] text-[40px]'>News</h1>
          <button className='h-10 px-4 border border-[#CA8A04] text-[#CA8A04] font-semibold'>View all news</button>
        </div>
        <div className='grid grid-cols-4 gap-8 pt-4'>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </div>
      {/* end News */}

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

export default HomePage