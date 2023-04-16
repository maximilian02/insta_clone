
import React from 'react'

interface ButtonProps {
  type: 'twitter' | 'facebook' | 'profile' | 'logout';
}

const twitter = <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-2" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" /></svg>
const facebook = <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-2" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><circle cx="128" cy="128" r="96" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" /><path d="M168,88H152a23.9,23.9,0,0,0-24,24V224" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" /><line x1="96" y1="144" x2="160" y2="144" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" /></svg>
const profile = <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-2" width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none"> <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /> <path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /> <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /> </svg>
const logout = <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-2" viewBox="0 0 24 24" fill="none"><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m4-9-4-4m4 4-4 4m4-4H9" /></svg>

const ButtonClassMap = new Map<string, any>([
  ['twitter', twitter],
  ['facebook', facebook],
  ['profile', profile],
  ['logout', logout],
])

const SVGIcon: React.FC<ButtonProps> = ({ type }) => {
  const svgIconClass = ButtonClassMap.get(type)
  const resultIcon = svgIconClass ? svgIconClass : <span>Button not found</span>

  return <>{resultIcon}</>
}

export default SVGIcon