type CheckboxIconProps = {
  className?: string
}

export default function CheckboxIcon({ className }: CheckboxIconProps) {
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
        d="M8.25 10.0833L11 12.8333L18.3333 5.5"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 11V16.5C18.3333 16.9862 18.1402 17.4525 17.7964 17.7963C17.4525 18.1401 16.9862 18.3333 16.5 18.3333H5.49999C5.01376 18.3333 4.54744 18.1401 4.20363 17.7963C3.85981 17.4525 3.66666 16.9862 3.66666 16.5V5.49996C3.66666 5.01373 3.85981 4.54741 4.20363 4.2036C4.54744 3.85978 5.01376 3.66663 5.49999 3.66663H13.75"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
