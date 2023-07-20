import React, { useEffect, useRef } from 'react'
import GlobalHeading from './resuable-components/global-heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function Packages({ data }) {
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
        <div className='mx-auto pt-[60px] pb-[40px] lg:container px-[20px] md:px-[15px] xl:px-[128px] 2xl:px-[240px]'>
            <div className='text-start md:text-center'>
                <span class="font-bold uppercase tracking-widest text-gray-600">Ready-made Blueprints</span>
                <GlobalHeading title={data.pricing.priceTitle} />
            </div>
            <div ref={testimonialsRef} className='flex [&>*:nth-child(2)]:shadow-lg shadow-[#fff]-500/50 flex-wrap mt-[40px] justify-center xl:flex-nowrap  gap-3'>
                {
                    data.pricing.priceCards.map(item => {
                        return (
                            <div className='bg-white testimonial-card flex flex-col rounded-[3px] border-[1px] border-solid border-[rgba(25, 35, 15, 0.1)] items-between relative shadow-lg shadow-[#000]-500/50  py-[30px] px-[15px] min-h-[286px] max-w-[400px] w-[100%]'>
                                <div>
                                    <h4 className='text-center mb-[10px] text-[#130f49] text-[24px] font-bold'>{item.title}</h4>
                                    <ul>
                                        {
                                            item.including.map(item => {
                                                return <li className='flex gap-[10px] items-center'>
                                                    <FontAwesomeIcon icon={faCheck} className='text-[#00ff48]' />{item}
                                                </li>
                                            })
                                        }
                                        {
                                            item.notIncluding.length > 0 ? item.notIncluding.map(item => {
                                                return <li className='flex gap-[10px] items-center'>
                                                    <FontAwesomeIcon icon={faXmark} className='text-[#f00]' />{item}
                                                </li>
                                            })
                                                : ""}
                                    </ul>
                                </div>
                                <button className='italic mt-[20px] text-[22px] hover:bg-[#b30303] font-semibold h-[58px] bg-[#eb0000] text-white'>Hourly: <span className='not-italic font-black'>{item.price}</span></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Packages
