import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const VisuallyHidden = forwardRef(({ as, ...props }, ref) => {
  const Component = as

  return <Component {...props} ref={ref} />
})

VisuallyHidden.defaultProps = {
  as: 'h1',
}

VisuallyHidden.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
}

VisuallyHidden.displayName = 'VisuallyHidden'

const StyledVisuallyHidden = styled(VisuallyHidden)`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export default StyledVisuallyHidden
