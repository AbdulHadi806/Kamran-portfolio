import React, { useEffect, useRef } from 'react';
import GlobalHeading from './resuable-components/global-heading';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Testimonials({ data }) {
  const headingRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: 'top 70%',
        onEnter: () => {
          gsap.fromTo(
            headingRef.current,
            {
              opacity: 0,
              y: 50,
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
              stagger: 0.5,
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
    <div className='bg-[#fff5f6] pb-[40px] pt-[80px]'>
      <div className='mx-auto lg:container px-[20px] md:px-[15px] xl:px-[128px] 2xl:px-[240px]'>
        <div ref={headingRef} className='flex text-start md:items-center text-center flex-col'>
          <span className='font-bold uppercase tracking-widest text-gray-600'>Testimonials</span>
          <GlobalHeading title={data.testimonials.testimonail} />
        </div>
        <div
          ref={testimonialsRef}
          className='flex mt-[90px] flex-wrap justify-center md:flex-nowrap gap-5 text-center'
        >
          {data.testimonials.clientTestimonials.map((item, index) => (
            <div
              key={index * 20.1201}
              className='testimonial-card bg-white rounded-[3px] relative mt-7 md:mt-[0] shadow-lg shadow-[#000]-500/50 pt-[40px] md:pt-[60px] pb-[30px] px-[15px] justify-between items-center flex flex-col min-h-[221px] md:min-h-[286px] md:max-w-[400px] w-[100%]'
            >
              <div className='w-[80px] absolute top-[-40px] rounded-full'>
                <Image width={100} height={100} className='rounded-full' src={item.img} alt="Upwork" />
              </div>
              <div className='flex'>
                <div>
                  <Image width={50} className='mx-auto' height={50} src="/images/testimonial.png" alt="testimonial" />
                </div>
                <p className='text-[#686a8f] text-base'>
                  {item.review}
                </p>
              </div>
              <div>
                <span className='text-[#686a8f]'>{item.client}</span>
                <div>
                  <Image width={100} height={100} className='mx-auto' src="/images/upwork.svg" alt="upwork" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div ref={headingRef} className='text-center mt-[50px]'>
          <a href="https://www.upwork.com/freelancers/~01de2ada001f8d010c" rel="noreferrer" target="_blank" className='text-[#130f49] text-[20px] hover:text-[#232b30]'>{data.testimonials.moreTestimonials} Visit my Upwork Profile.</a>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
