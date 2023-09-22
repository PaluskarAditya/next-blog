import React from 'react'
import Blog from '../components/Blog'

export default function page() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center p-6'>
      <Blog url={'/blogs/blog1'} img={'https://www.philips.com/c-dam/corporate/newscenter/global/standard/resources/healthcare/2022/ai-in-healthcare-realwordl-examples/header-ai-in-healthcare-realworld-examples.jpg'} text={'The Future of AI in Healthcare'} id={1} />
      <Blog url={'/blogs/blog2'} img={'https://images.idgesg.net/images/article/2017/09/thinkstockphotos-639780580-100735148-large.jpg?auto=webp&quality=85,70'} text={'5G Technology and Its Impact on Everyday Life'} id={1} />
      <Blog url={'/blogs/blog3'} img={'https://www.bft-international.com/imgs/1/7/0/5/6/6/3/06c7a395b458c847.jpeg'} text={'The Rise of Electric Vehicles'} id={1} />
      <Blog url={'/blogs/blog4'} img={'https://www.zdnet.com/a/img/resize/f1da0eeca7f0d850f530b62d40a898c1c2241165/2020/08/18/ad32b2fd-21d2-4a6e-b5ff-0fe6f6ef74fc/cyber-security-101-protect-your-privacy-5f3a80d871c30002b05cd6e6-1-aug-18-2020-19-07-00-poster.jpg?auto=webp&fit=crop&frame=1&height=814.5&width=1449'} text={'Cybersecurity in the Age of Remote Work'} id={1} />
      <Blog url={'/blogs/blog5'} img={'https://scitechdaily.com/images/Abstract-Quantum-Computing-Noise-Art-Concept.jpg'} text={'Quantum Computing: Unlocking the Unthinkable'} id={1} />
      <Blog url={'/blogs/blog6'} img={'https://cielowigle.com/wp-content/uploads/2021/03/woman-controlling-smart-home-appliances.jpg'} text={'The Smart Home Revolution'} id={1} />
      <Blog url={'/blogs/blog7'} img={'https://codevexia.ae/wp-content/uploads/distributed-ledger-system.jpg'} text={'The Impact of Blockchain Beyond Cryptocurrency'} id={1} />
      <Blog url={'/blogs/blog8'} img={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/ManusVR_Glove_2016.png/1200px-ManusVR_Glove_2016.png'} text={'Artificial Reality: The Convergence of AR and VR'} id={1} />
      <Blog url={'/blogs/blog9'} img={'https://i0.wp.com/solarquarter.com/wp-content/uploads/2021/10/csm_BayWa_r.e_Vietnam_market_1920_x_1080_80fb368db9.jpg?fit=1000%2C565&ssl=1'} text={'Sustainable Tech Innovations: Greening the Tech Industry'} id={1} />
    </div>
  )
}
