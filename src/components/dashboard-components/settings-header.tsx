type SettingsHeaderProps = {
  className?: string
}

export default function SettingsHeader({ className }: SettingsHeaderProps) {
  return (
    <header className={className}>
      <h1 className="mb-2">Settings</h1>
      <p>Magic place where you can change everything</p>
    </header>
  )
}
