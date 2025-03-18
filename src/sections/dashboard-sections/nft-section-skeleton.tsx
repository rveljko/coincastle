import Section from '@sections/dashboard-sections/section'

type NftSectionSkeletonProps = {
  className?: string
}

export default function NftSectionSkeleton({
  className,
}: NftSectionSkeletonProps) {
  return (
    <Section className={className}>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:flex-1">
          <NftCollectionInformationSkeleton />
          <div className="mb-4">
            <div className="bg-clickable/10 mb-2 h-6.5 w-full max-w-44 animate-pulse rounded-sm"></div>
            <div className="space-y-1">
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
            </div>
          </div>
          <div className="bg-clickable/10 mb-2 h-6.5 w-full max-w-44 animate-pulse rounded-sm"></div>
          <div className="space-y-1">
            <div className="flex justify-between gap-2">
              <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
            </div>
          </div>
        </div>
        <div className="bg-clickable/10 aspect-1/1 size-auto animate-pulse rounded-sm md:flex-1"></div>
      </div>
    </Section>
  )
}

export function NftCollectionInformationSkeleton() {
  return (
    <>
      <div className="mb-2 flex gap-2">
        <div className="bg-clickable/10 size-16 animate-pulse rounded-sm"></div>
        <div>
          <div className="bg-clickable/10 mb-0.5 h-5 w-30 animate-pulse rounded-sm"></div>
          <div className="bg-clickable/10 h-10.5 w-20 animate-pulse rounded-sm"></div>
        </div>
      </div>
      <div className="mb-4 space-y-2">
        <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
        <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
      </div>
    </>
  )
}
