import React from "react";

type Props = { className?: string };

const ArrowDown = ({ className }: Props) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M8 2C7.724 2 7.5 2.224 7.5 2.5V12.4747L3.862 8.65525C3.67175 8.4555 3.3555 8.44725 3.155 8.638C2.955 8.8285 2.94725 9.14475 3.13775 9.34475L7.29275 13.707C7.48175 13.896 7.73275 14 8 14C8.267 14 8.51825 13.896 8.7155 13.6982L12.862 9.34475C13.0525 9.14475 13.0445 8.8285 12.8447 8.638C12.645 8.44725 12.3285 8.45525 12.138 8.65525L8.5 12.4908V2.5C8.5 2.224 8.276 2 8 2Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowDown;
