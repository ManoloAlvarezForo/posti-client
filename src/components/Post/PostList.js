import React from 'react';
import PropTypes from 'prop-types'

// Graphql
import { GET_POSTS } from './PostQuery';
import { Query } from "react-apollo";

//Components.
import Post from '../Post/Post';

const PostList = () => {
    return (
        <Query query={GET_POSTS}  >
            {({ loading, error, data }) => {
                if (loading) return <div>Loading...</div>
                if (error) return `Error!: ${error}`

                return <div style={style.listContent}>
                    {
                        data.posts.map((post, index) =>
                            <div key={index} style={{ margin: '5px' }}>
                                <Post 
                                title={post.title} 
                                body={post.body} 
                                image={post.image} 
                                author={post.author.name}
                                 />
                                <div className="divider"></div>
                            </div>
                        )
                    }
                </div>
            }}
        </Query>
    )
}

const style = {
    listContent: {
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '740px'
    }
}

export default PostList;