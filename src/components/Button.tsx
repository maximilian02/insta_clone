import React from 'react'
import SVGIcon from './SVGIcon'

interface ButtonProps {
  label: string;
  type: 'primary' | 'secondary' | 'facebook' | 'twitter' | 'logout';
  onClick: any;
  disabled?: boolean
  extraStyle?: string
}

const primary = (label: string, onClick: any, disabled: boolean = false, extraStyle: string = 'self-center') => <button disabled={disabled} type="submit" onClick={onClick} className={`disabled:opacity-25 ${extraStyle} mt-4 border border-black bg-color-white text-black font-bold py-2 px-4 w-6/12 rounded`}>{label}</button>
const secondary = (label: string, onClick: any, disabled: boolean = false, extraStyle: string = 'self-center') => <button disabled={disabled} type="submit" onClick={onClick} className={`disabled:opacity-25 ${extraStyle} bg-black mt-4 text-white font-bold py-2 px-4 w-6/12 rounded`}>{label}</button>
const facebook = (label?: string) =>
  <button style={{ backgroundColor: '#4267B2' }} className="w-full flex items-center justify-center mt-4 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 opacity-100 hover:opacity-75 focus:border-blue-500 block w-full p-2.5">
    <SVGIcon type="facebook" />{label}
  </button>
const twitter = (label?: string) =>
  <button style={{ backgroundColor: '#1DA1F2' }} className="w-full flex items-center justify-center mt-4 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 opacity-100 hover:opacity-75 focus:border-blue-500 block w-full p-2.5">
    <SVGIcon type="twitter" />{label}
  </button>
const logout = (label: string, onClick: any) =>
  <button onClick={onClick} className="text-white text-sm rounded-lg focus:ring-blue-500 opacity-100 hover:opacity-75 w-8">
    <SVGIcon type="logout" />{label}
  </button>


const ButtonTypeMap = new Map<string, any>([
  ['primary', (label: string, onClick: any, disabled: boolean, extraStyle: string) => primary(label, onClick, disabled, extraStyle)],
  ['secondary', (label: string, onClick: any, disabled: boolean, extraStyle: string) => secondary(label, onClick, disabled, extraStyle)],
  ['twitter', (label: string, onClick: any) => twitter(label)],
  ['facebook', (label: string, onClick: any) => facebook(label)],
  ['logout', (label: string, onClick: any) => logout(label, onClick)],
])

const Button: React.FC<ButtonProps> = ({ label, type, onClick, disabled, extraStyle }) => {
  const buttonClassType = ButtonTypeMap.get(type)
  const resultButton = buttonClassType ? buttonClassType(label, onClick, disabled, extraStyle) : <span>Button not found</span>

  return <>{resultButton}</>
}

export default Button
