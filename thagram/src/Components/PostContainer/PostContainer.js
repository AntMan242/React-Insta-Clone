import React from 'react';
import Post from '.Components/PostContainer/Post';


const PostContainer = props => {
    return (
      <div className="post-container-wrapper">
        {props.post.map(p => <Post key={p.imageUrl} post={p} />)}
      </div>
    );
  };

export default PostContainer;