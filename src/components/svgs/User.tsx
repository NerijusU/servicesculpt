const User = ({
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
        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="var(--primary)"
      />
      <path
        d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="var(--primary)"
      />
    </svg>
  );
};

export default User;
