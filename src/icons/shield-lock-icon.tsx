type ShieldLockIconProps = {
  className?: string
}

export default function ShieldLockIcon({ className }: ShieldLockIconProps) {
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
        d="M11 2.75C13.1412 4.64436 15.9358 5.63069 18.7917 5.5C19.2075 6.91443 19.3347 8.39801 19.1658 9.86258C18.9969 11.3272 18.5353 12.7428 17.8084 14.0255C17.0816 15.3081 16.1043 16.4316 14.9347 17.3291C13.7651 18.2266 12.427 18.8799 11 19.25C9.57294 18.8799 8.23485 18.2266 7.06524 17.3291C5.89563 16.4316 4.91837 15.3081 4.19154 14.0255C3.4647 12.7428 3.00311 11.3272 2.83421 9.86258C2.66531 8.39801 2.79253 6.91443 3.20832 5.5C6.06422 5.63069 8.85881 4.64436 11 2.75Z"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0833 10.0833C10.0833 10.3264 10.1799 10.5596 10.3518 10.7315C10.5237 10.9034 10.7569 11 11 11C11.2431 11 11.4763 10.9034 11.6482 10.7315C11.8201 10.5596 11.9167 10.3264 11.9167 10.0833C11.9167 9.84018 11.8201 9.60702 11.6482 9.43511C11.4763 9.2632 11.2431 9.16663 11 9.16663C10.7569 9.16663 10.5237 9.2632 10.3518 9.43511C10.1799 9.60702 10.0833 9.84018 10.0833 10.0833Z"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11V13.2917"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
