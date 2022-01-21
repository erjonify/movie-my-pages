import { css } from 'styled-components'

const appTheme = {
    FontPrimary:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',  sans-serif",
}

export const sizes = {
    hd: 1440,
    desktopLg: 1240,
    desktop: 1064,
    tablet: 768,
    phoneLg: 510,
    phone: 374,
    phoneSm: 320,
}

export const Spacing = {
    xs: '5px',
    sm: '10px',
    md: '15px',
    lg: '20px',
    xl: '25px',
    '2xl': '30px',
}

export const BorderRadius = {
    xs: '5px',
    sm: '10px',
    round: '50%',
}

export const FontSize = {
    '2xs': '10px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
}

export const Color = {
    White: '#fff',
    Black: '#000',
    LightBlack: '#232323',
    DarkGrey: '#282828',
    Grey: '#404040',
    MiddleGrey: '#fbf3f317',
    LightGrey: '#404040',
    Wine: '#440b0b',
    LightWine: '#442323',
    GrayScaleRed: '#c41e243d',
    GrayScaleOrange: '#f28d1a57',
    Yellow: '#FECD00',
}

export const IconSize = {
    '4xs': 5,
    '3xs': 8,
    '2xs': 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 22,
    '3xl': 24,
    '4xl': 26,
    '5xl': 28,
    '6xl': 30,
    '7xl': 32,
}

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
const calcEm = (pixels) => `${pixels / 16}em`

const customQueries = {
    phoneSmToLg: `@media (max-width:${calcEm(
        sizes.phoneLg
    )}) and (min-width:${calcEm(sizes.phoneSm)})`,
    phoneSmToTablet: `@media (max-width:${calcEm(
        sizes.phoneSm
    )}) and (min-width:${calcEm(sizes.tablet)})`,
}

export const media = Object.keys(sizes).reduce((accumulator, size) => {
    accumulator[size] = `@media (min-width: ${calcEm(sizes[size])})`
    return accumulator
}, customQueries)

export const flexCenterContent = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const hexToRgbA = (hex, alpha) => {
    let c
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('')
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]]
        }
        c = `0x${c.join('')}`
        return (
            `rgba(${
            [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')
            },${
            alpha
            })`
        )
    }
    throw new Error('Bad Hex')
}

export const cloudyShadow = (color) => css`
        box-shadow: 0 0 ${Spacing.lg} ${Spacing.lg} ${hexToRgbA(color, '48%')};
        background-color: ${hexToRgbA(color, '50%')};
        border-radius: 20%;
    `

export default appTheme
