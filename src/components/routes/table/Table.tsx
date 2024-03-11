import React, {useEffect, useMemo} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import {TableType} from '@store/type';
import {getPreviewData} from '@store/reducers/preview/async';
import {useDispatch, useSelector} from 'react-redux';
import {previewSelector} from '@store/reducers/preview/selectors';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  border-radius: 1em 1em 0 0;
  
  width: 100%;

  background-color: rgba(246, 246, 246, 0.7);
`;

const Body = styled.div`
  width: 100%;
`;

const Border = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 90%;
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
  //text-overflow: ellipsis
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
`;

const BodyCellText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

function formatDate(inputDate:Date):string {
    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

    return `${formattedDate}, ${formattedTime}`;
}

function isDateString(str:string):boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{1}Z$/;
    
    return dateRegex.test(str);
}

export const Table = () => {
    const {tableType} = useParams();
    const data = useSelector(previewSelector);
    const dispatcher = useDispatch();

    const [keys, rows] = useMemo(() => {
        if (data[tableType as TableType].length > 0) {
            const kk = data[tableType as TableType];

            const keys = Object.keys(kk[0]);
            const rows = kk.map((row) => Object.values(row));

            return [keys, rows];
        }

        return [[], []];
    }, [data]);

    useEffect(() => {
        if (tableType) {
            // @ts-ignore
            dispatcher(getPreviewData(tableType as TableType));
        }
    }, [tableType]);

    return (
        <Wrapper>
            <Border>
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
                                const isDateType = isDateString(cell as string);
                                const isStatusType = typeof cell === 'boolean';
                                const isNotPrimitive = typeof cell === 'object';

                                return <BodyCell key={j}>
                                    {isStatusType
                                        ? <StatusCircle isActive={cell as boolean}/>
                                        : <BodyCellText>
                                            {isNotPrimitive
                                                ? <>
                                                    {Object.entries(cell)
                                                        .map(([key, value]) => `${key}: ${value}`)
                                                        .join(', ')}
                                                </>
                                                : <>
                                                    {/*@ts-ignore*/}
                                                    {isDateType ? formatDate(cell) : cell}
                                                </>}
                                        </BodyCellText>}
                                </BodyCell>;
                            })}
                        </Row>
                    )}
                </Body>
            </Border>
        </Wrapper>
    );
};