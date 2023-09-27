import Link from 'next/link'
import React from 'react'

export default function Blog({ img, text, url }) {
  return (
    <Link href={url} as={url} className='flex flex-col w-full rounded-md h-96 border border-gray-600 cursor-pointer'>
      <img src={img} className='rounded-t-md object-center object-cover flex-1 h-3/4' loading='lazy'/>
      <div className='p-3 flex justify-center items-center flex-1'>
        <p className='text-sm'>{text.slice(0, 300)}...</p>
      </div>
    </Link>
  )
}
