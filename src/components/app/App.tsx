import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import BaseStyles from './Base.styled';
import {Navbar} from '@components/common';
import {ContentWrapper} from '@components/routes';

export const App = () => (
    <>
        <BaseStyles/>
        <BrowserRouter>
            <Navbar/>
            <ContentWrapper/>
        </BrowserRouter>
    </>
);