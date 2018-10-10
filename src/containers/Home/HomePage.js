import React from 'react';

// Components.
import Home from '../../components/Home/Home';
import { getPosts } from '../../utils/Fetcher'

const HomePage = () => {
    return (
        <Home getPosts={getPosts} />
    )
}

export default HomePage;