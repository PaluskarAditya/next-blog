import BlogPost from '@/app/components/BlogPost'
import React from 'react'

export default function page({ img, img2, p1, p2, p3, p4, text }) {
  return (
    <BlogPost p1={'Artificial Reality (AR) and Virtual Reality (VR) are converging to create a new realm of immersive experiences known as extended reality (XR). XR technologies have evolved significantly and are reshaping how we interact with the digital and physical worlds.'} p2={"Augmented Reality (AR) overlays digital information onto the real world. AR applications are found in various fields, including gaming, education, healthcare, and retail. For instance, in education, AR can bring textbooks to life by providing interactive 3D models or historical reenactments when students point their smartphones or AR glasses at specific pages. In retail, AR allows customers to visualize products in their own space before making a purchase decision, enhancing the online shopping experience."} p3={"Virtual Reality (VR), on the other hand, immerses users in entirely virtual environments. VR has made significant strides in gaming and entertainment, offering immersive experiences that were previously unimaginable. Moreover, VR is finding applications in healthcare, where it's used for pain management, exposure therapy for phobias, and even surgical training."} p4={"However, the adoption of AR and VR faces challenges, including the cost of hardware, concerns about privacy and data security, and the need for compelling content to drive user engagement. As technology continues to advance and become more affordable, we can expect to see greater integration of AR and VR into our daily lives, blurring the lines between the digital and physical worlds."} img={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/ManusVR_Glove_2016.png/1200px-ManusVR_Glove_2016.png'} img2={'https://i.guim.co.uk/img/media/d31eb6627b43f6b53e61c3576e4b2b6fb9716aae/0_280_3824_2295/master/3824.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=727fb136c64bdfbd6e3aeb86481659ee'} text={' Artificial Reality: The Convergence of AR and VR'}/>
  )
}