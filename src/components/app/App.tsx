import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import BaseStyles from './Base.styled';

import {Table} from '@components/routes';

import {store} from '@store/index';

export enum TableType {
    products = 'products',
    pricePlans = 'pricePlans',
    pages = 'pages'
}

export const App = () => (
    <>
        <BaseStyles/>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to={`/table/${TableType.pages}`} />} />
                    <Route path='/table/:tableType' element={<Table />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </>
);