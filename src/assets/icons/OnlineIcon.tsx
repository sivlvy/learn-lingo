interface Props {
  size?: string
  color?: string
  className?: string
}

const OnlineIcon = ({ size = '24', color = '#000', className }: Props) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 32 32"
    >
      <symbol id="icon-online" viewBox="0 0 32 32">
        <path
          fill="#fff"
          style={{
            fill: 'var(--color2, #fff)'
          }}
          d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"
        ></path>
        <path
          fill="#38cd3e"
          style={{
            fill: 'var(--color3, #38cd3e)'
          }}
          d="M26.667 16c0 5.891-4.776 10.667-10.667 10.667s-10.667-4.776-10.667-10.667c0-5.891 4.776-10.667 10.667-10.667s10.667 4.776 10.667 10.667z"
        ></path>
      </symbol>
    </svg>
  )
}

export default OnlineIcon
