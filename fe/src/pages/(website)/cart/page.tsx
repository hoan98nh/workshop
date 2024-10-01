import React from 'react'
import { FaArrowRight, FaRegCalendarAlt, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CartPage = () => {
  return (
    <div className='max-w-7xl mx-auto my-16'>
      <div className="grid grid-cols-3 gap-8">
        <div className='col-span-2'>
          <table className='w-full'>
            <thead className='bg-[#F5F5F5]'>
              <th className='p-4 text-left'>Product</th>
              <th className='p-4 text-left'>Price</th>
              <th className='p-4 text-left col-span-1'>Quantity</th>
              <th className='p-4 text-left'>Subtotal</th>
              <th className='p-4 text-left'></th>
            </thead>
            <tbody>
              <tr className=''>
                <td className='pt-4'>
                  <Link to={'linkdemo'} className='flex items-center gap-4'>
                    <img src="https://picsum.photos/77/77" alt="" className='' />
                    <span className='text-[#A3A3A3]'>Asgaard sofa</span>
                  </Link>
                </td>
                <td className='pt-4 text-[#A3A3A3]'>
                  25.000.000đ
                </td>
                <td className='pt-4 text-[#262626]'>
                  1
                </td>
                <td className='pt-4 text-[#262626]'>
                  25.000.000đ
                </td>
                <td className='pt-4'>
                  <button>
                    <FaTrash className='text-[#EF4444]' />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-1">
          <div className='bg-[#F5F5F5] p-8'>
            <div className='border-b border-[#A3A3A3] pb-4 font-semibold text-[24px]'>Cart Total</div>
            <div className='mt-5'>
              <div className='flex justify-between mb-4'>
                <span className='text-[#262626]'>Subtotal</span>
                <span className='text-[#A3A3A3]'>25.000.000đ</span>
              </div>
              <div className='flex justify-between mb-4'>
                <span className='text-[#262626]'>Total</span>
                <span className='text-[#EF4444] font-semibold'>25.000.000đ</span>
              </div>
              <div className='mt-8'>
                <button className='w-full py-2 border border-[#CA8A04] text-[#CA8A04] font-semibold'>Check out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage