import React from 'react';
import WithCentered from '../../containers/HoC/WithCentered';
import PaginatedPostList from '../Post/PaginatedPostList';

const CenteredListPost = WithCentered(PaginatedPostList)

export default CenteredListPost;