import {Link} from "@inertiajs/react"

const Videos = ({ videos }) => {
  return (
    <div>
      {videos.map((video, index) => (
        <div key={index}>
          {video.title}:
          {video.text}
           - <Link href={`/videos/detail/${video.id}`}>DETAIL</Link>
        </div>
      ))}
      <Link href={`/videos/create`}>新規作成</Link>
      
    </div>
  )
}

export default Videos