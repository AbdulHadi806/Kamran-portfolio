import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function MessageDirectly() {
    const testimonialsRef = useRef(null);
  
    useEffect(() => {
      let ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: testimonialsRef.current,
          start: 'top 50%',
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
        <div ref={testimonialsRef} className='bg-white mx-auto pb-[40px] lg:container px-[20px] md:px-[15px] xl:px-[128px] 2xl:px-[240px]'>
            <Link href="mailto:kamranarshad.spyko@gmail.com" onClick={() =>  {navigator.clipboard.writeText('kamranarshad.spyko@gmail.com'); alert('Email Copyied to Clipboard');}} className='shadow-lg testimonial-card bg-[#e9f9ff] block rounded-[20px] shadow-[2px 2px 18px 0px rgba(0,0,0,0.49)]-500/50 py-[70px] px-[30px] text-center'>
                <h3 className='text-[#130f49] text-[22px] font-bold'> Contact me VIA Email </h3>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} className='text-[#130f49]'/> <span className='text-[#130f49]'>kamranarshad.spyko@gmail.com</span>
                </div>
            </Link>
        </div>
    )
}

export default MessageDirectly
