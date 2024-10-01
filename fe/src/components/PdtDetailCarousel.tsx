import Carousel, { CarouselRef } from 'antd/es/carousel';
import React, { useRef } from 'react'


const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

// https://picsum.photos/77/77
const PdtDetailCarousel = () => {
    const carouselRef = useRef<CarouselRef>(null);

    const goToSlide = (index: number) => {
        carouselRef.current?.goTo(index, false);
    };

    // const ImgCarouselBtn = (index: number, urlImg: string) => (
    //     <button onClick={() => goToSlide(index)}>
    //         <img src={urlImg} alt="" />
    //     </button>
    // )

    return (
        <div className='grid grid-cols-6 gap-8'>
            <div className='flex flex-col gap-4 col-span-1'>
                {/* <ImgCarouselBtn index ={1} urlImg = "aaaa"/> */}
                <button onClick={() => goToSlide(0)}>
                    <img src="https://picsum.photos/id/0/77/77" alt="" />
                </button>
                <button onClick={() => goToSlide(1)}>
                    <img src="https://picsum.photos/id/1/77/77" alt="" />
                </button>
                <button onClick={() => goToSlide(2)}>
                    <img src="https://picsum.photos/id/2/77/77" alt="" />
                </button>
                <button onClick={() => goToSlide(3)}>
                    <img src="https://picsum.photos/id/3/77/77" alt="" />
                </button>
                <button onClick={() => goToSlide(4)}>
                    <img src="https://picsum.photos/id/4/77/77" alt="" />
                </button>
            </div>
            {/* carousel */}
            <div className='col-span-5 w-full'>
                <Carousel dots={false} infinite={true} ref={carouselRef}>
                    <div>
                        <img src="https://picsum.photos/id/0/515/515" alt="" className='w-full'/>
                    </div>
                    <div>
                        <img src="https://picsum.photos/id/1/515/515" alt="" className='w-full'/>
                    </div>
                    <div>
                        <img src="https://picsum.photos/id/2/515/515" alt="" className='w-full'/>
                    </div>
                    <div>
                        <img src="https://picsum.photos/id/3/515/515" alt="" className='w-full'/>
                    </div>
                    <div>
                        <img src="https://picsum.photos/id/4/515/515" alt="" className='w-full'/>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default PdtDetailCarousel