
import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white">
      <div className="relative animate-pulse">
        <svg 
          width="46" 
          height="56" 
          viewBox="0 0 23 28" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce"
        >
          <path 
            d="M0.672852 6.88094C0.672852 3.2249 3.98765 0.261108 8.0767 0.261108C12.1657 0.261108 15.4805 3.2249 15.4805 6.88094V8.6722C14.2407 8.22856 12.8873 7.98425 11.4701 7.98425C5.50692 7.98425 0.672852 12.3064 0.672852 17.6382V6.88094Z" 
            fill="#014D6E"
            className="animate-pulse"
          />
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M11.4421 27.3896C17.3898 27.3896 22.2113 23.0234 22.2113 17.6374C22.2113 12.2515 17.3898 7.88531 11.4421 7.88531C5.4944 7.88531 0.672852 12.2515 0.672852 17.6374C0.672852 23.0234 5.4944 27.3896 11.4421 27.3896ZM11.4421 22.6528C14.5009 22.6528 16.9805 20.4074 16.9805 17.6374C16.9805 14.8675 14.5009 12.6221 11.4421 12.6221C8.38328 12.6221 5.90362 14.8675 5.90362 17.6374C5.90362 20.4074 8.38328 22.6528 11.4421 22.6528Z" 
            fill="#191B23"
            className="animate-pulse"
          />
        </svg>
        <div className="absolute transform -translate-x-1/2 -bottom-8 left-1/2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-[#014D6E] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-[#014D6E] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-[#014D6E] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
      <p className="mt-12 font-medium text-gray-600 animate-pulse">Loading...</p>
    </div>
  );
}