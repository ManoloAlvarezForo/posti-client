import React from 'react';

// Components.
import PostSearcher from '../../components/Post/PostSearcher';

class Main extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div style={styles.mainContent}>
                <div style={styles.headerStyles}>
                    <div style={{ width: '740px', display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '25px' }}>
                        <div style={styles.title}>Posti</div>
                        <div style={{ display: 'flex', flexDirection: 'row', margin: '0 20px', marginLeft: 'auto' }}>
                            <nav>
                                <a href="/html/">Home</a> |
                                <a href="/css/">Categories</a>
                            </nav>
                        </div>
                        <PostSearcher />
                    </div>
                </div>
                {this.props.content}
            </div>
        )
    }
}

const styles = {
    mainContent: {
        display: 'flex',
        flexDirection: 'column'
    },
    headerStyles: {
        display: 'flex',
        flexDirection: 'row',
        height: '64px',
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

export default Main;