import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import BaseStyles from './Base.styled';
import {Navbar} from '@components/common';
import {ContentWrapper} from '@components/routes';

import {store} from '@store/index';

export const App = () => (
    <>
        <BaseStyles/>
        <Provider store={store}>
            <BrowserRouter>
                <Navbar/>
                <ContentWrapper/>
            </BrowserRouter>
        </Provider>
    </>
);