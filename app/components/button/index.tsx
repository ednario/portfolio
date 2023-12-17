import { cn } from '@/app/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-emerald-500 translate-all disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
