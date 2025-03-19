type FirstLetterImageGeneratorProps = {
  word: string
  isSmall?: boolean
}

export default function FirstLetterImageGenerator({
  word,
  isSmall,
}: FirstLetterImageGeneratorProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-neutral-700 select-none ${isSmall ? 'size-5.5' : 'size-8'}`}
    >
      <span
        className={`text-neutral-100 ${isSmall ? 'text-paragraph-font-size leading-paragraph-line-height' : 'text-heading-4-font-size leading-heading-4-line-height'}`}
      >
        {word.toLocaleUpperCase().charAt(0)}
      </span>
    </div>
  )
}
