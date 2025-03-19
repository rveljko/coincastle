type FirstLetterImageGeneratorProps = {
  word: string
}

export default function FirstLetterImageGenerator({
  word,
}: FirstLetterImageGeneratorProps) {
  return (
    <div className="flex size-5.5 items-center justify-center rounded-full bg-neutral-700">
      <span className="text-neutral-100">
        {word.toLocaleUpperCase().charAt(0)}
      </span>
    </div>
  )
}
