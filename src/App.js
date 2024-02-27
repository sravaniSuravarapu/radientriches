import React from 'react'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import Herosection from './components/Herosection'
import Cardsection from './components/Cardsection'
import Signup from './components/Signup'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <>
      <Navbar/>
      <div className='max-w-5xl mx-auto'>
      <Heading/>
      <Herosection/>
      <Cardsection/>
      <Signup/>
      </div>
      <Footer/>
    </>
  )
}

export default App