import React from 'react';
import styled from 'styled-components';

import {ModalWrapper, Table} from '@components/common';
import {ItemEdit} from './modals';

import {usePreviewData} from '@lib/hooks/usePreviewData';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
`;

const Border = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 90%;
`;

export const Preview = () => {
    const {data, mutatedFields, setMutatedFields, startUpdateField, finishUpdateField} = usePreviewData();

    return (
        <>
            <Wrapper>
                <Border>
                    {data
                        ? <Table {...data} startUpdateField={startUpdateField}/>
                        : <>loader</>}
                </Border>
            </Wrapper>
            <ModalWrapper
                isOpened={!!mutatedFields}
                onClose={() => setMutatedFields(null)}>
                <ItemEdit
                    mutatedFields={mutatedFields}
                    finishUpdateField={finishUpdateField}
                    inputHandler={(value) => {
                        if (mutatedFields) {
                            setMutatedFields({...mutatedFields, value});
                        }
                    }}/>
            </ModalWrapper>
        </>
    );
};