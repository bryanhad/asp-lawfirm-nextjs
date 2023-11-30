export default function MaxWidthContainer({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return <div className={`max-w-[1300px] w-full mx-6 ${className}`}>{children}</div>
}
