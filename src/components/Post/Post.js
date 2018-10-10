import React from 'react';
import PropTypes from 'prop-types'
import './Post.css';

const Post = ({ title, body, image = 'image', author}) => {
    return (
        <a href="" className="main-content">
            <article className="article-post">
                <div className="text-content">
                    <div className="category">TECHNOLOGY</div>
                    <div className="ellipsis title">{title}</div>
                    <div className="ellipsis body-content">{body}</div>
                    <div className="details">
                        <div className="details-author">{author}</div>
                        <div className="details-date">Sept 19</div>
                    </div>
                </div>
                <div className="details-image">{image}</div>
            </article>
        </a>
    )
}

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    image: PropTypes.string
}

export default Post;