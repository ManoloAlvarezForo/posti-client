import React from 'react';
import FullScreenSearcher from '../Search/FullScreenSearcher';


class PostSearcher extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                query: ""
            }
        }

        _searchByPost = (query) => {
            this.setState({query})
        }

        render() {
            return(
                <FullScreenSearcher query={this.state.query}  _searchStrategy={this._searchByPost} />
            )
        }
}

export default PostSearcher;