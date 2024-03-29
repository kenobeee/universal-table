import React, {ChangeEvent} from 'react';
import styled from 'styled-components';

import {PreviewData} from '@lib/hooks/usePreviewData';

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
    mutatedFields:PreviewData['mutatedFields']
    inputHandler:(value:string) => void
    finishUpdateField:PreviewData['finishUpdateField']
};

export const ItemEdit = (props:ItemEditP) => {
    const {mutatedFields, finishUpdateField, inputHandler} = props;

    return (
        <Wrapper>
            <Input
                value={mutatedFields?.value}
                onChange={(e:ChangeEvent<HTMLInputElement>) =>
                    inputHandler(e.currentTarget.value)}/>
            <Submit onClick={finishUpdateField}>Save</Submit>
        </Wrapper>
    );
};