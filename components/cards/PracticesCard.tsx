import Link from "next/link"

type PracticeCardProps = {
    icon: () => JSX.Element
    title: string
    description: string
    href: string
}

export default function PracticeCard({
    icon,
    title,
    description,
    href,
}: PracticeCardProps) {
    return (
        <Link href={href} className="border-t-accent border-t-2 flex-1">
            <div className="bg-primary p-4 text-white/80">
                <div className="text-accent">{icon()}</div>
                <h3 className="font-bold">{title}</h3>
                <p className="max-line-3">{description}</p>
            </div>
        </Link>
    )
}

