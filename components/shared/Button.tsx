'use client'

type ButtonProps = {
    children:React.ReactNode 
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({children, className, onClick}: ButtonProps ) {
  return (
    <button onClick={onClick} className={`${className}`}>
        {children}
    </button>
  )
}
