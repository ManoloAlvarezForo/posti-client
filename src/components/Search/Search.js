import React from 'react';
import PropTypes from 'prop-types'

// Icons.
import { FiSearch } from "react-icons/fi";

const SEARCH_TEXT = "Search for...";

const Search = ({ onChange, name }) => {
    return (
        <div style={styles.mainContent}>
            <FiSearch style={styles.fiSearch} />
            <input style={styles.inputContent} type="text"
                placeholder={SEARCH_TEXT}
                name={name}
                autoComplete="off"
                onChange={onChange} />
        </div>
    );
}

const styles = {
    mainContent: { 
        display: 'flex',
        alignItems: 'center' 
    },
    fiSearch:{ 
        margin: '0 5px', 
        color: 'white' 
    },
    inputContent: {
        borderRadius: '30px',
        borderStyle: 'none',
        height: '20px',
        padding: '3px'
    }
}

Search.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func
}

export default Search;