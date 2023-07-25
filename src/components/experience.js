import React, { useEffect, useRef } from 'react';
import GlobalHeading from './resuable-components/global-heading';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Experience({ data }) {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {

      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: 'top 40%',
        onEnter: () => {
          gsap.fromTo(
            cardsRef.current.querySelectorAll('.testimonial-card'),
            {
              opacity: 0,
              x: 150,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
              ease: 'power3.out',
              stagger: 0.3,
              delay: 0.2,
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
    <div className="relative overflow-hidden">
      <div className="my-10 mx-auto lg:container px-[20px] md:px-[15px] xl:px-[128px] 2xl:px-[240px]">
        <div className="relative z-10 gap-[30px] lg:flex justify-between pt-[77px]">
          <div ref={containerRef} className="w-[100%] max-w-[254px]">
            <span className="font-bold uppercase tracking-widest text-gray-600">Worked With</span>
            <GlobalHeading title={data.experienceTitle} />
          </div>
          <div ref={cardsRef} className="flex flex-col gap-5 items-center">
            {data.experience.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[3px] testimonial-card flex-col sm:flex-row min-h-[158px] p-7 shadow-lg shadow-[#000]-500/50 flex gap-3 w-[100%]"
              >
                <div className="flex gap-4 items-start">
                  <Image className="object-contain w-100" width={100} height={100} src={item.logo} alt={item.post} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{item.post}</h3>
                  <span>{item.location}</span>
                  <span className="block text-[#686a8f] text-base">Working Time: {item.time}</span>
                  <p className="text-[#686a8f] text-base">
                    <span className="font-semibold pr-[10px]">About {item.company}:</span>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
