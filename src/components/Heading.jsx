import React from 'react'
import circleright from '../assests/IMAGE (1).png'
import circlei from '../assests/IMAGE (2).png'
import chevron from '../assests/IMAGE (3).png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Heading = () => {
  return (
    <>
        <div className='max-w-5xl mx-auto py-5 md:px-0 px-5'>
         <p className='text-[48px] text-[#2C384A]'>Best Website builders in the US</p>
         <hr></hr>
         <div className='flex  items-center justify-between text-[#4B5665] text-[14px] py-3'>
         <div className='flex md:flex-row flex-col gap-3 '>
            <div className='flex '>
                <img src={circleright} alt='cicleicon ' className='px-1 w-[30px]'></img>
                <p>Last Updated - February 22, 2020</p>
            </div>
            <div className='flex '>
                <img src={circlei} alt='cicleicon' className='px-1 w-[30px]'></img>
                <p>Advertising Disclosure</p>
                
            </div></div>
            <div className='flex '>
                
                <p>Top Relevant</p>
                <img src={chevron} alt='cicleicon ' className='px-1 w-[30px]'></img>
            </div>
            
         </div>
         <hr></hr>
         <div className=' text-[#4B5665] text-[14px] grid md:grid-cols-6 grid-cols-3  py-3'>
            <p className='py-1'>Tools</p>
            <p className='py-1'>AWS Builder</p>
            <p className='py-1'>Start Build</p>
            <p className='py-1'>Build Supplies</p>
            <p className='py-1'>Tooling</p>
            <p className='py-1'>BlueHosting</p>
         </div>
         <div className='flex text-[#4B5665] text-[14px] gap-4 py-3'>
         <div>
                <p>Home</p>
            </div>
            <div className='flex items-center '>
                <MdOutlineKeyboardArrowRight />
                <p> Hosting for all</p>
               
            </div>
            <div className='flex items-center'>
                <MdOutlineKeyboardArrowRight/>
                <p>Hosting</p>
                
            </div>
            <div className='flex items-center'>
                <MdOutlineKeyboardArrowRight/>
                <p>Hosting6</p>
                
            </div>
            <div className='flex items-center'>
                <MdOutlineKeyboardArrowRight/>
                <p>Hosting5</p>
                
            </div>

         </div>
         
        </div>
    </>
  )
}

export default Heading