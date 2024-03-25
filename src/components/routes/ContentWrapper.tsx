import React from 'react';
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom';

import {Pages} from './pages';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  
  padding-top: 80px;
`;

export const ContentWrapper = () => (
    <Wrapper>
        <Routes>
            <Route path={'/pages'} element={<Pages/>}/>
        </Routes>
    </Wrapper>
);