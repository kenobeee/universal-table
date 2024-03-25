import styled from 'styled-components';
import React from 'react';
import {CellStyled} from '../../Table';

const BodyCell = styled(CellStyled)`
  padding: 1rem;
`;

const StatusCircle = styled.span<{isActive:boolean}>`
  width: 1rem;
  height: 1rem;
  
  border-radius: 100%;
  border-width: .3rem;
  border-style: solid;
  border-color: ${props => props.isActive ? 'green' : 'orangered'};
`;

const BodyCellText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const EditBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px 10px;

  background-color: #d7d7d7;
  border-radius: 4px;

  color: #fff;

  cursor: pointer;
`;

type CellP = {
    value:any
};

export const Cell = (props:CellP) => {
    const {value} = props;

    const render = () => {
        switch (typeof value) {
            case 'boolean': return <StatusCircle isActive={value}/>;
            case 'object': return value ? JSON.stringify(value) : '';
            default: return <BodyCellText>{value}</BodyCellText>;
        }
    };

    return <BodyCell>{render()}</BodyCell>;
};