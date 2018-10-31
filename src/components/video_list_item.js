import React from 'react';

const VideoListItem = ( { video } ) => {
    // const video = props.video; doing {video} in the parameters where props would go is the same as this line
    const title = video.snippet.title
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div classname="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;