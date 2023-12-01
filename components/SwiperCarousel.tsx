"use client"

import React from "react"
import { carouselImages } from "@/constants"
import { register } from "swiper/element/bundle"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import { Navigation, Pagination, Scrollbar, EffectFade } from "swiper/modules"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


register()

export default function SwiperCarousel() {
    return (
        <Swiper
            modules={[Pagination, Scrollbar, EffectFade]}
            slidesPerView={1}
            effect="fade"
            autoplay
            scrollbar={{ draggable: true }}
            loop={true}
            speed={1000}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {carouselImages.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="w-full relative h-[50vh]">
                        <Image
                            className="object-cover brightness-[30%]"
                            fill
                            alt=""
                            src={item.imageUrl}
                        />
                        <div className="absolute top-1/2 -translate-y-[50%] left-1/2 translate-x-[-50%]">
                            <h1 className="text-white">{item.title}</h1>
                            <p className="text-white">{item.body}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
