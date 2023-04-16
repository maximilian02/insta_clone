import React from 'react'
export interface DefaultLayoutType {
  children: any;
}

const DefaultLayout: React.FC<DefaultLayoutType> = ({ children }) =>
  <>
    <div className="flex flex-col justify-center flex-wrap content-center min-h-screen w-full">
      {children}
    </div>
  </>


export default DefaultLayout
