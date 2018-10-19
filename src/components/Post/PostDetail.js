import React from 'react';
import PropTypes from 'prop-types'

// GraphQL.
import { GET_POST_BY_ID } from './PostQuery'
import { Query } from "react-apollo";

// Utils.
import { getImageUrl } from '../../utils/Generator';

// Components.
import Comments from '../Comments/Comments';

const COMMENTS_TEXT = "Comments";

class PostDetail extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const postId = this.props.match.params.postId
        return (
            <Query skip={postId === ""} query={GET_POST_BY_ID} variables={{ postId }} >
                {({ loading, error, data }) => {
                    if (loading) return <div>Loading...</div>
                    if (error) return `Error!: ${error}`

                    return (
                        <div>
                            <div className="line-h">
                                <div className="details-image-full">
                                    <img style={styles.image} src={getImageUrl()} alt="" />
                                </div>
                                <h1>{data.post.title}</h1>
                                <p>{data.post.body} {data.post.body} {data.post.body} {data.post.body}</p>
                                <p>{data.post.body} </p>
                                <p>{data.post.body} {data.post.body} {data.post.body}</p>
                                <p>{data.post.body} {data.post.body} {data.post.body} {data.post.body}</p>
                                <h1>1) {data.post.title}</h1>
                                <div className="details-image-full">
                                    <img style={styles.image} src={getImageUrl()} alt="" />
                                </div>
                                <p>{data.post.body} </p>
                                <p>{data.post.body} {data.post.body} {data.post.body}</p>
                                <p>{data.post.body} {data.post.body} {data.post.body} {data.post.body} {data.post.body}</p>
                                <p>{data.post.body} {data.post.body} </p>
                                <h1>2) {data.post.title}</h1>
                                <div className="details-image-full">
                                    <img style={styles.image} src={getImageUrl()} alt="" />
                                </div>
                                <p>{data.post.body} {data.post.body} {data.post.body} {data.post.body} {data.post.body}</p>
                                <p>{data.post.body} {data.post.body} {data.post.body} {data.post.body} {data.post.body}</p>
                                <h1>3) {data.post.title}</h1>
                                <div className="details-image-full">
                                    <img style={styles.image} src={getImageUrl()} alt="" />
                                </div>
                                <p>{data.post.body} {data.post.body} {data.post.body}</p>
                                <p>{data.post.body} {data.post.body}</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{color: 'white', height: '15px', alignItems: 'center', display: 'flex', padding: '10px', borderRadius: '5px', backgroundColor: '#f74872'}}>{COMMENTS_TEXT}</h3>
                                <Comments  parentId={postId} isToPost={true} />
                            </div>
                        </div>

                    )
                }}
            </Query>
        )
    }
}

const styles = {
    image: {
        width: '100%',
        height: '550px',
        minHeight: '100%',
        borderRadius: '5px'
    }
}

PostDetail.propTypes = {
    postId: PropTypes.string
}

export default PostDetail;