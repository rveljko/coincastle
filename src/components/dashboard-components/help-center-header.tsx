type HelpCenterHeaderProps = {
  className?: string
}

export default function HelpCenterHeader({ className }: HelpCenterHeaderProps) {
  return (
    <header className={className}>
      <h1 className="mb-2">Help Center</h1>
      <p>Feel lost? You are at right place</p>
    </header>
  )
}
