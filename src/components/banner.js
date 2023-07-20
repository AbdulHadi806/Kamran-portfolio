import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import GobalButtons from './resuable-components/gobal-buttons';
import Image from 'next/image';
import { gsap } from 'gsap';

function Banner({ data }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Animation code using GSAP
    const movingText = document.querySelector('.moving-text');
    const bannerImage = document.querySelectorAll('.banner-image');
    const bannerImageFade = document.querySelectorAll(".banner-fade-img")
    let mm = gsap.matchMedia();
    mm.add("(min-width: 800px)", () => {
      gsap.fromTo(
        movingText,
        {
          y: 150, // Start position (move from the bottom)
          opacity: 0, // Start with 0 opacity
        },
        {
          y: 0, // End position (original position)
          opacity: 1, 
          duration: 1, 
          ease: 'power3.out', 
          delay: 0.5, 
        }
      );
      gsap.fromTo(
        bannerImage,
        {
          x: 150, // Start position (move from the right)
          opacity: 0, // Start with 0 opacity
        },
        {
          x: 0, // End position (original position)
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: 'power3.out', 
          delay: .6, 
        }
      );
      gsap.fromTo(
        bannerImageFade,
        {
          opacity: 0, 
        },
        {
          opacity: 1, 
          duration: 1, 
          ease: 'power3.out', 
          delay: .8, 
        }
      );
    })
    
  }, []);

  return (
    <div className='py-[40px] lg:container px-[20px] md:px-[15px] xl:px-[128px] 2xl:px-[240px] mx-auto flex flex-col-reverse md:flex-row justify-between md:py-[50px]'>
      <div className='md:max-w-[410px] moving-text pt-[20px] md:pt-[30px]'>
        <span className='text-[#999999] font-semibold text-base flex items-center gap-1 moving-text'>
          <FontAwesomeIcon icon={faCrosshairs} className='text-[red] pr-[5px] font-normal' />
          I am a <TextTransition springConfig={presets.wobbly}> {data.banner.textTransition[index % data.banner.textTransition.length]} </TextTransition>
        </span>
        <h1 className='text-[#130f49] font-black text-[33px] lg:text-[48px] leading-tight tracking-tighter'>
          {data.banner.span} <span className='text-[#34a1cd] font-black'>{data.banner.title}</span>{data.banner.SecTitle}<span className='text-[#34a1cd] font-black'>{data.banner.SecSpan}</span>
        </h1>
        <span className='text-[#999999] moving-text font-semibold text-base pt-5 block'>{data.banner.description}</span>
        <div className='flex flex-wrap gap-3 mt-6'>
          <GobalButtons specialClass={'flex'} text={data.banner.buttonFirst} bg={`#130f49`}/>
          <GobalButtons specialClass={'flex'} text={data.banner.buttonSec} bg={`#34a1cd`} />
        </div>
      </div>
      <div>
        <div className='w-[90%] h-[208px] banner-image mx-auto max-w-[208px] md:max-w-[747px] md:h-[500px] md:ms-auto bg-[#d9f4ff] lg:rounded-tr-none overflow-hidden rounded-full'>
          <Image width={747} height={613} className='h-[100%] banner-fade-img w-[100%] inset-0 object-cover banner-right-section' src={data.banner.bannerRightImg} alt='Kamran Arshad' />
        </div>
      </div>
    </div>
  );
}

export default Banner;
