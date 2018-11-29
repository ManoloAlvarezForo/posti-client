import React from 'react';
import PropTypes from 'prop-types';

// Components.
import Comments from './Comments';

// Utils.
import { getImageUrl } from '../../utils/Generator';

const Comment = ({parentId, email, body, isToPost}) => {
    return (
        <div style={styles.mainContent}>
            <div style={styles.commentContent}>
                <img style={styles.commentImage} src={getImageUrl()} alt="" />
                <div style={styles.commentText}>
                    <div style={styles.contentBody}><b style={styles.commentEmail}>{`${email}:`}</b>{body}</div>
                </div>
            </div>
            <div style={styles.commentsContent}>
                <Comments parentId={parentId} isToPost={isToPost} />
            </div>
        </div>
    )
}

Comment.propTypes = {
    parentId: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
    isToPost: PropTypes.bool 
}

const styles = {
    mainContent: { 
        display: 'flex', 
        flexDirection: 'column' 
    },
    commentContent: { 
        display: 'flex', 
        flexDirection: 'row', 
        margin: '10px 0' 
    },
    commentImage: { 
        width: '35px', 
        height: '35px', 
        maxHeight: '35px', 
        margin: '0 10px', 
        borderRadius: '50%' 
    },
    commentText: { 
        display: 'flex', 
        flexDirection: 'column', 
        width: '90%',
        backgroundColor: '#e6e6e6',
        padding: '0 13px',
        borderRadius: '5px',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    commentEmail: { 
        color: '#607D8B',
        marginRight: '5px'
    },
    contentBody: {
        fontSize: '0.9rem'
    },
    commentsContent: { 
        marginLeft: '7%' 
    }
}

export default Comment;