import React from 'react'
import VidoListItem from './video_list_item'
 
// in functional components props are an argument being passed in
// in class components props are properties to the class and can be referenced by this.props
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    });

    return (
        // className in jsx is the same as class in traditional html/css
        <ul className=" col-md-4 list-group">
            {/* videoItems is an array but react knows how to handle it */}
            {videoItems}
        </ul>
    )
}

export default VideoList