import React from "react";

interface HeaderBaseProps {
 leftContent: React.ReactNode,
 rightContent: React.ReactNode,
 className?:string
}

export function  HeaderBase({leftContent, rightContent, className}: HeaderBaseProps) {
  return (
    <header className={`fixed top-0 left-0 z-50 flex items-center font-inter justify-center w-full h-16 bg-black bg-opacity-80 px-8 ${className || ""}`}>
      <div className="mr-8">{leftContent}</div>
      <div className="font-inter">{rightContent}</div>
    </header>
  )
}

