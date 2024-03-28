import React, {ChangeEvent} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;

const Input = styled.input`
  padding: 0 10px;

  width: 100%;
  height: 60px;

  border: 1px solid #e0e0e0;
  border-radius: 6px;
`;

const Submit = styled.button`
  margin-top: 20px;

  width: 120px;
  height: 60px;

  border: 1px solid #e0e0e0;
  border-radius: 6px;

  cursor: pointer;
`;

type ItemEditP = {
    value:string,
    onUpdate:(value:string) => void
    onSave:() => void
};

export const TableCellEditModal = (props:ItemEditP) => {
    const {onUpdate, value, onSave} = props;

    return (
        <Wrapper>
            <Input
                value={value}
                onChange={(e:ChangeEvent<HTMLInputElement>) =>
                    onUpdate(e.currentTarget.value)}
                onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>) =>
                    e.key === 'Enter' && onSave()}/>
            <Submit onClick={onSave}>Save</Submit>
        </Wrapper>
    );
};