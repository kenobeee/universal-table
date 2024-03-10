import React from 'react';
import {Link} from 'react-router-dom';
import {TableType} from '@components/app/App';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  width: 100%;
  height: 100vh;
`;

export const Home = () => (
    <Wrapper>
        <Link to={`/table/${TableType.pricePlans}`}>pricePlans</Link>
        <Link to={`/table/${TableType.pages}`}>pages</Link>
        <Link to={`/table/${TableType.products}`}>products</Link>
    </Wrapper>
);