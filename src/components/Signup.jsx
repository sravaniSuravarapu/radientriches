import React from 'react'

const Signup = () => {
  return (
    <>
        <div className='text-[#5C6874] text-[32px] grid md:grid-cols-2 grid-cols-1 px-16 py-16'>
            <div><p>Sign up and get exclusive special deals</p></div>
            <div className="  bg-white   text-[14px] flex items-center ">
            <input
             type="text"
            className="pl-10 rounded-md focus:outline-none focus:none  px-3"
             placeholder="signin"
             />
             <div className='bg-[#1B88F4] rounded-tr-lg rounded-br-lg text-white w-[100px] h-[50px] flex items-center justify-center'>signin</div>
    
            </div>
        </div>
    </>
  )
}

export default Signup