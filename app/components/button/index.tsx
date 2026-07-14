import { cn } from '@/app/utils/cn'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-emerald-600 py-3 px-5 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
