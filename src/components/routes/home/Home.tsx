import React from 'react';
import {Link} from 'react-router-dom';

export const Home = () => (
    <div>
        <Link to={'/table/example'}>go table</Link>
    </div>
);