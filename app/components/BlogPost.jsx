import React from 'react'

export default function BlogPost({ img, img2, text, p1, p2, p3, p4 }) {
  return (
    <div className='flex flex-col justufy-center items-center p-6'>
      <h1 data-aos="fade-right" className='text-2xl font-bold my-10'>{text}</h1>
      <img data-aos="fade-right" data-aos-delay="150" src={img} className='rounded-md mb-10' loading='lazy' />
      <p className='my-3 text-sm'><span className='text-3xl mr-1 font-bold'>{p1.slice(0, 1)}</span>{p1.slice(1)}</p>
      <p className='my-3 text-sm'>{p2}</p>
      <img data-aos="fade-right" data-aos-delay="250" src={img2} className='rounded-md mb-10' loading='lazy' />
      <p className='my-3 text-sm'>{p3}</p>
      <p className='my-3 text-sm'>{p4}</p>
    </div>
  )
}
