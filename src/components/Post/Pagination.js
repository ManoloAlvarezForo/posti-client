import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
    initPage,
    pagesNumber,
    onClickBack,
    onClickNext,
    backButtonStyles,
    nextButtonStyles}) => {
        return (
            <div style={styles.mainContent}>
                <button style={backButtonStyles} onClick={onClickBack}>Back</button>
                <div style={styles.pages}>{initPage}/{pagesNumber}</div>
                <button style={nextButtonStyles}  onClick={onClickNext}>Next</button>
            </div>
        )
}

Pagination.propTypes = {
    initPage: PropTypes.number,
    pagesNumber: PropTypes.number,
    onClickBack: PropTypes.func,
    onClickNext: PropTypes.func,
    backButtonStyles: PropTypes.object,
    nextButtonStyles: PropTypes.object
}

const styles = {
    mainContent: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        padding: '50px'
    },
    pages: {margin: '0 20px'}
}

export default Pagination;