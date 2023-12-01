import Carousel from "@/components/Carousel"
import Practices from "@/components/Practices"
import SwiperCarousel from "@/components/SwiperCarousel"
import MaxWidthContainer from "@/components/shared/MaxWidthContainer"
import Image from "next/image"

export default function Home() {
    return (
        <>
            <div className="w-full">
                <SwiperCarousel/>
            </div>
            <MaxWidthContainer className="sm:translate-y-[-40%] translate-y-[-75px] z-10">
                <Practices/>
            </MaxWidthContainer>
        </>
    )
}
