interface Props {
  size?: string;
  color?: string;
  className?: string;
}

const RatingIcon = ({ size = '24', color = '#000', className }: Props) => {
	return (
		<svg
			className={className}
			width={size}
			height={size}
			fill={color}
			viewBox="0 0 32 32"
		>
			<symbol id="icon-rating" viewBox="0 0 32 32">
				<path
					fill="#ffc531"
					style={{
						fill: 'var(--color4, #ffc531)',
						stroke: 'var(--color4, #ffc531)',
					}}
					stroke="#ffc531"
					stroke-linejoin="miter"
					stroke-linecap="butt"
					stroke-miterlimit="4"
					stroke-width="2.4"
					d="M12.4 9.394l3.6-6.822 3.6 6.822c0.318 0.603 0.899 1.025 1.571 1.141l7.601 1.315-5.376 5.532c-0.475 0.489-0.697 1.171-0.6 1.846l1.098 7.635-6.922-3.404c-0.612-0.301-1.329-0.301-1.941 0l-6.922 3.404 1.098-7.635c0.097-0.675-0.125-1.357-0.6-1.846l-5.376-5.532 7.601-1.315c0.672-0.116 1.252-0.538 1.571-1.141zM29.035 11.579v0zM7.767 27.031c0 0 0 0 0 0h-0z"
				></path>
			</symbol>
		</svg>
	);
};

export default RatingIcon;
