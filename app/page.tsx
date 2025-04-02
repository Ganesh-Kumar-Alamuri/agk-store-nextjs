import LoadingContainer from "@/components/global/LoadingContainer"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import Hero from "@/components/home/Hero"
import { Suspense } from "react"
function HomePage() {
  return (
    <>
    <Hero/>
    <FeaturedProducts/>
    </>
  )
}
export default HomePage