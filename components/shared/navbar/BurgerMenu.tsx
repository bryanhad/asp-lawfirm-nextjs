"use client"

import { useNavbarContext } from "@/contexts/navbar.context"

export default function BurgerMenu({ navHeight }: { navHeight: number }) {
    const { isNavOpen, setIsNavOpen } = useNavbarContext()

    return (
        <>
            <div
                onClick={() => {
                    console.log('container div ke cklick!')
                    setIsNavOpen((prev) => !prev)}}
                className={`fixed top-0 min-h-screen w-full z-20 duration-300 ${
                    isNavOpen ? "left-0 bg-black/20" : "-left-[100%] bg-black/0"
                } `}
            />
            <section
                style={{ paddingTop: `${navHeight}px` }}
                className={`fixed z-[21] top-0 w-[80%] h-full bg-secondary duration-300 ${
                    isNavOpen ? "right-[0%]" : "-right-[100%]"
                }`}
            >
                yeapaaeeafeafea
            </section>
        </>
    )
}
