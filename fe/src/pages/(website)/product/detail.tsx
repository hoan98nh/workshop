import { IoStar } from 'react-icons/io5';
import PdtDetailCarousel from '../../../components/PdtDetailCarousel';
import PdtDetailTabs from '../../../components/PdtDetailTabs';
import ProductItem from '../../../components/ProductItem';
import Counter from '../../../components/Counter';
import ColorSelect from '../../../components/ColorSelect';



const DetailPage = () => {
    return (
        <div className='mb-16'>
            {/* banner */}
            <div className='banner'>
                <img src="https://picsum.photos/1440/600" alt="" className='w-full' />
            </div>
            {/* end banner */}

            {/* product */}
            <div className='max-w-7xl mx-auto mt-16'>
                <div className='grid grid-cols-2 gap-8 '>
                    <PdtDetailCarousel />
                    <div className='pe-[18px]'>
                        {/* pdt name */}
                        <div className='text-[20px] text-[#262626] font-medium mb-2'>Asgaard sofa</div>
                        {/* price */}
                        <div className='text-[#EF4444] font-bold text-[40px] mb-2'>25.000.000đ</div>
                        {/* star */}
                        <div className='grid grid-cols-2 items-center divide-x border-[#A3A3A3] max-w-[284px] h-[30px] mb-4'>
                            <div className='col-span-1 flex gap-1'>
                                <IoStar className='text-[#FFC700] text-[20px]' />
                                <IoStar className='text-[#FFC700] text-[20px]' />
                                <IoStar className='text-[#FFC700] text-[20px]' />
                                <IoStar className='text-[#FFC700] text-[20px]' />
                                <IoStar className='text-[#FFC700] text-[20px]' />
                            </div>
                            <div className='col-span-1 text-right w-full text-[14px] text-[#9F9F9F] font-medium'>
                                5 Customer Review
                            </div>
                        </div>
                        {/* text */}
                        <div className='mb-4'>
                            <p className='text-[#262626]'>
                                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                            </p>
                        </div>
                        {/* size */}
                        <div className='mb-4 text-[#A3A3A3]'>
                            Size
                            <div className='flex gap-4 mt-1'>
                                <button className='w-[30px] h-[30px] bg-[#CA8A04] rounded-[5px] text-white text-[13px]'>L</button>
                                <button className='w-[30px] h-[30px] bg-[#A3A3A3] rounded-[5px] text-white text-[13px]'>XL</button>
                                <button className='w-[30px] h-[30px] bg-[#A3A3A3] rounded-[5px] text-white text-[13px]'>XS</button>
                            </div>
                        </div>
                        {/* color */}
                        <div className='mb-8 text-[#A3A3A3]'>
                            Color
                            <div className='flex gap-4 mt-1'>
                                <ColorSelect />
                                {/* <button className='w-[30px] h-[30px] bg-[#816DFA] rounded-[50%]' /> */}
                                <button className='w-[30px] h-[30px] bg-[#000000] rounded-[50%]' />
                                <button className='w-[30px] h-[30px] bg-[#B88E2F] rounded-[50%]' />
                            </div>
                        </div>
                        {/* btn */}
                        <div className='flex gap-3 mb-8'>
                            <Counter />
                            <button className='w-full py-2 border border-[#CA8A04] rounded-[5px] text-[#CA8A04] font-semibold'>Add to cart</button>
                            <button className='w-full py-2 border border-[#262626] rounded-[5px] text-[#262626] font-semibold'>+ Compare</button>
                        </div>
                        {/* line */}
                        <hr className='border-[#A3A3A3] mb-3' />
                        {/* text */}
                        <div className='mb-3 text-[#A3A3A3]'>
                            SKU : SS001
                        </div>
                        <div className='mb-3 text-[#A3A3A3]'>
                            Category: Sofa
                        </div>
                        <div className='mb-3 text-[#A3A3A3]'>
                            Tags: Sofa, Chair, Home, Shop
                        </div>
                    </div>
                </div>
                {/* infor */}
                <div className='mb-16'>
                    <PdtDetailTabs />
                </div>
                <div>
                    <div className='mb-4 text-[#262626] text-[40px] text-center font-semibold'>Related Products</div>
                    <div className='grid grid-cols-4 gap-8'>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>
                </div>
            </div>
            {/* end  product */}


        </div>
    )
}

export default DetailPage