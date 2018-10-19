import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
// Styles.
import './Post.css';

// Utils.
import {getImageUrl} from '../../utils/Generator';

const DEFAULT_TYPE = 'TECHNOLOGY';
const DEFAULT_DATE = 'Sept 19';

const Post = ({ title, body, author, postId}) => {
    return (
        <Link href="" className="main-content" to={`/${postId}`}>
            <article className="article-post">
                <div className="text-content">
                    <div className="category">{DEFAULT_TYPE}</div>
                    <div className="ellipsis title">{title}</div>
                    <div className="ellipsis body-content">{body}</div>
                    <div className="details">
                        <div className="details-author">{author}</div>
                        <div className="details-date">{DEFAULT_DATE}</div>
                    </div>
                </div>
                <div className="details-image">
                 <img style={styles.image} src={getImageUrl()} alt=""/>
                </div>
            </article>
        </Link>
    )
}

const styles = {
    image: {width: '100%', height: '100%', borderRadius: '5px', maxHeight: '220px'}
}

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
}

export default Post;