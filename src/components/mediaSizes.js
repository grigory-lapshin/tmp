import { css } from 'styled-components'

const sizes = {
  xldesktop: 1692,
  ldesktop: 1224,
  desktop: 992,
  tablet: 768,
  phone: 576,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})

export default media
