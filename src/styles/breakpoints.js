import { css } from 'styled-components'

const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1000px',
}

export const mobile = (inner) => css`
  @media (min-width: ${size.mobile}) {
    ${inner};
  }
`
export const tablet = (inner) => css`
  @media (min-width: ${size.tablet}) {
    ${inner};
  }
`
export const desktop = (inner) => css`
  @media (min-width: ${size.desktop}) {
    ${inner};
  }
`
