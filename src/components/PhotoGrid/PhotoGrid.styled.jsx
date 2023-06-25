import styled, { css } from 'styled-components'
import { desktop, mobile, tablet } from '~/styles/breakpoints'

const Styled = {
  PhotoGrid: styled.ul`
    display: grid;
    padding: 0;
    ${mobile(css`
      grid-template-columns: 1fr;
    `)};

    ${tablet(css`
      grid-template-columns: 1fr 1fr;
    `)};

    ${desktop(css`
      grid-template-columns: 1fr 1fr 1fr 1fr;
    `)};
  `,
  Error: styled.div`
    display: flex;
    justify-content: center;
  `,
  Message: styled.h1`
    color: var(--typography-error);
  `,
}

Styled.Error.Message = Styled.Message

export default Styled
