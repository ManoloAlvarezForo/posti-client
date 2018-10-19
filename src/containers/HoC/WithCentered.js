
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
            display: 'flex',
            flexDirection: 'column'
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