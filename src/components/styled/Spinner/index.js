import React from 'react'
import PropTypes from 'prop-types'

import { Spinner as SpinnerComponent } from './styles'

export function Spinner({ color, size }) {
  return <SpinnerComponent size={size} color={color} />
}

Spinner.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
}
