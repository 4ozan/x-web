import React from "react";

interface HeaderBaseProps {
 leftContent: React.ReactNode,
 rightContent: React.ReactNode,
 className?:string
}

export function  HeaderBase({leftContent, rightContent, className}: HeaderBaseProps) {
  return (

    <header className={`fixed top-0 left-0 z-50 flex font-inter justify-center w-full items-center h-16 ml- bg-opacity-80 bg-black  px-8 ${className || ""}`}>
      <div className="mr-8">{leftContent}</div>
      <div className="font-inter">{rightContent}</div>
    </header>

  )
}

