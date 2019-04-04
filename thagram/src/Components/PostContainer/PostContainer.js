import React from 'react';


const PostContainer = props => {
    return (
        <div className='container'>
            <img src={props.data.thumbnailUrl} alt='thumbnail' />
            <h3>{props.data.username}</h3>
        </div>

        <div className='post-image'>
            <img src={props.data.imageUrl} alt='User Post' />
        </div>

        <div>
        <CommentSection />
        </div>

    )
}

export default PostContainer;