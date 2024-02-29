import React from 'react'
import Carddata from './data/Carddata'

const Cardsection = () => {
  return (
    <>
        <div className='text-[#626E79] p-5'>
            <p className='text-[32px]'>Related deals you might like for</p>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            <Carddata/>
            <Carddata/>
            <Carddata/>
                
            </div>
        </div>
    </>
  )
}

export default Cardsection