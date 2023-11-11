import React from "react";

export default function Logo({width = 99, height = "auto", color = '#B22526'}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 99 172"
    >
      <path
        fill={color}
        d="M45.842.098c-6.64.309-12.684 1.953-18.79 5.078-7.564 3.865-15.026 10.73-19.713 18.13C4.132 28.365 1.686 34.82.822 40.514.123 45.179 0 48.386 0 61.933c0 13.65.164 17.576.925 21.872 1.233 7.03 4.255 13.897 8.819 19.982 1.973 2.631 6.62 7.421 9.168 9.497 4.461 3.597 10.381 6.742 15.52 8.243 2.96.863 3.783 1.069 6.373 1.521 3.66.617 12.725.679 16.24.083 7.421-1.234 13.197-3.433 18.953-7.236 3.228-2.138 5.098-3.68 8.182-6.764 7.955-7.914 12.54-17.062 14.02-27.957.328-2.384.37-4.502.37-19.323 0-14.842-.041-16.939-.37-19.323-1.81-13.116-8.305-24.237-19.118-32.645C71.702 4.127 62.308.571 53.55.16 52.317.119 50.734.037 50.056.016c-.679-.041-2.57 0-4.214.082zm7.482 31.329c6.147 1.788 10.751 6.475 12.499 12.745.452 1.624.452 1.768.473 16.754 0 16.425 0 16.507-1.172 19.57-1.583 4.173-5.365 8.1-9.56 9.95-2.939 1.315-7.831 1.767-10.976 1.027-6.517-1.5-11.636-6.29-13.568-12.663-.473-1.542-.473-1.624-.555-16.61-.041-12.354 0-15.356.226-16.754 1.295-7.38 7.462-13.34 15.048-14.533 2.035-.308 5.55-.082 7.585.514zM0 157.029v14.081h98.672v-28.163H0v14.082z"
      ></path>
    </svg>
  );
}