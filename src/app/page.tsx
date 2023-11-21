'use client'
import Image from 'next/image'
import HomePageImage from '../../public/assets/images/undraw_undraw_undraw_undraw_undraw_search_engines_041x_-2-_cl95_o7o8_pigd_-1-_wbm3.svg';
import CharityCard from '@/components/CharityCard';
import { fetchCharities } from '@/utils';
import { useState,useEffect } from 'react';
import SearchCharity from '@/components/SearchCharity';

export default function Home() {
  const [charities,setCharities] = useState([]);
  const [searchCharity,setSearchCharity] = useState({cause:''});

  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await fetchCharities({cause: searchCharity.cause});
      setCharities(data);
    }
    fetchData();

  },[SearchCharity]);

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="z-10  w-full h-64   justify-between font-mono text-sm lg:flex p-8">
        <div className='w-1/2  justify-center flex p-8'>
          <h2 className='text-6xl text-teal-200 mt-16'> <span className='text-black '>Give</span> a Hand to those who need it.</h2>
        </div>
        <div className=''>
     <Image height={700} objectFit='cover' width={500} src={HomePageImage} alt='homepage image min-h-fit' className=''/>
        </div>
      </div>
      <h1 className='text-center text-slate-600 text-4xl mt-8'>Connect To Charity Organizations Here</h1>
      <div className='grid grid-cols-4 px-4 gap-x-4 py-2 my-4'>
        
      </div>
    </main>
  )
}
