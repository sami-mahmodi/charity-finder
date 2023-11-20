import Link from "next/link";
import Image from "next/image";
import logo from '../../public/assets/images/logo.jpeg';
import SearchCharity from "./SearchCharity";

export default function AppHeader() {
    return (
          <div className="h-28 w-full  justify-between flex bg-teal-400 items-center px-8">
            <div className="flex items-center">
            <Image height={100} width={100} src={logo} alt="this is logo" className="rounded-full"/>
            <h1 className="text-center  text-4xl text-white mx-2">Charity Finder</h1>
            </div>
            <SearchCharity/>
            <div>
       <Link href='/favourites' className="text-xl p-2 bg-teal-100 hover:bg-teal-200 text-black rounded-md mx-2">  Favourites</Link>
            </div>
          </div>

    )
  }