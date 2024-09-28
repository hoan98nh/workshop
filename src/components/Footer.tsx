import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-[#262626] text-[#F6F6F6]'>
            <div className='max-w-7xl mx-auto'>
                <div className="grid grid-cols-4 gap-8 border-b-[1px] border-[#D9D9D9] py-[64px]">
                    <div className='grid-cols-3'>
                        <div>
                            <img src="./logo-white.svg" className='h-[41px]' alt="logo" />
                        </div>
                        <div className='mt-[16px]'>
                            <span>
                                400 University Drive Suite 200 Coral Gables,
                                FL 33134 USA
                            </span>
                        </div>
                    </div>
                    <div className='grid-cols-3'>
                        <h3 className='h-[41px] content-center font-semibold text-[20px]'>Sitemap</h3>
                        <ul className='mt-[16px]'>
                            <li className='mb-4'>
                                <Link to={''}  className='hover:underline'>Home</Link>
                            </li>
                            <li className='mb-4'>
                                <Link to={''}  className='hover:underline'>Shop</Link>
                            </li>
                            <li className='mb-4'>
                                <Link to={''}  className='hover:underline'>About</Link>
                            </li>
                            <li>
                                <Link to={''}  className='hover:underline'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='grid-cols-3'>
                        <h3 className='h-[41px] content-center font-semibold text-[20px]'>Help</h3>
                        <ul className='mt-[16px]'>
                            <li className='mb-4'>
                                <Link to={''}  className='hover:underline'>Payment Options</Link>
                            </li>
                            <li className='mb-4'>
                                <Link to={''}  className='hover:underline'>Returns</Link>
                            </li>
                            <li>
                                <Link to={''}  className='hover:underline'>Privacy Policies</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='grid-cols-3'>
                        <h3 className='h-[41px] content-center font-semibold text-[20px]'>Location</h3>
                        <ul className='mt-[16px]'>
                            <li className='mb-4'>
                                support@euphoria.in
                            </li>
                            <li className='mb-4'>
                                Ahmedabad Main Road
                            </li>
                            <li>
                                Udaipur, India- 313002
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='py-[32px] text-center'>
                    <span>
                        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer