import React from 'react'

export interface FormLayoutType {
  children: any;
}

const FormLayout: React.FC<FormLayoutType> = ({ children }) =>
  <>
    <div className="flex flex-col justify-center flex-wrap content-center min-h-screen w-full">
      {children}
    </div>
  </>


export default FormLayout
