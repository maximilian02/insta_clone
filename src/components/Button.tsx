
import React from 'react';

interface ButtonProps {
  label: string;
  type: 'primary' | 'secondary' | 'facebook' | 'twitter';
}

const primary = (fontColor: string, bgColor: string) => `self-center mt-4 border border-${fontColor} opacity-80 hover:opacity-100 bg-color-${bgColor} text-${fontColor} font-bold py-2 px-4 w-5/12 rounded`
const secondary = (fontColor: string, bgColor: string) => `self-end bg-${bgColor} mt-4 text-${fontColor} font-bold py-2 px-4 w-5/12 rounded`

const ButtonClassMap = new Map<string, any>([
  ['primary', () => primary('black', 'white')],
  ['secondary', () => secondary('white', 'black')]
]);

const Button: React.FC<ButtonProps> = ({ label, type }) => {
  const buttonClass = ButtonClassMap.get(type)
  const resultClass = buttonClass ? buttonClass() : ''

  return <>
    <button className={resultClass}>
      {label}
    </button>
  </>
}

export default Button