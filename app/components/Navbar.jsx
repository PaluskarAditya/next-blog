import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav data-aos="fade-down" className='flex justify-between items-center fixed top-0 left-0 right-0 text-white p-3 px-6'>
      <ul>
        <li>
          <Link href={'/'} className='text-2xl font-bold'>Tech Blog Daily</Link>
        </li>
      </ul>
      <ul className='flex justify-between items-center'>
        <li className='pl-4'>
          <Link href={'/blogs'} className='text-sm'>blogs</Link>
        </li>
        <li className='pl-4'>
          <Link href={'/about'} className='text-sm'>about</Link>
        </li>
      </ul>
    </nav>
  )
}
