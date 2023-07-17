import { HomeIcon, BoltIcon, UserIcon, CheckBadgeIcon, RectangleStackIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import Image from "next/image";
import HeaderItem from "./HeaderItem.js";

function Header(){
    return(
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem Icon={HomeIcon} title='HOME'/>
                <HeaderItem Icon={BoltIcon} title='TRENDING'/>
                <HeaderItem Icon={CheckBadgeIcon} title='VERIFIED'/>
                <HeaderItem Icon={RectangleStackIcon} title='COLLECTIONS'/>
                <HeaderItem Icon={MagnifyingGlassIcon} title='SEARCH'/>
                <HeaderItem Icon={UserIcon} title='USER'/>
            </div>
            <Image className='object-contain' 
             src="https://links.papareact.com/ua6"
             width={200}
             height={100}
             alt=''
            />
        </header>
    )
}

export default Header;