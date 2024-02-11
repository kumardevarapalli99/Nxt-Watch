import createContext, useContext, useState} from 'react'

const VideoContext = createContext()

export const VideoProvider = ({children}) => {
  const [videoId, setVideoId] = useState('')

  const updateVideoId = id => {
    setVideoId(id)
  }

  return (
    <VideoContext.Provider value={{videoId, updateVideoId}}>
      {children}
    </VideoContext.Provider>
  )
}

export const useVideoContext = () => {
  return useContext(VideoContext)
}
