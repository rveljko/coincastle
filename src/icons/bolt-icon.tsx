type BoltIconProps = {
  className?: string
}

export default function BoltIcon({ className }: BoltIconProps) {
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
        d="M11.9166 2.75V9.16667H17.4166L10.0833 19.25V12.8333H4.58331L11.9166 2.75Z"
        stroke="currentColor"
        strokeWidth="1.83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
