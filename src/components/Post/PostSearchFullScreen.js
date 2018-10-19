import React from 'react'
import PropTypes from 'prop-types';

// Styles.
import './Post.css'

//Components.
import PostSearchItems from './PostSearchItems';

  const  PostSearchFullScreen = ({
    showLargeSearch,
    _handleClose,
    _handleChange,
    query
  }) => {
      return (
        <div style={showLargeSearch}>
          <div className="full-screen-search">
            <button className="close-button"
              onClick={_handleClose}>X</button>
            <label>Search</label>
            <input style={{borderBottom: 'solid 2px #2d373c'}} type="text"
              name="searchlarge"
              onChange={_handleChange} />
            <div style={styles.searchContent}>
              <PostSearchItems query={query} _handleClose={_handleClose}/>
            </div>
          </div>
        </div>
      );
  }

const styles = {
  searchContent: {
    overflow: 'auto',
    height: 'calc(100vh - 170px)'
  }
}

PostSearchFullScreen.propTypes = {
  showLargeSearch: PropTypes.object,
  _handleChange: PropTypes.func,
  _handleClose: PropTypes.func,
  query: PropTypes.string
}

export default PostSearchFullScreen;