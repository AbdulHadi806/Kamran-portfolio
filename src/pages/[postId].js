import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { ClimbingBoxLoader } from 'react-spinners';
import useSWR from 'swr';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const fetcher = (url) => fetch(url).then((res) => res.json());

function BlogPage() {
  const router = useRouter();
  const { postId } = router.query;
  const { data, error, loading } = useSWR('/api/portfolio', fetcher);

  if (error) return <div className='flex items-center justify-center text-[21px]'>Failed to Load Please try again Later...</div>;
  if (!data) return <div className='flex overflow-hidden items-center justify-center bg-gray-400 w-[100vw] h-[100vh]'><ClimbingBoxLoader color={'#000'} size={40} aria-label="ClimbingBoxLoader" data-testid="loader" /></div>
  if (!data.blogs.blogs || postId >= data.blogs.blogs.length || postId < 0) {
    return <div className='flex items-center justify-center text-[21px]'>Blog not found.</div>;
  }
  // Access data only if it's valid
  const blog = data.blogs.blogs[postId];
  return (
    <>
      <Head>
        <title>Kamran Blogs</title>
      </Head>
      <div >
        <div className='px-[20px] md:px-[15px] xl:px-[128px] 2xl:px-[240px] pt-[30px]'>
          <Link href="/">
            <FontAwesomeIcon className='text-[#34a1cd] text-[31px]' icon={faLocationArrow} />
          </Link>
        </div>
        <div className='mt-[5px] text-center container px-[20px] md:px-[15px] xl:px-[128px] 2xl:px-[260px] mx-auto md:py-[20px]'>
          <h1 className='text-[42px] tracking-[3px] leading-[60px] xl:text-[60px] font-extrabold text-[#130f49]'>
            {blog.secondaryTitle}
            <span className='block text-[36px] text-[#34a1cd] tracking-[1px]'>{blog.title}</span>
          </h1>
          <div style={{ background: blog.bg }} className='flex h-[400px] items-center py-10 mt-5 rounded-[15px]'>
            <img src={blog.img} className='w-75 mx-auto h-[100%]' alt="Freelancing Blogs" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
