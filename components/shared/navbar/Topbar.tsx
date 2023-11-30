import Link from "next/link"
import Image from "next/image"
import MaxWidthContainer from "../MaxWidthContainer"
import ToggleButton from "./ToggleButton"
import BurgerMenu from "./BurgerMenu"

export default function Topbar() {
    const NAV_HEIGHT = 72
    return (
        <>
            <nav style={{height: `${NAV_HEIGHT}px`}} className="fixed top-0 z-30 w-full flex justify-center bg-primary">
                <MaxWidthContainer className="flex justify-between items-center">
                    <Link href="/" className="flex items-center py-4 gap-4">
                        <Image
                            src={"/assets/logo.png"}
                            alt="logo"
                            width={40}
                            height={40}
                        />
                        <p className="text-white max-xs:hidden">ASP Lawfirm</p>
                    </Link>
                    <ToggleButton/>
                </MaxWidthContainer>
            </nav>
            <BurgerMenu navHeight={NAV_HEIGHT} />
        </>
    )
}

