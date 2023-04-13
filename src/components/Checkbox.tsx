
import React from 'react';

interface CheckboxProps {
  label: string;
  setRememberMe: any;
  value: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, setRememberMe, value }) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('remember me? ', e.target.checked);
    setRememberMe(e.target.checked)
  }
  return <>
    <div className="w-full flex">
      <input type="checkbox" className="mr-2" checked={value} onChange={changeHandler} /><p>{label}</p>
    </div>
  </>
}

export default Checkbox
