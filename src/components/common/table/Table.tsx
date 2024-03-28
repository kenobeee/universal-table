import React, {useMemo} from 'react';
import styled from 'styled-components';

import {CellViewResolver} from '@components/common/table/CellViewResolver';

import {CommonTableData, TableType} from '@custom-types';

type ITableP = {
    data:CommonTableData[],
    type:TableType,
    updatingHandler:(row:CommonTableData) => void
};

const Wrapper = styled.section`
  margin: 0 auto;
  
  width: 80%;
`;

const Header = styled.div`
  width: 100%;

  background-color: rgba(246, 246, 246, 0.7);
  border-radius: 1em 1em 0 0;
`;

const Body = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  position: relative;
  
  display: flex;
  align-items: center;

  padding-right: 60px;
  border-bottom: 1px solid rgba(171, 171, 171, 0.4);

  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`;

export const CellStyled = styled.div<{width:number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  //flex: 1 1 0;

  width: ${props => props.width + '%'};
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

const BodyCell = styled(CellStyled)`
  padding: 1rem;
`;

export const EditBtn = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-100%, -50%);
  
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px 10px;

  background-color: #d7d7d7;
  border-radius: 4px;

  color: #fff;

  cursor: pointer;
`;

export const Table = (props:ITableP) => {
    const {data, type, updatingHandler} = props;

    const resolver = useMemo(() => CellViewResolver[type], [type]);
    
    return (
        <Wrapper>
            <Header>
                <Row>
                    {resolver.map(cell =>
                        <HeaderCell key={cell.key} width={cell.width}>
                            <HeaderCellText>{cell.key}</HeaderCellText></HeaderCell>)}
                </Row>
            </Header>
            <Body>
                {data.map(row =>
                    <Row key={row.id}>
                        {resolver.map(cell =>
                            <BodyCell key={cell.key} width={cell.width}>{cell.render(row as any)}</BodyCell>)}
                        <EditBtn onClick={() => updatingHandler(row)}>Edit</EditBtn>
                    </Row>)}
            </Body>
        </Wrapper>
    );
};