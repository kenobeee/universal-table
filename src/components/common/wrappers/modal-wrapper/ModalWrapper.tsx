import React, {ReactNode} from 'react';
import styled from 'styled-components';

const Outer = styled.div<{isOpened:boolean}>`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.2);

  z-index: 9;
  
  opacity: ${props => props.isOpened ? '1' : '0'};
  visibility: ${props => props.isOpened ? 'visible' : 'hidden'};
  
  transition: .3s;
  
  cursor: pointer;
`;

const Inner = styled.div`
  width: 600px;
  height: 400px;

  background-color: #fff;
  
  border-radius: 12px;

  cursor: auto;
`;

type ModalWrapperP = {
    children:ReactNode,
    onClose:() => void,
    isOpened:boolean
};

export const ModalWrapper = (props:ModalWrapperP) => {
    const {children, onClose, isOpened} = props;

    return (
        <Outer isOpened={isOpened} onClick={(e:React.MouseEvent) => e.target === e.currentTarget && onClose()}>
            <Inner>
                {children}
            </Inner>
        </Outer>
    );
};