import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Result from '@/components/Result';
import request from '@/utils/request';


const inter = Inter({ subsets: ['latin'] })

export default function Home({results}) {
  return (
    <div>
      <Header/>
      <Nav/>
      <Result results={results}/>
    </div>
  );
}

export async function getServerSideProps(context){
  const genre = context.query.genre;

  const requests = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchtrending.url}`).then((res)=>res.json())

  // request(genre)?.url || 
  return{
    props: {
      results: requests.results,
    }
  }
}