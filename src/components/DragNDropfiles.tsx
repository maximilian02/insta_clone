import React from 'react'
import { useNavigate } from 'react-router-dom'
import { handleDragEvent, handleDragOver } from '../lib/Utils'

const DragNDropfiles: React.FC = () => {
  const navigate = useNavigate()

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    handleDragEvent(e)
    navigate('create-post')
  };

  return <>
    <div className="w-7/12 p-2 flex flex-row justify-center items-center flex-wrap border border-black" onDragOver={handleDragOver} onDrop={onDropHandler}>
      <div className="w-6/12 flex flex-row justify-center items-center flex-wrap">
        <p className="text-6xl">&#43;</p>
        <p className="ml-4 mt-2 text-2xl">Drag image here to post it</p>
      </div>
    </div>

  </>
}

export default DragNDropfiles
