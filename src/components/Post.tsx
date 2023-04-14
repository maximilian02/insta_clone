import React, { useState } from 'react'
import DB from '../lib/DatabaseStorage'

export interface PostType {
  likedBy: string[];
  uploadDate: string;
  description: string;
  id: number;
}

const Post: React.FC<PostType> = ({ likedBy, uploadDate, description, id }) => {
  const user = DB.getSessionData()
  const [isLiked, setIsLiked] = useState(likedBy.includes(user.username))
  const [likesAmount, setLikesAmount] = useState(likedBy.length)
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.checked ? (likesAmount + 1) : (likesAmount - 1)
    setIsLiked(e.target.checked)
    setLikesAmount(newAmount)
  }
  console.log('user', user)

  return <>
    <div className="w-1/3 flex flex-row">
      <div className="flex flex-col p-4">
        <img src={`https://picsum.photos/250/250?random=${id}`} />
        <div className="flex flex-row w-2/4">
          <div className="absolute bg-gray-400 w-1/12 -mt-8">
            <input type="checkbox" className="mr-2" checked={isLiked} onChange={changeHandler} /><p className="w-auto">LIKE</p>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <span>{likesAmount}</span>
        </div>
      </div>
    </div>
  </>
}

export default Post
