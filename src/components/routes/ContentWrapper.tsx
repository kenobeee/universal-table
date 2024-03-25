import React from 'react';
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom';

import {TablePages} from './table-routes';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  
  padding-top: 80px;
`;

export const ContentWrapper = () => (
    <Wrapper>
        <Routes>
            {Object.entries(TablePages).map(([type, Component]) => (
                <Route key={type} path={`/${type}`} element={<Component />} />
            ))}
        </Routes>
    </Wrapper>
);