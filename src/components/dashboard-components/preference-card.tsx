type PreferenceCardProps = {
  name: string
  imageUrl: string
  isActive: boolean
}

export default function PreferenceCard({
  name,
  isActive,
  imageUrl,
}: PreferenceCardProps) {
  return (
    <article className="flex flex-col items-start gap-1">
      <div
        className={`flex aspect-[7/5] w-39.5 items-center justify-center rounded-md bg-neutral-800 px-4 py-3 ${isActive ? 'inset-ring-brand-500 inset-ring-2' : 'inset-ring-section-outline inset-ring-1'}`}
      >
        <div className="flex h-full w-full items-center justify-center rounded-xs bg-neutral-700">
          <img className="rounded-xs" src={imageUrl} alt="" />
        </div>
      </div>
      <h3 className="text-heading-6-font-size">{name}</h3>
    </article>
  )
}
