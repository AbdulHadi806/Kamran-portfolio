import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Banner from '@/components/banner'
import Services from '@/components/services'
import RecentWork from '@/components/recent-work'
import Experience from '@/components/experience'
import Testimonials from '@/components/testimonials'
import useSWR from 'swr'
import Packages from '@/components/packages'
import Upwork from '@/components/upwork'
import Blogs from '@/components/blogs'
import MessageDirectly from '@/components/message-directly'
import { ClimbingBoxLoader } from 'react-spinners'
const fetcher = (url) => fetch(url).then((res) => res.json())
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const { data, error } = useSWR('/api/portfolio', fetcher);
  if (error) return <div className='flex items-center justify-center text-[21px]'>Failed to Load Please try again Later...</div>;
  if (!data) return <div className='flex overflow-hidden items-center justify-center bg-gray-400 w-[100vw] h-[100vh]'><ClimbingBoxLoader color={'#000'} size={40} aria-label="ClimbingBoxLoader" data-testid="loader" /></div>
  return (
    <div>
    <Head>
        <title>Kamran Freelancer</title>
      </Head>
     <Header data={data}/>
     <Banner data={data}/>
     <div class="w-full mt-24 bg-[#e6e6e6] h-px mb-8 sm:mb-20"></div>
     <div id = "Services">
      <Services data={data}/>
     </div>
     <div id='Portfolio'>
      <RecentWork data={data}/>
     </div>
     <div id='Leads'>
     <Experience data={data}/>
     </div>
     <div id='Testimonials'>
      <Testimonials data={data}/>
     </div>
       <div id='Blueprints'>
       <Packages data={data} />
       </div>
       <Blogs data={data}/>
     <div id='contact-us'>
       <Upwork data={data}/>
     </div>
     {/* <MessageDirectly /> */}
     <p className='text-center text-base pb-10 px-6 text-gray-400'>{data.copyRight}</p>
    </div>
  )
}
