
import React from 'react';

const WithCentered = (CenterComponent) => {
    class MainCentered extends React.Component {
        render() {
            return (
                <div style={styles.mainContent}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={styles.postsStyles}>
                            <div className="default-center-max-width" style={styles.listContent}>
                                <CenterComponent {...this.props} />
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
    }

    const styles = {
        listContent: {
            marginTop: '10px',
            marginBottom: '50px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            padding: '50px 70px 0 70px',
            backgroundColor: '#ffff',
            borderRadius: '5px',
            height: '100%'
        },
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

    return MainCentered;
}

export default WithCentered;