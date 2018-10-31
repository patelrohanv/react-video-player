import React from 'react'

// In general, if you don't need state and only data, use a functional component
const VideoDetail = ( { video } ) => {
    if (!video) {
        return <div>Loading... </div>
    }
    const videoId = video.id.videoId;
    const url = `http://youtube.com/embed/${videoId}`;
    const videoTitle = video.snippet.tite;
    const videoDesc = video.snippet.description;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={ url }></iframe>
            </div>
            <div className="details">
                <div>{ videoTitle }</div>
                <div>{ videoDesc }</div>
            </div>
        </div>
    );
}

export default VideoDetail