type TechBadgeProps = {
  name: string
}

function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 text-sm py-1 px-3 rounded-md transition-colors duration-300 hover:border-emerald-500/70 hover:text-emerald-200">
      {name}
    </span>
  )
}

export default TechBadge
