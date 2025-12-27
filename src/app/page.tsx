// import { AboutUs } from '@/components/about-us/about-us'
import { Faq } from '@/components/faq/faq'
import Featureblock from '@/components/feature-block/feature-block'
import Imageblock from '@/components/image-block/image-block'
import Priceblock from '@/components/price-block/price-block'
import Reviewsblock from '@/components/reviews-block/reviews-block'
import Solutionblock from '@/components/solution-block/solution-block'
import Top from '@/components/top/top'
import Videoblock from '@/components/video-block/video-block'

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
      <Priceblock />
    </>
  )
}
