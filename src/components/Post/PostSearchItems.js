import React from 'react';

import PostSearchItem from './PostSearchItem';

// Styles.
import './Post.css';

// Graphql
import { GET_POSTS_FILTER } from './PostQuery';
import { Query } from "react-apollo";

const PostResultList = ({ query, _handleClose }) => {
    return (
        <Query skip={query === ""} query={GET_POSTS_FILTER} variables={{ query }} >
            {({ loading, error, data }) => {
                if (loading) return <div>Searching...</div>
                if (query === "") return <div>No data...</div>
                if (error) return `Error!: ${error}`

                return <div>
                    {
                        (data.postFilter.length === 0) ? <div>Any coincidence found.:(</div> :
                            data.postFilter.map((result, index) =>
                                <PostSearchItem
                                    key={index}
                                    title={result.title}
                                    authorName={result.author.name}
                                    postId={result.id}
                                    _handleClose={_handleClose}
                                />
                            )
                    }
                </div>
            }}
        </Query>
    )
}

const PostSearchItems = ({ query, _handleClose }) => {
    return (
        <PostResultList query={query} _handleClose={_handleClose} />
    );
}

export default PostSearchItems;