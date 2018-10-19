import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class PostSearchItem extends React.Component {

    _onAction = () => {
        this.props._handleClose();
    }

    render() {
        return (
            <Link className="item-post" to={`/${this.props.postId}`} onClick={this._onAction}>
                <div style={styles.title}>{this.props.title}</div>
                <div style={styles.author}>{this.props.authorName}</div>
            </Link>
        )
    }
}

PostSearchItem.propTypes = {
    postId: PropTypes.string,
    title: PropTypes.string,
    authorName: PropTypes.string
}

const styles = {
    title: { fontSize: '1.5rem' },
    author: { fontSize: '14px' }
}

export default PostSearchItem;