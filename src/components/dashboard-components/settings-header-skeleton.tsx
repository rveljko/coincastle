type SettingsHeaderSkeletonProps = {
  className?: string
}

export default function SettingsHeaderSkeleton({
  className,
}: SettingsHeaderSkeletonProps) {
  return (
    <header className={className}>
      <div className="bg-clickable/10 mb-2 h-10.5 w-35 animate-pulse rounded-sm"></div>
      <div className="bg-clickable/10 h-5 w-full max-w-80 animate-pulse rounded-sm"></div>
    </header>
  )
}
