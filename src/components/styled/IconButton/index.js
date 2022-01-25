import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styles'
import Icon from '../Icon'

function IconButton(props) {
  const { onClick, classname } = props

  return (
    <Button classname={classname} onClick={onClick}>
      <Icon {...props} />
    </Button>
  )
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  src: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  title: PropTypes.string,
  fill: PropTypes.string,
  classname: PropTypes.string,
  variant: PropTypes.oneOf(['round', 'default']),
}

export default IconButton
