type CalendarIconProps = {
  className?: string
}

export default function CalendarIcon({ className }: CalendarIconProps) {
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
        d="M3.66666 6.41671C3.66666 5.93048 3.85981 5.46416 4.20363 5.12034C4.54744 4.77653 5.01376 4.58337 5.49999 4.58337H16.5C16.9862 4.58337 17.4525 4.77653 17.7964 5.12034C18.1402 5.46416 18.3333 5.93048 18.3333 6.41671V17.4167C18.3333 17.9029 18.1402 18.3693 17.7964 18.7131C17.4525 19.0569 16.9862 19.25 16.5 19.25H5.49999C5.01376 19.25 4.54744 19.0569 4.20363 18.7131C3.85981 18.3693 3.66666 17.9029 3.66666 17.4167V6.41671Z"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 2.75V6.41667"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33334 2.75V6.41667"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.66666 10.0834H18.3333"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0833 13.75H11"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 13.75V16.5"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
