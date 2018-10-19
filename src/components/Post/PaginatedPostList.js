import React from 'react';
import PropTypes from 'prop-types'
import Pagination from './Pagination';

// Graphql
import { POST_PAGINATED } from './PostQuery';
import { Query } from "react-apollo";

//Components.
import Post from './Post';

class PaginatedPostList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 1,
            limit: 5,
            initPage: 1,
            nextButtonStyles: {
                pointerEvents: 'initial',
                color: ''
            },
            backButtonStyles: {
                pointerEvents: 'none',
                color: '#7d7d7d'
            }
        }
    }

    _nextPage = () => {

        if (this.state.initPage + 1 === this._pagination.props.pagesNumber) {
            this.setState({
                initPage: this.state.initPage + 1,
                offset: this.state.offset + 1,
                nextButtonStyles: {
                    pointerEvents: 'none',
                    color: '#7d7d7d'
                }
            })
        } else {
            this.setState({
                initPage: this.state.initPage + 1,
                offset: this.state.offset + 1,
                backButtonStyles: {
                    pointerEvents: 'initial',
                    color: ''
                }
            })
        }
    }

    _backPage = () => {

        if (this.state.initPage - 1 === 1) {
            this.setState({
                backButtonStyles: {
                    pointerEvents: 'none',
                    color: '#7d7d7d'
                }
            })
        }

        if (this.state.initPage === this._pagination.props.pagesNumber) {
            this.setState({
                nextButtonStyles: {
                    pointerEvents: 'initial',
                    color: ''
                }
            })
        }

        this.setState({
            initPage: this.state.initPage - 1,
            offset: this.state.offset - 1
        })
    }

    render() {
        return (
            <Query query={POST_PAGINATED} variables={{ offset: this.state.offset, limit: this.state.limit }} >
                {({ loading, error, data }) => {
                    if (loading) return <div>Loading...</div>
                    if (error) return `Error!: ${error}`

                    return <div>
                        {
                            data.postsPaginated.posts.map((post, index) =>
                                <div key={index} style={{ margin: '5px' }}>
                                    <Post
                                        title={post.title}
                                        body={post.body}
                                        image={post.image}
                                        author={post.author.name}
                                        postId={post.id}
                                    />
                                    <div className="divider"></div>
                                </div>
                            )
                        }
                        <Pagination ref={p => this._pagination = p}
                            onClickBack={this._backPage}
                            onClickNext={this._nextPage}
                            count={data.postsPaginated.count}
                            pagesNumber={data.postsPaginated.pagesNumber}
                            initPage={this.state.initPage}
                            backButtonStyles={this.state.backButtonStyles}
                            nextButtonStyles={this.state.nextButtonStyles}
                        />
                    </div>
                }}
            </Query>
        )
    }
}

export default PaginatedPostList;