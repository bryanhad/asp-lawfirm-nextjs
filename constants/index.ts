import { GiTakeMyMoney } from "react-icons/gi"
import { ImHammer2 } from "react-icons/im"
import { FaHandshake } from "react-icons/fa6"

export const sidebarLinks = [
    {
        imgURL: "/assets/home.svg",
        route: "/",
        label: "Home",
    },
    {
        imgURL: "/assets/home.svg",
        route: "/search",
        label: "Services",
    },
    {
        imgURL: "/assets/home.svg",
        route: "/activity",
        label: "Lawyers",
    },
    {
        imgURL: "/assets/home.svg",
        route: "/create-thread",
        label: "About",
    },
    {
        imgURL: "/assets/home.svg",
        route: "/communities",
        label: "Contact",
    },
]

export const practices = [
    {
        title: "Kepailitan",
        description:
            "Kepailitan adalah suatu keadaan di mana suatu perusahaan atau individu tidak mampu memenuhi kewajiban keuangannya dan mengajukan permohonan ke pengadilan untuk diumumkan pailit.",
        icon: GiTakeMyMoney,
        href: "/praktik/kepailitan",
    },
    {
        title: "PKPU",
        description:
            "PKPU adalah suatu mekanisme hukum yang memberikan perlindungan kepada debitur yang mengalami kesulitan membayar utangnya agar dapat melakukan negosiasi dengan para kreditornya dan mencapai kesepakatan restrukturisasi utang.",
        icon: ImHammer2,
        href: "/praktik/pkpu",
    },
    {
        title: "Arbitrase",
        description:
            "Arbitrase adalah suatu mekanisme alternatif penyelesaian sengketa di luar pengadilan yang melibatkan pihak ketiga (arbiter) yang diakui dan dipilih oleh para pihak yang bersengketa untuk memberikan putusan yang mengikat.",
        icon: FaHandshake,
        href: "/praktik/arbitrase",
    },
]

export const carouselImages = [
    {
        id: 1,
        title: "Professional LawFirm",
        body: "We are a Leading Law Firm in Business",
        imageUrl:
            "https://images.unsplash.com/photo-1423592707957-3b212afa6733?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
        id: 2,
        title: "Great Lawyers. Great Lawfirm.",
        body: "bikin kamu hepi",
        imageUrl:
            "https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
        id: 3,
        title: "Reputation. Respect. Result.",
        body: "Bootstrap Carousel Example",
        imageUrl:
            "https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
]
