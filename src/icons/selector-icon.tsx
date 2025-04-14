type SelectorIconProps = {
  className?: string
}

export default function SelectorIcon({ className }: SelectorIconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.33334 8.25004L11 4.58337L14.6667 8.25004"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 13.75L11 17.4167L7.33334 13.75"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
