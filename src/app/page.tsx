// import { AboutUs } from '@/components/about-us/about-us'
import { Faq } from '@/components/faq/faq'
import Featureblock from '@/components/featureblock/featureblock'
import Imageblock from '@/components/imageblock/imageblock'
import Reviewsblock from '@/components/reviewsblock/reviewsblock'
import Solutionblock from '@/components/solutionblock/solutionblock'
import Top from '@/components/top/top'
import Videoblock from '@/components/videoblock/videoblock'

export default function HomePage() {
  return (
    <>
      <Top />
      <Imageblock />
      <Featureblock />
      <Solutionblock />
      <Videoblock />
      <Reviewsblock />
      <Faq />
    </>
  )
}
