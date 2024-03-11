import React from 'react';
import styled from 'styled-components';
import {Navigate, Route, Routes} from 'react-router-dom';

import {Preview} from '@components/routes/preview';

import {TableType} from '@store/type';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  
  padding-top: 80px;
`;

export const ContentWrapper = () => (
    <Wrapper>
        <Routes>
            <Route path='/' element={<Navigate to={`/preview/${TableType.products}`} />} />
            <Route path='/preview/:tableType' element={<Preview />} />
        </Routes>
    </Wrapper>
);