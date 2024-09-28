import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = () => {
    return (
        // {/* item */ }
        < div className=' bg-[#F5F5F5] transition duration-500 ease-in-out hover:shadow-md' >
            <Link to={'linkdemo'}>
                <img src="https://picsum.photos/296/301" alt="" className='w-full' />
            </Link>
            <div className='p-4'>
                <div>
                    <Link to={'linkdemo'} className='text-[#262626] font-semibold text-[20px] pb-1'>Syltherine</Link>
                </div>
                <div className='text-[#898989] pb-2'>Stylish cafe chair</div>
                <div className='text-[#EF4444] font-semibold text-[20px] pb-3'>2.500.000đ</div>
                <button className='w-full py-2 border border-[#CA8A04] text-[#CA8A04] font-semibold'>Add to cart</button>
            </div>
        </div >
    )
}

export default ProductItem