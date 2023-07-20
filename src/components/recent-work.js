import React, { useEffect, useRef } from 'react';
import GlobalHeading from './resuable-components/global-heading';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

function RecentWork({ data }) {
  const backgroundRef = useRef(null);
  const mainRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      backgroundRef.current,
      {
        opacity: 0,
        x: 150,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: backgroundRef.current,
          start: 'top 70%',
          once: true,
        },
      }
    );

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
        delay: .4,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 50%',
          once: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={backgroundRef}
        className="before:absolute z-0 before:rounded-tl-[50px] mx-auto lg:container px-[20px] md:px-[15px] xl:px-[128px] 2xl:px-[240px] before:bg-[#fff5f6] before:top-0 before:right-0 before:w-[74%] before:h-[282px]"
      >
        <div ref={testimonialsRef} className="z-10 relative pt-[77px]">
          <div className="testimonial-card">
            <span className="font-bold uppercase tracking-widest text-gray-600">PORTFOLIO</span>
            <GlobalHeading title={"Recent Work"} />
          </div>
          <div className="grid testimonial-card grid-cols-2 md:grid-cols-4 pt-[70px] gap-3">
            {data.portfolio.map((item) => {
              return (
                <div className="relative" key={item.id}>
                  <a href={item.link} target="_blank">
                    <img alt="Every Square Inch web design" className="rounded-3xl w-[100%]" src={item.image} />
                    <div className="absolute inset-0 flex justify-center items-center overflow-hidden rounded-3xl opacity-0 hover:opacity-90 hover:bg-[#000] duration-500 group">
                      <div className="absolute inset-0 bg-grey-700 opacity-80"></div>
                      <div className="z-10 flex flex-col justify-center items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                        <Image width = {30} height = {30} alt="open car sales website" className="w-5 mb-1" src="https://d33wubrfki0l68.cloudfront.net/621fc099b299fce91c2b699d7f08a6e620e38917/d6b3b/assets/site/open.svg"  />
                        <p className="text-white">{item.status}</p>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentWork;
