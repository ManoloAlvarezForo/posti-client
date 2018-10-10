import React from 'react';

// Styles.
import './Post.css';

// Graphql
import { GET_POSTS_FILTER } from './PostQuery';
import { Query } from "react-apollo";

const PostResultItem = ({ title, authorName }) => {
    return (
        <a href="" className="item-post">
            <div style={{ fontSize: '1.5rem' }}>{title}</div>
            <div style={{ fontSize: '14px' }}>{authorName}</div>
        </a>

    )
}

const PostResultList = ({ query }) => {
    return (
        <Query skip={query === ""} query={GET_POSTS_FILTER} variables={{ query }} >
            {({ loading, error, data }) => {
                if (loading) return <div>Loading...</div>
                if (query === "") return <div>No data...</div>
                if (error) return `Error!: ${error}`

                return <div>
                    {
                        (data.postFilter.length === 0) ? <div>Any coincidence found.:(</div> :
                            data.postFilter.map((result, index) =>
                                <PostResultItem 
                                key={index} 
                                title={result.title} 
                                authorName={result.author.name} 
                                />
                            )
                    }
                </div>
            }}
        </Query>
    )
}

const PostSearchItems = ({ query }) => {
    return (
        <PostResultList query={query} />
    );
}

export default PostSearchItems;