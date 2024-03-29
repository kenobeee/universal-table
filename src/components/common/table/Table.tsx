import React from 'react';
import styled from 'styled-components';
import {PreviewData} from '@lib/hooks/usePreviewData';

const Header = styled.div`
  border-radius: 1em 1em 0 0;
  
  width: 100%;

  background-color: rgba(246, 246, 246, 0.7);
`;

const Body = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 1px solid rgba(171, 171, 171, 0.4);

  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`;

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0;

  height: 100%;
  
  text-align: center;
  text-overflow: ellipsis
`;

const HeaderCell = styled(Cell)`
  padding: 2rem 1rem;
`;

const BodyCell = styled(Cell)`
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

const HeaderCellText = styled.span`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
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

type TableP = {
  keys:string[],
  rows:(string | null | boolean)[][],
  startUpdateField:PreviewData['startUpdateField']
};

export const Table = (props:TableP) => {
    const {keys, rows, startUpdateField} = props;

    return (
        <>
            <Header>
                <Row>
                    {keys.map((key, i) =>
                        <HeaderCell key={i}>
                            <HeaderCellText>
                                {key}
                            </HeaderCellText>
                        </HeaderCell>)}
                </Row>
            </Header>
            <Body>
                {rows.map((row, i) =>
                    <Row key={i}>
                        {row.map((cell, j) => {
                            const isStatusType = typeof cell === 'boolean';
                            const isEditBtn = j === row.length - 1 && cell === 'edit';

                            return <BodyCell key={j}>
                                {isStatusType
                                    ? <StatusCircle isActive={cell as boolean}/>
                                    : <BodyCellText>
                                        {isEditBtn
                                            ? <EditBtn onClick={() => startUpdateField(i)}>{cell}</EditBtn>
                                            : cell}
                                    </BodyCellText>}
                            </BodyCell>;
                        })}
                    </Row>
                )}
            </Body>
        </>
    );
};