import styled from 'styled-components';
import React from 'react';

import {CellStyled} from '../../Table';

import {formatDate, isDateString} from '@lib/utils';

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

type CellP = {
    value:any
};

export const Cell = (props:CellP) => {
    const {value} = props;

    const render = () => {
        switch (typeof value) {
            case 'boolean': return <StatusCircle isActive={value}/>;
            case 'object':
                return Object.entries(value)
                    .map(([key, value]) => `${key}: ${value}`)
                    .join(', ');
            default: {
                let presentableValue = value;

                const isDateType = isDateString(value as string);

                if (isDateType) presentableValue = formatDate(value);
                
                return <BodyCellText>{presentableValue}</BodyCellText>;
            }
        }
    };

    return <BodyCell>{render()}</BodyCell>;
};