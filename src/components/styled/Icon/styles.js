import { ReactSVG } from 'react-svg'
import styled, { css } from 'styled-components'
import { BorderRadius, flexCenterContent } from '../../../styles/mainTheme'

export const StyledSVGIcon = styled(ReactSVG)`
    & > div {
        ${flexCenterContent};
        width: ${(props) => `${props.size}px`};
        height: ${(props) => `${props.size}px`};
    }
    svg {
        display: flex;
        width: ${(props) => `${props.size}px`};
        height: ${(props) => `${props.size}px`};
        path {
            fill: ${(props) => props.color};
        }
    }
`

export const Container = styled.div`
    ${flexCenterContent};
    border-radius: ${BorderRadius.xs};
    cursor: pointer;

    ${({ size }) => css`
            height: ${size}px;
            width: ${size}px;
        `}

    ${({ variant, size, padding }) => variant === 'round'
        && css`
            border-radius: 100%;
            padding: ${variant === 'regular' ? 0 : padding || size}px;
        `}

  ${({ fill }) => fill
        && css`
            background-color: ${fill};
        `}
`
