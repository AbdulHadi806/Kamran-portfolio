import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import GlobalHeading from './resuable-components/global-heading';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
function Blogs({ data }) {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: testimonialsRef.current,
        start: 'top 40%',
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
              duration: 1,
              ease: 'power3.out',
              delay: 0.3
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

    <div ref={testimonialsRef} className='py-[40px] lg:container px-[20px] md:px-[15px] xl:px-[128px] 2xl:px-[240px] mx-auto md:py-[50px]'>
      <div className='flex text-start testimonial-card md:items-center text-center flex-col'>
        <span className='font-bold uppercase tracking-widest text-gray-600'>
          LATEST
        </span>
        <GlobalHeading title={data.blogs.blogTitle} />
      </div>
      <div className='mt-[50px] flex testimonial-card gap-8'>
        {data.blogs.blogs.map((item) => {
          return (
            <Link key={item.id} href='/[postId]' as={`/${item.id}`}>
              <div className='block max-w-[229px] min-h-[230px] rounded-lg shadow-lg shadow-[#000]-500/50 bg-white'>
                <div style={{ background: item.bg }} className='rounded-t-lg h-[173px]'>
                  <img
                    src={item.img}
                    className='object-contain w-[100%] h-[100%]'
                    alt='How to Hire a developer'
                  />
                </div>
                <div className='p-4'>
                  <h1 className='font-semibold text-[16px] leading-[20px] text-[#130f49] mb-2'>
                    {item.secondaryTitle} <span className='text-[#34a1cd]'>{item.title}</span>
                  </h1>
                  <p className='text-[13px] text-gray-500'>{item.date}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
