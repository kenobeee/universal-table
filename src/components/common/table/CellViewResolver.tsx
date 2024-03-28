import React from 'react';
import styled from 'styled-components';

import {formatDate} from '@lib/utils';

import {CellViewResolverT, TableType} from '@custom-types';

const BodyCellText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const StatusCircle = styled.span<{isActive:boolean}>`
  width: 1rem;
  height: 1rem;
  
  border-radius: 100%;
  border-width: .3rem;
  border-style: solid;
  border-color: ${props => props.isActive ? 'green' : 'orangered'};
`;

export const CellViewResolver:CellViewResolverT = {
    [TableType.pricePlans]: [
        {
            key: 'id',
            width: 5,
            render: (el) =>
                <BodyCellText>{el.id}</BodyCellText>
        },
        {
            key: 'description',
            width: 30,
            render: (el) =>
                <BodyCellText>{el.description}</BodyCellText>
        },
        {
            key: 'active',
            width: 5,
            render: (el) =>
                <StatusCircle isActive={el.active}/>
        },
        {
            key: 'createdAt',
            width: 20,
            render: (el) =>
                <BodyCellText>{formatDate(el.createdAt)}</BodyCellText>
        },
        {
            key: 'removedAt',
            width: 20,
            render: (el) =>
                <BodyCellText>{formatDate(el.removedAt)}</BodyCellText>
        }
    ],
    [TableType.products]: [
        {
            key: 'id',
            width: 5,
            render: (el) =>
                <BodyCellText>{el.id}</BodyCellText>
        },
        {
            key: 'name',
            width: 30,
            render: (el) =>
                <BodyCellText>{el.name}</BodyCellText>
        },
        {
            key: 'active',
            width: 5,
            render: (el) =>
                <StatusCircle isActive={el.active}/>
        },
        {
            key: 'createdAt',
            width: 20,
            render: (el) =>
                <BodyCellText>{formatDate(el.createdAt)}</BodyCellText>
        },
        {
            key: 'options',
            width: 30,
            render: (el) =>
                <BodyCellText>{
                    Object.entries(el.options)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join(', ')}
                </BodyCellText>
        }
    ],
    [TableType.pages]: [
        {
            key: 'id',
            width: 5,
            render: (el) =>
                <BodyCellText>{el.id}</BodyCellText>
        },
        {
            key: 'title',
            width: 30,
            render: (el) =>
                <BodyCellText>{el.title}</BodyCellText>
        },
        {
            key: 'active',
            width: 5,
            render: (el) =>
                <StatusCircle isActive={el.active}/>
        },
        {
            key: 'publishedAt',
            width: 20,
            render: (el) =>
                <BodyCellText>{formatDate(el.publishedAt)}</BodyCellText>
        },
        {
            key: 'updatedAt',
            width: 20,
            render: (el) =>
                <BodyCellText>{formatDate(el.updatedAt)}</BodyCellText>
        }
    ]
};