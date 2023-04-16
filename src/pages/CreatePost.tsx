import React from 'react'
import { useNavigate } from 'react-router-dom'
import DB from '../lib/DatabaseStorage'
import Button from '../components/Button'
import DefaultLayout from './DefaultLayout'

const CreatePost: React.FC = () => {
  const navigate = useNavigate()
  const onClickHandler = () => {
    DB.createPost()
    navigate('/')
  }
  return <>
    <DefaultLayout>
      <div className="flex flex-col justify-center flex-wrap content-center bg-gray-200 w-8/12">
        <h1 className="text-3xl text-center font-bold p-4 border-b border-bottom border-black">New Post</h1>
        <div className="flex flex-row content-center w-full">
          <div className="w-4/12 p-8 pt-4">
            <img
              className="border border-black"
              src={`https://picsum.photos/300/300?random=1`}
              alt="insta clone random" />
          </div>
          <div className="w-8/12 flex flex-col p-8 pt-4 pl-0">
            <textarea rows={6} className="border border-black" />
            <Button label="Post" type="secondary" extraStyle="self-center mt-12" onClick={onClickHandler} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  </>
}

export default CreatePost
