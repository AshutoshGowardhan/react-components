import React from 'react-dom';
import faker from 'faker';

const CommentDetails = (props) => {
    console.log(props)
    return (
        <div className="comment">
            <a href=" " className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                    {/* Consuming the propertise */}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    )
}

export default CommentDetails;