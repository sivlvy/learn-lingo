interface Props {
  size?: string | number
  color?: string
  className?: string
}

const NonFavoriteIcon = ({ size = 24, color = '#000', className }: Props) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 32 32"
    >
      <symbol id="icon-favorite" viewBox="0 0 35 32">
        <path
          fill="#f4c550"
          style={{
            fill: 'var(--color1, #f4c550)',
            stroke: 'var(--color1, #f4c550)'
          }}
          stroke="#f4c550"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeWidth="1.4545"
          d="M31.384 4.355c-0.805-0.805-1.76-1.444-2.812-1.88s-2.179-0.66-3.318-0.66-2.266 0.224-3.318 0.66c-1.052 0.436-2.007 1.075-2.812 1.88l-1.67 1.67-1.67-1.67c-1.626-1.626-3.831-2.539-6.13-2.539s-4.504 0.913-6.13 2.539c-1.626 1.626-2.539 3.831-2.539 6.13s0.913 4.504 2.539 6.13l13.93 13.93 13.93-13.93c0.805-0.805 1.444-1.76 1.88-2.812s0.66-2.179 0.66-3.318-0.224-2.266-0.66-3.318c-0.436-1.052-1.075-2.007-1.88-2.812z"
        ></path>
      </symbol>
    </svg>
  )
}

export default NonFavoriteIcon
