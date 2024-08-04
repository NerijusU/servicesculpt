const Edit = ({
  className,
  width = 20,
  height = 20,
  strokeWidth = 2,
  fill = 'none',
  viewBox = '0 0 36 36',
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
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9139 1.875H20.25C20.8713 1.875 21.375 2.37868 21.375 3C21.375 3.62132 20.8713 4.125 20.25 4.125H18C14.4327 4.125 11.8703 4.12739 9.92036 4.38956C8.00276 4.64737 6.84668 5.13771 5.99219 5.99219C5.13771 6.84668 4.64737 8.00276 4.38956 9.92036C4.12739 11.8703 4.125 14.4327 4.125 18C4.125 21.5673 4.12739 24.1297 4.38956 26.0796C4.64737 27.9972 5.13771 29.1533 5.99219 30.0078C6.84668 30.8623 8.00276 31.3526 9.92036 31.6104C11.8703 31.8726 14.4327 31.875 18 31.875C21.5673 31.875 24.1297 31.8726 26.0796 31.6104C27.9972 31.3526 29.1533 30.8623 30.0078 30.0078C30.8623 29.1533 31.3526 27.9972 31.6104 26.0796C31.8726 24.1297 31.875 21.5673 31.875 18V15.75C31.875 15.1287 32.3787 14.625 33 14.625C33.6213 14.625 34.125 15.1287 34.125 15.75V18.0861C34.125 21.5487 34.125 24.2622 33.8404 26.3794C33.549 28.5465 32.941 30.2566 31.5988 31.5988C30.2566 32.941 28.5465 33.549 26.3794 33.8404C24.2622 34.125 21.5487 34.125 18.0861 34.125H17.9139C14.4513 34.125 11.7378 34.125 9.62056 33.8404C7.45345 33.549 5.74342 32.941 4.4012 31.5988C3.05899 30.2566 2.45098 28.5465 2.15962 26.3794C1.87497 24.2622 1.87498 21.5487 1.875 18.0861V17.9139C1.87498 14.4513 1.87497 11.7378 2.15962 9.62056C2.45098 7.45345 3.05899 5.74342 4.4012 4.4012C5.74342 3.05899 7.45345 2.45098 9.62056 2.15962C11.7378 1.87497 14.4513 1.87498 17.9139 1.875ZM25.1558 3.41387C27.2076 1.36204 30.5343 1.36204 32.5861 3.41387C34.638 5.4657 34.638 8.79237 32.5861 10.8442L22.614 20.8164C22.0571 21.3734 21.7082 21.7223 21.3189 22.0259C20.8603 22.3836 20.3642 22.6902 19.8392 22.9404C19.3935 23.1528 18.9254 23.3088 18.1782 23.5578L13.8214 25.0101C13.017 25.2782 12.1302 25.0689 11.5307 24.4693C10.9311 23.8698 10.7218 22.983 10.9899 22.1786L12.4422 17.8218C12.6912 17.0746 12.8472 16.6065 13.0596 16.1608C13.3098 15.6358 13.6164 15.1397 13.9741 14.6811C14.2777 14.2918 14.6267 13.9429 15.1837 13.386L25.1558 3.41387ZM30.9951 5.00486C29.822 3.83171 27.9199 3.83171 26.7468 5.00486L26.1819 5.56979C26.2159 5.71359 26.2635 5.88491 26.3298 6.076C26.5448 6.69558 26.9516 7.51157 27.72 8.27999C28.4884 9.04841 29.3044 9.4552 29.924 9.67015C30.1151 9.73645 30.2864 9.78409 30.4302 9.81814L30.9951 9.25321C32.1683 8.08006 32.1683 6.17801 30.9951 5.00486ZM28.6577 11.5906C27.8838 11.2578 26.9822 10.7242 26.129 9.87098C25.2758 9.01777 24.7422 8.11623 24.4094 7.34228L16.8263 14.9254C16.2015 15.5502 15.9565 15.7979 15.7482 16.0649C15.4911 16.3946 15.2706 16.7513 15.0907 17.1288C14.945 17.4344 14.833 17.7644 14.5536 18.6026L13.9058 20.5461L15.4539 22.0942L17.3974 21.4464C18.2356 21.167 18.5656 21.0549 18.8712 20.9093C19.2487 20.7294 19.6054 20.5089 19.9351 20.2518C20.2021 20.0435 20.4498 19.7985 21.0746 19.1737L28.6577 11.5906Z"
        fill="var(--primary)"
      />
    </svg>
  );
};

export default Edit;
