import React from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100vh;
`;

export const Table = () => {
    const {tableType} = useParams();

    return (
        <Wrapper>
            {tableType}
        </Wrapper>
    );
};