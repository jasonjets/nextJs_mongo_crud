import TopicsList from '@/components/TopicsList'
import Image from 'next/image'
//import connectMongoDB from "@/libs/mongodb";

export default async function Home() {
  //await connectMongoDB();
  return  (
    <> 
  <TopicsList />
    </>
  )
    
}
