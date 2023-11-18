import Image from 'next/image'
import HomePageImage from '../../public/assets/images/homepage.jpg';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="z-10  w-full  justify-between font-mono text-sm lg:flex">
        <div className='w-1/2  justify-center flex p-8'>
          <h2 className='text-6xl text-teal-200 mt-16'> <span className='text-white '>Give</span> a Hand to those who need it</h2>
        </div>
        <div className='min-h-fit'>
     <Image height={700} objectFit='cover' width={500} src={HomePageImage} alt='homepage image min-h-fit'/>
        </div>
      </div>
    </main>
  )
}
