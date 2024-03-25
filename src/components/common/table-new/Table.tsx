import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {CommonTableData} from '@components/routes/pages/Pages';

type ITableP = {
    data:CommonTableData,
    children:ReactNode
};

const Header = styled.div`
  border-radius: 1em 1em 0 0;

  width: 100%;

  background-color: rgba(246, 246, 246, 0.7);
`;

const Body = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 1px solid rgba(171, 171, 171, 0.4);

  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`;

export const CellStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0;

  height: 100%;
  
  text-align: center;
  text-overflow: ellipsis
`;

const HeaderCell = styled(CellStyled)`
  padding: 2rem 1rem;
`;

const HeaderCellText = styled.span`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Table = (props:ITableP) => {
    const {data, children} = props;
    
    return (
        <>
            <Header>
                <Row>
                    {Object.keys(data[0]).map((key, i) =>
                        <HeaderCell key={i}>
                            <HeaderCellText>
                                {key}
                            </HeaderCellText>
                        </HeaderCell>)}
                </Row>
            </Header>
            <Body>
                {children}
            </Body>
        </>
    );
};