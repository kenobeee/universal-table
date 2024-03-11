import React from 'react';
import styled from 'styled-components';
import {usePreviewData} from '@lib/hooks/usePreviewData';
import {Table} from '@components/common';

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
    const preview = usePreviewData();

    return (
        <Wrapper>
            <Border>
                {preview ? <Table {...preview}/> : <>loader</>}
            </Border>
        </Wrapper>
    );
};