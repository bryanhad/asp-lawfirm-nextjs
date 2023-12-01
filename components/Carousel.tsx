"use client"
import Image from "next/image"
// components/Carousel.js
import { useState, useEffect } from "react"

const Carousel = ({
    images,
    children,
}: {
    images: string[]
    children: React.ReactNode
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextImage, setNextImage] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000)

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId)
    }, [currentIndex, images.length])

    return (
        <div className="w-full flex overflow-hidden">
            <div
                className={`relative w-full h-[50vh] bg-red-300 duration-300 ease-in-out `}
            >
                {images.map((image, index) => (
                    <Image
                    src={images[currentIndex]}
                    fill
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full opacity-0 duration-300 ease-in-out ${ 
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                 
                    />
                ))}
                {/* <Image
                    objectFit="cover"
                    fill
                    alt={`Slide Image`}
                    src={images[currentIndex]}
                /> */}
            </div>
        </div>
    )
}

export default Carousel
