import Button from '@components/ui/button'
import CoinCastleLogoIcon from '@icons/coin-castle-logo-icon'

type NotFoundCardProps = {
  linkLabel: string
  linkHref: string
}

export default function NotFoundCard({
  linkHref,
  linkLabel,
}: NotFoundCardProps) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <article className="max-w-max p-2">
        <CoinCastleLogoIcon className="text-clickable/40 mx-auto mb-1 size-16" />
        <h1 className="mx-auto mb-2 text-center">Oops! Page Not Found</h1>
        <p className="mx-auto mb-4 max-w-70 text-center">
          Sorry, the page you're looking for doesn't exist or has been moved
        </p>
        <Button
          href={linkHref}
          variant="primary"
          size="large"
          className="mx-auto"
        >
          {linkLabel}
        </Button>
      </article>
    </div>
  )
}
