import React from 'react'


const Item = ({ title, Links }) => {
  return (
    <ul className='flex flex-col  '>
    <h1 className="mb-1 font-semibold">{title}</h1>
    {Links.map((link) => (
      <li key={link.name}>
        <a
          className="text-white duration-300 
        cursor-pointer leading-6 text-[13px]"
          href={link.link}
        >
          {link.name}
        </a>
      </li>
    ))}
  </ul>
  )
}

export default Item