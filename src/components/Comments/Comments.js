import React from 'react';
import PropTypes from 'prop-types';

// Components.
import Comment from './Comment';

// GraphQL.
import { Query } from "react-apollo";
import { GET_COMMENTS } from './CommentQuery'

const Comments = ({ parentId, isToPost }) => {
    return (
        <Query skip={parentId === "" && isToPost === ""} query={GET_COMMENTS} variables={{ parentId, isToPost }} >
            {({ loading, error, data }) => {
                if (loading) return <div>Searching...</div>
                if (parentId === "") return <div>No data...</div>
                if (error) return `Error!: ${error}`

                return (<div>
                    {
                        (data.comments.length === 0 && isToPost) ? <div>No comments.</div> :
                            data.comments.map((result, index) =>
                                <Comment
                                    id={result.id}
                                    key={index}
                                    name={result.name}
                                    email={result.email}
                                    body={result.body}
                                    parentId={result.id}
                                    isToPost={false}
                                />
                            )
                    }
                </div>
                )
            }}
        </Query>
    )
}

Comments.propTypes = {
    parentId: PropTypes.string,
    isToPost: PropTypes.bool
}

export default Comments;