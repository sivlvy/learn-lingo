interface Props {
  size?: string
  color?: string
  className?: string
}

const PasswordEyeIcon = ({ size = '24', color = '#000', className }: Props) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 32 32"
    >
      <symbol id="icon-password-eye" viewBox="0 0 32 32">
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeWidth="3.2"
          d="M23.92 23.92c-2.279 1.737-5.055 2.7-7.92 2.747-9.333 0-14.667-10.667-14.667-10.667 1.659-3.091 3.959-5.791 6.747-7.92M13.2 5.653c0.918-0.215 1.857-0.322 2.8-0.32 9.333 0 14.667 10.667 14.667 10.667-0.809 1.514-1.775 2.94-2.88 4.253M18.827 18.827c-0.366 0.393-0.808 0.708-1.299 0.927s-1.020 0.336-1.557 0.346c-0.537 0.009-1.071-0.089-1.569-0.291s-0.95-0.5-1.33-0.88-0.679-0.832-0.88-1.33c-0.201-0.498-0.3-1.032-0.29-1.569s0.127-1.067 0.346-1.557 0.534-0.932 0.927-1.298"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeWidth="3.2"
          d="M1.333 1.333l29.333 29.333"
        ></path>
      </symbol>
    </svg>
  )
}

export default PasswordEyeIcon
