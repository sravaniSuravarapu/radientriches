import React from 'react'
import monitor from '../../assests/download 1.png'

const Carddata = () => {
  return (
    <>
        <div className='px-6 flex flex-col gap-1   '>
                    <img src={monitor} alt='monitor' className='mx-auto py-5'></img>
                    <div className='flex gap-1'>
                    <p className='bg-[#F2F4F7] w-[70px] p-1 rounded-lg'>26% off</p>
                    <p className='bg-[#F2F4F7] w-[100px] p-1 rounded-lg'> Limited time</p>
                    </div>
                    <p className='font-bold flex justify-center'>Webbuilder 1</p>
                    <p>Computer  Modern clasic with wix support</p>
                    <div className='flex gap-2 items-center '>
                    <p className='text-[20px] text-[#5C6874]'>$39.96</p>
                    <p className='text-[14px] text-[#9FA9B3]'>$49.96</p>
                    <p className='text-[13px] text-[#EF4C5D]'>(20% Off)</p>
                    </div>
                    <p className='bg-[#1B88F4] rounded-lg w-full py-2 flex items-center justify-center text-white'>View Deal</p>
                </div>
    </>
  )
}

export default Carddata