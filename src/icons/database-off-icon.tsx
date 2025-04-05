type DatabaseOffIconProps = {
  className?: string
}

export default function DatabaseOffIcon({ className }: DatabaseOffIconProps) {
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
        d="M11.9011 8.22983C15.5265 8.063 18.3333 6.90433 18.3333 5.5C18.3333 3.98108 15.0498 2.75 11 2.75C9.47741 2.75 8.06299 2.92417 6.89057 3.22208M4.33949 4.34775C3.90774 4.69792 3.66666 5.08842 3.66666 5.5C3.66666 6.61833 5.44866 7.58175 8.00616 8.01167"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.66666 5.5V11C3.66666 12.5189 6.95016 13.75 11 13.75C11.9038 13.75 12.7692 13.6886 13.5685 13.5758M16.4899 12.8242C17.6367 12.3383 18.3333 11.6985 18.3333 11V5.5"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.66666 11V16.5C3.66666 18.0189 6.95016 19.25 11 19.25C13.9489 19.25 16.4917 18.5973 17.6559 17.655M18.3333 14.6667V11"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.75 2.75L19.25 19.25"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
