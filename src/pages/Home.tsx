import React from 'react'
import SVGIcon from '../components/SVGIcon'
import DefaultLayout from './DefaultLayout'
import DB from '../lib/DatabaseStorage'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import Post, { PostType } from '../components/Post'
import DragNDropfiles from '../components/DragNDropfiles'

const Home: React.FC = () => {
  const feed: PostType[] = DB.getPosts()
  const { username } = DB.getSessionData()
  const navigate = useNavigate()
  const containerHeadClass = 'flex flex-row flex-wrap bg-gray-200 p-6 lg:w-11/12 w-10/12 justify-around'
  const containerImagesClass = 'flex flex-row justify-center flex-wrap content-center bg-gray-200 p-3 lg:w-11/12 w-10/12'

  const logOutHandler = () => {
    navigate('login')
    DB.logOutHandler()
  }

  return <>
    <DefaultLayout>
      <div className={containerHeadClass}>
        <DragNDropfiles />
        <div className="w-4/12 p-2 flex flex-col flex-wrap">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row w-10/12"><SVGIcon type="profile" /><p className="text-sm">{username}</p></div>
            <div className="flex flex-row justify-end w-2/12"><Button type="logout" label="" onClick={logOutHandler} /></div>
          </div>
          <input
            type="text"
            className="w-full mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Search"
            required
          />
        </div>
      </div>
      <div className={containerImagesClass}>
        {feed.map(({ likedBy, uploadDate, description, id }) =>
          <Post key={id} likedBy={likedBy} uploadDate={uploadDate} id={id} description={description} />)
        }
      </div>
    </DefaultLayout>
  </>
}


export default Home
