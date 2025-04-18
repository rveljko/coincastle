type NavigationLinksListSkeletonProps = {
  numberOfNavigationLinks: number
}

export default function NavigationLinksListSkeleton({
  numberOfNavigationLinks,
}: NavigationLinksListSkeletonProps) {
  return (
    <div className="space-y-2">
      {Array.from({ length: numberOfNavigationLinks }, (_, index) => index).map(
        (index) => (
          <div
            key={index}
            className="bg-clickable/10 h-6 w-full animate-pulse rounded-sm"
          ></div>
        )
      )}
    </div>
  )
}
