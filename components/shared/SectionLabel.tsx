interface SectionLabelProps {
  label: string
  className?: string
}

export default function SectionLabel({ label, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`font-mono text-[10px] text-inferno uppercase tracking-[0.22em] block ${className}`}
    >
      {label}
    </span>
  )
}
