import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import GobalButtons from './resuable-components/gobal-buttons';
import Hamburger from 'hamburger-react';

function Header({ data }) {
  const [toggled, setToggled] = useState(false);

  return (
    <div className='px-[20px] md:px-[15px] xl:px-[128px] 2xl:px-[240px] py-[30px]'>
      <div className='flex flex-wrap md:flex-nowrap justify-between items-center'>
        <div>
          <Link href='/'>
            <Image
              src={data.header.logo}
              className='w-100 h-100'
              priority={true}
              width={190}
              height={28}
              alt='logo'
            />
          </Link>
        </div>
        <nav className='w-[100%] md:w-[initial] bg-[#dfe7f7] md:bg-white order-3 md:order-2'>
          <ul
            className={`md:flex md:p-0 gap-5 2xl:gap-9 items-center ${
              toggled ? 'max-h-[1000px] overflow-y-auto' : 'max-h-0 overflow-y-hidden'
            } transition md:max-h-initial md:overflow-y-initial duration-300`}
          >
            {data.header.navigation.map((item) => (
              <li
                key={item}
                className={`leading-[30px] my-3 md:block px-2 lg:px-5 ${
                  toggled ? 'block md:block' : 'hidden md:block'
                }`}
              >
                <Link href={`#${item}`} className='hover:text-[#3b44b4] block font-semibold w-[100%]'>
                  {item}
                </Link>
              </li>
            ))}
            <li
              className={`leading-[42px] px-2 md:hideen md:hideen lg:px-5 ${toggled ? 'block' : 'hidden '}`}
              style={{ transition: 'opacity 0.3s' }}
            >
              <Link href='#contact-us' className='hover:text-[#3b44b4] inline-block font-semibold'>
                Contact Me
              </Link>
            </li>
            <div className='hidden md:flex'>
              <GobalButtons link = {"https://www.upwork.com/freelancers/~01de2ada001f8d010c"} specialClass={toggled ? 'block' : 'hidden'} text={data.header.contactBtn} bg={'#130f49'} />
            </div>
          </ul>
        </nav>
        <div className='block md:hidden'>
          <Hamburger toggled={toggled} toggle={setToggled} />
        </div>
      </div>
    </div>
  );
}

export default Header;
