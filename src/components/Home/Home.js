import React from 'react';
import PropTypes from 'prop-types';


//Components.
import PostList from '../Post/PostList';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    onChange = () => {
        console.log('onChange')
    }

    // compose = (...funcs) => value => funcs.reduceRight((acc, func) => func(acc), value);
    // increment = num => num + 5
    // decrement = num => num - 3
    // multiply = num => num * 2

    // all = this.compose(this.increment, this.decrement, this.multiply);

    componentDidMount() {
        this.props.getPosts().then(response => this.setState({
            posts: response
        }))
    }

    render() {
        return (
            <div style={styles.mainContent}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={styles.postsStyles}>
                        <PostList posts={this.state.posts} />
                    </div>
                </div>
            </div>

        )
    }
}

Home.propTypes = {
    getPosts: PropTypes.func
}

const styles = {
    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        height: 'calc(100vh - 64px)'
    },
    headerStyles: {
        display: 'flex',
        flexDirection: 'column',
        height: '230px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e4e4e4',
        fontWeight: 'bold'
    },
    title: {
        textAlign: 'center',
        fontSize: '3rem',
        height: '90%',
        alignItems: 'center',
        display: 'flex'
    },
    postsStyles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}

export default Home;