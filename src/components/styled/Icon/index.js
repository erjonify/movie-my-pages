import React from 'react'
import PropTypes from 'prop-types'
import { StyledSVGIcon, Container } from './styles'
import { Color } from '../../../styles/mainTheme'

function Icon(props) {
  const {
    src,
    color = Color.White,
    size = 20,
    title,
    variant = 'regular',
    fill,
    padding,
  } = props

  return (
    <Container variant={variant} fill={fill} size={size} padding={padding}>
      <StyledSVGIcon src={src} color={color} size={size} title={title} />
    </Container>
  )
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  color: PropTypes.string,
  fill: PropTypes.string,
  size: PropTypes.number,
  padding: PropTypes.number,
  title: PropTypes.string,
  variant: PropTypes.oneOf(['round', 'regular']),
}

export default Icon
