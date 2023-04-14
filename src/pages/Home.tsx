import React from 'react'
import SVGIcon from '../components/SVGIcon'
import FormLayout from './FormLayout'
import DB from '../lib/DatabaseStorage'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import Post, { PostType } from '../components/Post'

const Home: React.FC = () => {
  const posts: PostType[] = [
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      uploadDate: '2 minutes ago',
      likedBy: ['masi'],
      id: 1
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      uploadDate: '2 minutes ago',
      likedBy: [],
      id: 2
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      uploadDate: '2 minutes ago',
      likedBy: ['masi'],
      id: 3
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      uploadDate: '2 minutes ago',
      likedBy: ['masi'],
      id: 1
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      uploadDate: '2 minutes ago',
      likedBy: [],
      id: 2
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      uploadDate: '2 minutes ago',
      likedBy: ['masi'],
      id: 3
    }
  ]
  const { username } = DB.getSessionData()
  const navigate = useNavigate()
  const containerHeadClass = 'flex flex-row flex-wrap content-center bg-gray-200 p-3 lg:w-11/12 w-10/12'
  const containerImagesClass = 'flex flex-row justify-center flex-wrap content-center bg-gray-200 p-3 lg:w-11/12 w-10/12'

  const logOutHandler = () => {
    navigate('login')
    DB.logOutHandler()
    console.log('see ya')
  }

  return <>
    <FormLayout>
      <div className={containerHeadClass}>
        <div className="w-8/12 p-2 flex flex-row justify-center items-center flex-wrap border border-black">
          <p className="text-6xl">&#43;</p>
          <p className="ml-4 mt-2 text-2xl">Drag image here to post it</p>
        </div>
        <div className="w-4/12 p-2 flex flex-col flex-wrap">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row w-10/12"><SVGIcon type="profile" /><p className="text-sm">{username}</p></div>
            <div className="w-2/12 self-end"><Button type="logout" label="" onClick={logOutHandler} /></div>
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
        {posts.map(({ likedBy, uploadDate, description }, index) =>
          <Post likedBy={likedBy} uploadDate={uploadDate} id={index} description={description} />)
        }
      </div>
    </FormLayout>
  </>
}


export default Home
