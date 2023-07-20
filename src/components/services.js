import React, { useEffect, useRef } from 'react';
import GlobalHeading from './resuable-components/global-heading';
import { faAngleRight, faAnglesUp, faClone, faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Services({ data }) {
  const cardsRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Function to animate each card element
    const animateCard = (card) => {
      gsap.fromTo(
        card,
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
    };

    // Animating the heading using ScrollTrigger
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
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 70%',
          once: true,
        },
      }
    );

    // Applying animations to each card using ScrollTrigger
    ScrollTrigger.create({
      trigger: cardsRef.current,
      start: 'top 60%',
      onEnter: () => {
        gsap.fromTo(
          cardsRef.current.querySelectorAll('.testimonial-card'),
          {
            opacity: 0,
            y: 90,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.3,
          }
        );
      },
      once: true,
    });
  }, []);
  const content = [
    {
      title: 'Web Design & Development',
      description: 'I build high-performing, beautiful websites that are conversion-focused, brand-accurate, and user-friendly.',
      span: "I don't just design websites.",
      color: '#64d2ff',
      bgColor: '#d9f4ff',
      showDiv: 'sm:shadow-lg',
      icon: faAngleRight,
    },
    {
      title: 'SEO',
      description: "A high converting website won't be effective if no one visits it. Ranking on Google is essential to getting new clients in the door.",
      span: 'A greater audience.',
      color: '#ffc261',
      bgColor: '#fff4e4',
      showDiv: '',
      icon: faAnglesUp,
    },
    {
      title: 'Banner | Posts | thumbnails design',
      description: 'In addition to web development, I can produce branding and marketing resources for both print and digital applications such as banners, posts, thumbails, and much more.',
      span: 'Catch the eye.',
      color: '#f66565',
      bgColor: '#fff5f6',
      showDiv: '',
      icon: faRankingStar,
    },
    {
      title: 'Tutoring',
      description: 'I teach my students web development. I provide proper assignments and guidance through which my students can easily prosper in computer science and boost there carrier.',
      span: "Not gonna learn yourself.",
      color: '#665aff',
      bgColor: '#f4f3ff',
      showDiv: '',
      icon: faClone,
    },
  ];

  return (
    <div>
      <div className='flex flex-col pb-10 mx-auto lg:container px-[20px] md:px-[15px] xl:px-[128px] 2xl:px-[240px] items-center justify-center'>
        <div ref={headingRef}>
          <GlobalHeading title={data.services.title} />
        </div>
        <div ref={cardsRef} className='flex flex-wrap gap-3 md:block md:grid md:grid-rows-2 md:grid-flow-col pt-10'>
          {content.map((item, index) => (
            <div
              key={index}
              className={`shadow-3xl testimonial-card hover:border-transparent rounded-[3px] shadow-lg md:shadow-none hover:shadow-none md:hover:shadow-lg ${item.showDiv} shadow-grey-500/40  transition-shadow duration-500 px-[30px] pb-[30px] pt-[24px] min-h-[140px] w-[100%] md:max-w-[520px]`}
            >
              <div className='flex gap-5 items-center pb-3'>
                <div style={{ background: item.bgColor }} className='p-4 rounded-lg flex items-center justify-center'>
                  <FontAwesomeIcon icon={item.icon} style={{ color: item.color }} className={` pr-[5px]`} />
                </div>
                <h3 className='text-2xl font-semibold'>{item.title}</h3>
              </div>
              <p className='text-[#686a8f] text-base'>
                <b className='font-semibold'>{item.span}</b> {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
