import React from 'react';
import PropTypes from 'prop-types'

// Components.
import { FiSearch } from "react-icons/fi";

const Search = ({onChange, name}) => {
        return (
            <div style={{display: 'flex', alignItems: 'center'}}>
                <FiSearch style={{margin: '0 5px'}} />
                <input type="text"
                placeholder="search for..."
                    name={name}
                    autoComplete="off"
                    onChange={onChange} />
            </div>
        );
}

Search.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func
}

export default Search;