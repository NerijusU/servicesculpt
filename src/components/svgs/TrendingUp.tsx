const TrendingUp = ({
  className,
  width = 20,
  height = 20,
  strokeWidth = 2,
  fill = 'none',
  viewBox = '0 0 24 24',
}: {
  className?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
  fill?: string;
  viewBox?: string;
}) => {
  return (
    <svg
      className={className}
      fill={fill}
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17"
        stroke="var(--primary)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrendingUp;
