import { FaRoad } from 'react-icons/fa'
import { TbTargetArrow } from 'react-icons/tb'
import { BiBookHeart } from 'react-icons/bi'

const AboutPage = () => {
  return (
    <div>
      {/* banner */}
      <div className='banner'>
        <img src="https://picsum.photos/1440/600" alt="" className='w-full' />
      </div>
      {/* end banner */}

      <div className='max-w-7xl mx-auto my-16'>
        {/* 3 our */}
        <div className='grid grid-cols-3 gap-8 mb-16'>
          {/* item */}
          <div className='text-center flex flex-col items-center'>
            <TbTargetArrow className='mb-5 text-[100px] text-[#CA8A04]' />
            <h1 className='mb-3 uppercase text-[32px] font-bold'>OUR mission</h1>
            <div className='text-[18px] leading-7'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </div>
          </div>
          {/* item */}
          <div className='text-center flex flex-col items-center'>
            <FaRoad className='mb-5 text-[100px] text-[#CA8A04]' />
            <h1 className='mb-3 uppercase text-[32px] font-bold'>OUR vision</h1>
            <div className='text-[18px] leading-7'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </div>
          </div>
          {/* item */}
          <div className='text-center flex flex-col items-center'>
            <BiBookHeart className='mb-5 text-[100px] text-[#CA8A04]' />
            <h1 className='mb-3 uppercase text-[32px] font-bold'>OUR values</h1>
            <div className='text-[18px] leading-7'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </div>
          </div>
        </div>

        {/* infor */}
        <div className='grid grid-cols-2 gap-8 items-center mb-16'>
          <div>
            <img src="https://picsum.photos/624/408" alt="" />
          </div>
          <div>
            <h1 className="font-bold text-[32px] uppercase mb-8">about Furniro company</h1>
            <div className='text-[18px]'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>

        {/* quality */}
        <div>
          <div className='text-center'>
            <h1 className="text-[32px] font-bold">WE CREATE NATURAL WOOD FURNITURE
              <br />
              AS WELL AS HIGH-QUALITY</h1>
          </div>
          <div className='grid grid-cols-4 gap-8 mt-8'>
            {/* item */}
            <div className="relative">
              <img src="https://picsum.photos/296/396" alt="" />
              <div className="absolute font-semibold text-white uppercase bottom-5 left-5">
                flooring
              </div>
            </div>
            {/* item */}
            <div className="relative">
              <img src="https://picsum.photos/296/396" alt="" />
              <div className="absolute font-semibold text-white uppercase bottom-5 left-5">
                refinishing
              </div>
            </div>
            {/* item */}
            <div className="relative">
              <img src="https://picsum.photos/296/396" alt="" />
              <div className="absolute font-semibold text-white uppercase bottom-5 left-5">
                installation
              </div>
            </div>
            {/* item */}
            <div className="relative">
              <img src="https://picsum.photos/296/396" alt="" />
              <div className="absolute font-semibold text-white uppercase bottom-5 left-5">
                warming the floor
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default AboutPage