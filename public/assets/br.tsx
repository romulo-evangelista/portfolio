import * as React from "react"
const BRSvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={513}
    height={342}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="#009B3A" d="M0 0h513v342H0V0Z" />
      <path
        fill="#FEDF00"
        d="m256.5 19.3 204.9 151.4L256.5 322 50.6 170.7 256.5 19.3Z"
      />
      <path
        fill="#fff"
        d="M256.5 251.4c44.404 0 80.4-35.996 80.4-80.4s-35.996-80.4-80.4-80.4-80.4 35.996-80.4 80.4 35.996 80.4 80.4 80.4Z"
      />
      <path
        fill="#002776"
        d="M215.9 165.7c-13.9 0-27.4 2.1-40.1 6 .6 43.9 36.3 79.3 80.3 79.3 27.2 0 51.3-13.6 65.8-34.3-24.9-31-63.2-51-106-51Zm119 20.3c.9-5 1.5-10.1 1.5-15.4 0-44.4-36-80.4-80.4-80.4-33.1 0-61.5 20.1-73.9 48.6 10.9-2.2 22.1-3.4 33.6-3.4 46.8.1 89 19.5 119.2 50.6Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h513v342H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default BRSvgComponent
