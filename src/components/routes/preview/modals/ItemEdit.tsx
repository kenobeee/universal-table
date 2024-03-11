import React, {ChangeEvent} from 'react';
import styled from 'styled-components';

import {PreviewData} from '@lib/hooks/usePreviewData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 20px;
`;

const Submit = styled.button`
  width: 120px;
  height: 60px;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
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