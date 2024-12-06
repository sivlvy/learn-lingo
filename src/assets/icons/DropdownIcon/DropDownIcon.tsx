interface Props {
  size?: string
  color?: string
  className?: string
}

const DropDownIcon = ({ size = '24', color = '#000', className }: Props) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 32 32"
    >
      <symbol id="icon-dropdown" viewBox="0 0 32 32">
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeWidth="3.2"
          d="M8 12l8 8 8-8"
        ></path>
      </symbol>
    </svg>
  )
}

export default DropDownIcon
