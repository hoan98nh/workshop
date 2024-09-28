import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdOutlineContacts, MdOutlineLocationOn } from 'react-icons/md'
import { LuShare2 } from 'react-icons/lu'
import { AiOutlineTikTok } from 'react-icons/ai'
import { IoIosSend } from 'react-icons/io'

const ContactPage = () => {
  return (
    <div>
      {/* banner */}
      <div className='banner'>
        <img src="https://picsum.photos/1440/600" alt="" className='w-full' />
      </div>
      {/* end banner */}

      <div className='max-w-7xl mx-auto my-16'>
        <div className='grid grid-cols-3 gap-8'>
          {/* item */}
          <div className='flex gap-6'>
            <div className="w-16 h-16 text-[#CA8A04] border-[2px] border-[#CA8A04] text-[40px] p-[10px] text-center">
              <MdOutlineLocationOn />
            </div>
            <div>
              <div className="h-16 uppercase font-bold text-[24px] content-center">address</div>
              <div className='text-[#71717A] text-[18px]'>
                60/850 Đường Láng, Láng Thượng, Đống Đa, Hà Nội
              </div>
            </div>
          </div>
          {/* item */}
          <div className='flex gap-6'>
            <div className="w-16 h-16 text-[#CA8A04] border-[2px] border-[#CA8A04] text-[40px] p-[10px] text-center">
              <MdOutlineContacts />
            </div>
            <div>
              <div className="h-16 uppercase font-bold text-[24px] content-center">contact details</div>
              <div className='text-[#71717A] text-[18px]'>
                6info@furniro.com
                <div className='text-[24px] font-bold'>
                  02056278686
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className='flex gap-6'>
            <div className="w-16 h-16 text-[#CA8A04] border-[2px] border-[#CA8A04] text-[40px] p-[10px] text-center">
              <LuShare2 />
            </div>
            <div>
              <div className="h-16 uppercase font-bold text-[24px] content-center">social networks</div>
              <div className='text-[#71717A] text-[40px] flex gap-5'>
                <Link to={''}>
                  <FaFacebookSquare />
                </Link>
                <Link to={''}>
                  <FaInstagram />
                </Link>
                <Link to={''}>
                  <AiOutlineTikTok />
                </Link>
                <Link to={''}>
                  <FaTwitterSquare />
                </Link>
                <Link to={''}>
                  <FaYoutubeSquare />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <div className='grid grid-cols-2 items-center bg-[#F1F1F1]'>
        {/* trai */}
        <div className='col-span-1 pr-[16px]'>
          <img src="https://picsum.photos/704/485" alt="" className='w-full' />
        </div>
        {/* phai */}
        <div className='col-span-1 ps-4'>
          <div className='max-w-2xl h-3 pe-12 h-fit'>
            <h2 className="font-semibold uppercase text-[20px] mb-4">contact</h2>
            <h1 className='font-bold uppercase text-[40px]'>connect with us now</h1>
            <form action="" className='w-full mt-8'>
              <div className='grid grid-cols-2 gap-8 mb-6'>
                <div>
                  <input type="text" placeholder='First Name' className='w-full pb-2 border border-transparent border-b-[#9CA3AF] bg-[#F1F1F1] focus-visible:outline-0 focus-visible:border-b-black' />
                </div>
                <div>
                  <input type="text" placeholder='Last Name' className='w-full pb-2 border border-transparent border-b-[#9CA3AF] bg-[#F1F1F1] focus-visible:outline-0 focus-visible:border-b-black' />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-8 mb-6'>
                <div>
                  <input type="text" placeholder='First Name' className='w-full pb-2 border border-transparent border-b-[#9CA3AF] bg-[#F1F1F1] focus-visible:outline-0 focus-visible:border-b-black' />
                </div>
                <div>
                  <input type="text" placeholder='Last Name' className='w-full pb-2 border border-transparent border-b-[#9CA3AF] bg-[#F1F1F1] focus-visible:outline-0 focus-visible:border-b-black' />
                </div>
              </div>
              <div>
                <input type="text" placeholder='Message' className='w-full pb-2 border border-transparent border-b-[#9CA3AF] bg-[#F1F1F1] focus-visible:outline-0 focus-visible:border-b-black' />
              </div>
              <button className='w-[200px] bg-[#CA8A04] flex gap-2 justify-center items-center text-white px-6 h-[43px] mt-8 '>
                <IoIosSend />Send Infomation
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactPage