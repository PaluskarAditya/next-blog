"use client"

import React, { useEffect } from 'react'
import Blog from './components/Blog'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className='flex flex-col gap-5 justify-center items-center p-6'>
      <h1 className="text-5xl mb-5 font-bold" data-aos="fade-right">Checkout these top blogs</h1>
      <Blog data-aos="fade-up" data-aos-delay="150" url={'/blogs/blog1'} img={'https://www.philips.com/c-dam/corporate/newscenter/global/standard/resources/healthcare/2022/ai-in-healthcare-realwordl-examples/header-ai-in-healthcare-realworld-examples.jpg'} id={1} text={'The Future of AI in Healthcare '}/>

      <Blog url={'/blogs/blog2'} img={'https://images.idgesg.net/images/article/2017/09/thinkstockphotos-639780580-100735148-large.jpg?auto=webp&quality=85,70'} text={"5G Technology and Its Impact on Everyday Life "} id={1} />

      <Blog url={'/blogs/blog3'} img={'https://www.bft-international.com/imgs/1/7/0/5/6/6/3/06c7a395b458c847.jpeg'} text={'The Rise of Electric Vehicles'} id={1} />
    </div>
  )
}