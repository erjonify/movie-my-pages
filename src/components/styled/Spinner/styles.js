import styled, { css, keyframes } from 'styled-components'
import {
 Color, FontSize, hexToRgbA, Spacing
} from '../../../styles/mainTheme'

const SpinnerKeyFrames = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`
export const Spinner = styled.div`
    font-size: ${FontSize['2xs']};
    position: relative;
    text-indent: -9999em;

    ${({ size, color }) => {
        const borderWidth = size / 2 || 15
        const mainColor = color || Color.White

        return css`
            border-top: ${borderWidth}px solid ${hexToRgbA(mainColor, 0.5)};
            border-right: ${borderWidth}px solid ${hexToRgbA(mainColor, 0.5)};
            border-bottom: ${borderWidth}px solid ${hexToRgbA(mainColor, 0.5)};
            border-left: ${borderWidth}px solid ${mainColor};
        `
    }}

    transform: translateZ(0);
    animation: ${SpinnerKeyFrames} 1.1s infinite linear;
    border-radius: 50%;
    width: ${({ size }) => size || Spacing.xs * 5}px;
    height: ${({ size }) => size || Spacing.xs * 5}px;

    &:after {
        border-radius: 50%;
        width: ${({ size }) => size || Spacing.xs * 5}px;
        height: ${({ size }) => size || Spacing.xs * 5}px;
    }
`
