import React, { useState } from 'react'
import { FaArrowRight, FaRegCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ProductItem from '../../../components/ProductItem'
import { CarouselProps, RadioChangeEvent, Radio, Carousel } from 'antd';

type DotPosition = CarouselProps['dotPosition'];

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const DetailPage = () => {
    return (
        <div>
            {/* banner */}
            <div className='banner'>
                <img src="https://picsum.photos/1440/600" alt="" className='w-full' />
            </div>
            {/* end banner */}

            {/* product */}
            <div className='max-w-7xl mx-auto mt-16'>
                <div className='grid grid-cols-2 gap-8 '>
                    <div>
                        {/* carousel */}
                        <Carousel dotPosition="left" infinite={true}>
                            <div>
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>2</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>3</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>4</h3>
                            </div>
                        </Carousel>
                    </div>

                </div>
            </div>
            {/* end  product */}


        </div>
    )
}

export default DetailPage