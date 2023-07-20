import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function Upwork({data}) {
    const testimonialsRef = useRef(null);
  
    useEffect(() => {
      let ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: testimonialsRef.current,
          start: 'top 60%',
          onEnter: () => {
            gsap.fromTo(
              testimonialsRef.current.querySelectorAll('.testimonial-card'),
              {
                opacity: 0,
                y: 90,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
              }
            );
          },
          once: true,
        });
      });
  
      return () => {
        ctx.kill();
      };
    }, []);
  return (
    <div ref={testimonialsRef} className='bg-white mx-auto pt-[60px] pb-[40px] lg:container px-[20px] md:px-[15px] xl:px-[128px] 2xl:px-[240px]'>
        <Link href="https://www.upwork.com/freelancers/~01de2ada001f8d010c"  target="_blank" rel="noreferrer" className='shadow-lg testimonial-card bg-[#e9f9ff] block rounded-[20px] shadow-[2px 2px 18px 0px rgba(0,0,0,0.49)]-500/50 py-[70px] px-[30px] text-center'>
        <h3 className='text-[#130f49] text-[22px] font-bold'>{data.discounts} <span className='italic text-[24px]'>Upwork</span>{data.discountSec} </h3>
         <Image width={150} height={150} className='text-center mx-auto' alt="Upwork" src="/images/upwork.svg"/>
      </Link>
    </div>
  )
}

export default Upwork
