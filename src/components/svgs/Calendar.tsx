const Calendar = ({
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
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
        stroke="var(--primary)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default Calendar;
