import styled, { css } from 'styled-components';
import { Property } from 'csstype';

export interface IGridLayoutProps {
    $gridTemplate?: Property.GridTemplate;
    $gridTemplateColumns?: Property.GridTemplateColumns;
    $gridGap?: Property.GridGap;
    $gridFlow?: Property.GridAutoFlow;
    $placeItems?: Property.PlaceItems;
    $placeContent?: Property.PlaceContent;
    $height?: Property.Height;
    $width?: Property.Width;
    $inline?: boolean;
    $padding?: Property.Padding;
    $boxSizing?: Property.BoxSizing;
    $overflow?: Property.Overflow;
}

export const GridLayout = styled.div<IGridLayoutProps>`
    display: ${({ $inline }) => ($inline ? 'inline-grid' : 'grid')};
    ${({ $gridTemplate }) => $gridTemplate && css`
        grid-template: ${$gridTemplate};
    `};
    ${({ $gridFlow }) => $gridFlow && css`
        grid-auto-flow: ${$gridFlow};
    `};
    ${({ $gridGap }) => $gridGap && css`
        grid-gap: ${$gridGap};
    `};
    ${({ $gridTemplateColumns }) => $gridTemplateColumns && css`
        grid-template-columns: ${$gridTemplateColumns};
    `};
    ${({ $placeItems }) => $placeItems && css`
        place-items: ${$placeItems};
    `};
    ${({ $placeContent }) => $placeContent && css`
        place-content: ${$placeContent};
    `};
    ${({ $height }) => $height && css`
        height: ${$height};
    `};
    ${({ $width }) => $width && css`
        width: ${$width};
    `};
    ${({ $padding }) => $padding && css`
        padding: ${$padding};
    `};
    ${({ $boxSizing }) => $boxSizing && css`
        box-sizing: ${$boxSizing};
    `};
    ${({ $overflow }) => $overflow && css`
        overflow: ${$overflow};
    `};
`;
