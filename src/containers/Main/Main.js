import React from 'react';
import {Link} from 'react-router-dom';

// CSS.
import './Main.css'

// Components.
import PostSearcher from '../../components/Post/PostSearcher';

class Main extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div style={styles.mainContent}>
                <div className="header-background" style={styles.headerStyles}>
                    <div className="default-center-width" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '25px' }}>
                        <div style={styles.title}>Postii</div>
                        <div style={{ display: 'flex', flexDirection: 'row', margin: '0 20px', marginLeft: 'auto' }}>
                            <nav className="navigation-main">
                                <Link style={{fontFamily: 'monospace', fontSize: '1.8rem'}} to="/">Home</Link>
                                <Link style={{fontFamily: 'monospace', fontSize: '1.8rem'}} to="/">Categories</Link>
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
        backgroundColor: 'var(--primary-color)',
        fontWeight: 'bold',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    },
    title: {
        textAlign: 'center',
        fontSize: '3rem',
        height: '90%',
        alignItems: 'center',
        display: 'flex',
        fontFamily: 'monospace',
        color: 'white'
    },
    postsStyles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}

export default Main;