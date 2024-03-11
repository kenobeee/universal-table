import React, {useMemo} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import {TableType} from '@store/type';

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  
  width: 100%;
  height: 80px;

  background-color: rgb(20 45 99);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 90%;
  height: 100%;
`;

const StyledLink = styled(NavLink)`
  margin-left: 20px;
  
  font-weight: 500;
  color: #fff;
  font-size: 24px;
  text-transform: uppercase;
  
  &.active {
    color: orangered !important;
  }
  
  &:first-child {
    margin-left: 0;
  }
`;

export const Navbar = () => {
    const links = useMemo(() => Object.keys(TableType), []);

    return (
        <Wrapper>
            <Container>
                {links.map((value, i) =>
                    <StyledLink key={i} to={`preview/${value}`}>{value}</StyledLink>)}
            </Container>
        </Wrapper>
    );
};