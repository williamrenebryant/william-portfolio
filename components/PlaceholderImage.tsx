interface PlaceholderImageProps {
  className?: string
  icon?: string
}

export default function PlaceholderImage({ className = '', icon = '✨' }: PlaceholderImageProps) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-dark to-teal-mid ${className}`}
    >
      <span className="text-5xl opacity-30">{icon}</span>
    </div>
  )
}
