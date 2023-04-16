import React, { useState } from 'react'
import DB from '../lib/DatabaseStorage'
import { dateDiffInDays } from '../lib/Utils'

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
  const uploaded = dateDiffInDays(uploadDate)

  return <>
    <div className="w-1/3 flex flex-row">
      <div className="w-full flex flex-col mb-8">
        <figure className="relative transition-all m-auto pl-4 border">
          <img
            className="rounded-lg"
            src={`https://picsum.photos/300/300?random=${id}`}
            alt="insta clone random"
          />
          <figcaption className="w-20 absolute bg-white border border-black text-lg text-white bottom-0 right-0 py-0 rounded-lg">
            <input type="checkbox" className="mx-2 inline" checked={isLiked} onChange={changeHandler} /><p className="inline text-black w-auto">LIKE</p>
          </figcaption>
        </figure>
        <div className="w-80 text-gray-500 flex flex-row text-xs justify-between m-auto mt-2 pl-4">
          <div><p>{uploaded} days ago</p></div>
          <div><p>{likesAmount} Likes</p></div>
        </div>
        <div className="w-80 text-gray-500 flex flex-row justify-between left m-auto mt-2 pl-4">
          <div><p>{description}</p></div>
        </div>
      </div>
    </div>
  </>
}

export default Post
