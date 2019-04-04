import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Components/CommentSection/Comment';
import CommentInput from './Components/CommentSection/CommentInput';

const CommentSection = props => {
    const CommentSection = props => {
        return (
          <div>
            {props.comments.map((c, i) => <Comment key={i} comment={c} />)}
            <CommentInput />
          </div>
        );
      };
      
      CommentSection.propTypes = {
        comments: PropTypes.arrayOf(
          PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
        )
      };
}

export default CommentSection;