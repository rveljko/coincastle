import LogoIcon from '@icons/logo-icon'

type LogoProps = {
  withText?: boolean
}

export default function Logo({ withText }: LogoProps) {
  return (
    <div className="flex items-center gap-1">
      <span className="shrink-0">
        <LogoIcon />
      </span>
      {withText && (
        <span className="text-xl text-clickable font-bold">CoinCastle</span>
      )}
    </div>
  )
}
