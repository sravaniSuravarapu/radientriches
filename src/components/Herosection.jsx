import React from 'react'
import monitor from '../assests/download 1.png'
import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import herodata from './data/herodata';
import { FaCheckCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Whywedata from './data/Whywedata';

const Herosection = () => {
  return (
    <>
    {herodata.map((item,index)=>(
        <div className='py-9 px-5'>
        {item.id === 1 || item.id === 2 ? (
    <div key={item.id} className='flex text-white items-center gap-1 bg-[#FF7724] w-[136px] p-1 rounded-tr-lg rounded-br-lg'>
      <item.icon className='text-[20px]' />
      <p className='text-[16px]'>{item.title}</p>
    </div>
  ) : null}
        
        <div className='grid md:grid-cols-4 grid-cols-1'>

        <div className='p-[20px]'>
        <p className=' w-9 h-9 rounded-full flex items-center justify-center border'>{item.id}</p>
        <div className='flex flex-col items-center justify-center'>
            <img src={monitor} alt='monitor'></img>
            <p className='text-[13px] text-[#626E79]'>{item.monitorname}</p>
            </div>
        </div>

        <div className='col-span-2 text-[#4B5665] text-[16px] '>
            <p> <span className=' font-bold '>{item.spann} </span>{item.description}</p>
            {item.id === 4 ? (
                <p className='bg-[#F2F4F7] w-[70px] p-1'>26% off</p>
            ):null}
            <p className='font-bold py-1'>{item.subheading}</p>
            <p className='pl-5 text-start py-1'>{item.subdescription}</p>
            {item.id === 4 ? (
                <>
                <div className='bg-[#FFF4ED] p-1 text-[15px] text-[#4B5665] flex flex-col gap-1 '>
                   <div className='flex gap-1 items-center'>
                    <p className='bg-white rounded-lg w-[50px] h-[30px] flex items-center justify-center'>9.9</p>
                    <p>building responsive</p></div>
                    <div className='flex gap-1 items-center'>
                    <p className='bg-white rounded-lg w-[50px] h-[30px] flex items-center justify-center'>8.9</p>
                    <p>Cool</p></div>
                    <div className='flex gap-1 items-center'>
                    <p className='bg-white rounded-lg w-[50px] h-[30px] flex items-center justify-center'>8.9</p>
                    <p>Docs</p></div>
                </div>
                <div className='text-[16px] text-[#2C384A] py-4'>
                    <p>Why we love it</p>
                    {
                        Whywedata.map((value)=>(
                            <div className='flex items-center gap-1'>
                             <FaCheckCircle className=' text-[#EBF5FF] '/>
                             <p>{value.description}</p>
                           </div>
                        ))
                    }
                </div>
                </>
            ):null}
            <div className='flex items-center gap-1 text-[#1B88F4] '>
                <p>Show more</p>
                <MdKeyboardArrowDown className='text-[20px]'/>
            </div>
        </div>
        <div className=' flex flex-col items-center justify-between p-5 '>
            <div className=' bg-[#F3F9FF] w-[135px] h-[118px] rounded-bl-lg rounded-br-lg flex flex-col items-center justify-center'>
                <p>{item.rating}</p>
                <p>{item.review}</p>
                <div className='flex text-[#FFB80F] text-[11px]'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                {item.id === 4 ? (
                <FaRegStar/>):<FaStar/>}
                </div>
            </div>
            <p className='bg-[#1B88F4] rounded-lg w-full py-2 flex items-center justify-center'>View</p>
        </div>
        </div>
        </div>
    ))}
        
    </>
  )
}

export default Herosection