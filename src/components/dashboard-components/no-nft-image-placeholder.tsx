import PhotoOffIcon from '@icons/photo-off-icon'

export default function NoNftImagePlaceholder() {
  return (
    <article className="flex h-full flex-col items-center justify-center gap-2">
      <PhotoOffIcon className="size-12 text-neutral-400" />
      <span className="text-center text-neutral-400">
        Content not available yet
      </span>
    </article>
  )
}
