import React from 'react'
import { FaArrowRight, FaRegCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NewsItem = () => {
    return (
        // {/* item */ }
        < div className='grid-cols-3 transition duration-500 ease-in-out hover:shadow-md' >
            <Link to={'linkdemo'}>
                <img src="https://picsum.photos/296/211" alt="" className='w-full' />
            </Link>
            <div className='py-4'>
                <div className='text-[18px] text-[#898989] font-semibold pb-1 flex gap-1 items-center'>
                    <FaRegCalendarAlt /> <span>24/4/2024</span>
                </div>
                <div className='h-[56px] mb-3'>
                    <Link to={'linkdemo'} className='text-[#262626] font-semibold text-[20px]'>A bedroom must have something like this</Link>
                </div>
                <Link to={'linkdemo'} className='text-[#EF4444] font-semibold text-[20px] flex gap-1 items-center'>
                    <span>Xem chi tiết</span> <FaArrowRight />
                </Link>
            </div>
        </div >
    )
}

export default NewsItem