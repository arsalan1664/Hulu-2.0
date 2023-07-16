import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Result from '@/components/Result';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>
      <Header/>
      <Nav/>
      <Result/>
    </div>
  );
}
