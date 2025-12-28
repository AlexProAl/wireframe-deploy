// import { AboutUs } from '@/components/about-us/about-us'
import CTA from '@/components/CTA/CTA'
import { Faq } from '@/components/faq/faq'
import Featureblock from '@/components/feature/feature'
import Priceblock from '@/components/price/price'
import Imageblock from '@/components/product-image/product-image'
import Reviewsblock from '@/components/reviews/reviews'
import Solutionblock from '@/components/solution/solution'
import Top from '@/components/top/top'
import Videoblock from '@/components/video/video'

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
      <CTA />
    </>
  )
}
