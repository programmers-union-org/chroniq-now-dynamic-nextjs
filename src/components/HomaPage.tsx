import Navbar from './Navbar'
import HomeSection1 from './HomeSection1'
import HomeSections, { CategoryData } from './HomeSections'
import politicsData from '@/data/politics.json'
import morenewsData from "@/data/morenews.json"
import metroData from "@/data/metro.json"

const HomaPage = () => {
  return (
    <>
    <Navbar/>
    <section className='p-5 sm:p-20 space-y-10'>
    <HomeSection1/>
    <HomeSections data={politicsData as CategoryData}/>
    <HomeSections data={morenewsData as CategoryData}/>
    <HomeSections data={metroData  as CategoryData}/>
    </section>
    </>
  )
}

export default HomaPage