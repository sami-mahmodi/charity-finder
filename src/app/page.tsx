
import Image from 'next/image'
import HomePageImage from '../../public/assets/images/undraw_undraw_undraw_undraw_undraw_search_engines_041x_-2-_cl95_o7o8_pigd_-1-_wbm3.svg';




const getStaticPath = async ({context}:) => {
  const id = context.params.id;
  const res = await fetch('https://partners.every.org/v0.2/nonprofit/maps?apiKey=pk_live_caa7f63e15977152afb7ad68cf70e3ac');
  const data = await res.json();

  return{
      props:{organization: data}
  }
}

const charityOrg = ({organization})=>{
      
}


export default function Home() {
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
      <div className='grid grid-col-4 p-16 bg-slate-200'>
        {}
      </div>
    </main>
  )
}
