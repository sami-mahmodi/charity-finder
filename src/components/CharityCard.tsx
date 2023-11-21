import Image from 'next/image';
import { CharityProps } from '@/types';
import Link from 'next/link';
import neximage from '../../public/next.svg';
import vercelimage from '../../public/vercel.svg';


type CharityCardProps ={
  charity: CharityProps;
}

const CharityCard = ({charity}: CharityCardProps) => {
  const { orgName, logoUrl, orgAddress, ein } = charity;

  return (
    <Link href={`/favourites`}>
      <div className='h-400 w-400 border border-black rounded-md bg-slate-200 p-4 shadow' >
        <div className='p-2 rounded-md flex  items-center border-black border-b'>
        <Image src={neximage} alt='this is next logo' height={40} width={40}/>
        <h2 className='text-black mx-8'>NEXT ORGANIZATION</h2>
        </div>
      
        <div className='flex  items-center'>
          <Image src={vercelimage} alt='this is vercel image' height={40} width={40}/>
          <h2 className='text-black text-xl bold mx-8'>This is Organization Logo</h2>
        </div>
      </div>
    </Link>
  );
};

export default CharityCard;