interface Props {
  size?: string;
  color?: string;
  className?: string;
}

const UkraineLogoIcon = ({ size = '24', color = '#000', className }: Props) => {
	return (
		<svg
			className={className}
			width={size}
			height={size}
			fill={color}
			viewBox="0 0 32 32"
		>
			<symbol id="icon-ukraine-logo" viewBox="0 0 32 32">
				<path
					fill="#ffda44"
					style={{
						fill: 'var(--color5, #ffda44)',
					}}
					d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16z"
				></path>
				<path
					fill="#338af3"
					style={{
						fill: 'var(--color6, #338af3)',
					}}
					d="M0 16c0-8.836 7.163-16 16-16s16 7.163 16 16z"
				></path>
			</symbol>
		</svg>
	);
};

export default UkraineLogoIcon;
