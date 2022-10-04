import { Row, Col } from 'antd'
import styled, { css } from 'styled-components'

export const TodoRow = styled(Row)`
  padding: 0.5rem;
`

export const TodoCol = styled<{ complete?: boolean } | any>(
  Col
)`
  font-size: 1rem;
  display: flex;
  justify-content: space-around;

  &:first-child {
    justify-content: flex-start;

    ${(props) => {
      if (props.complete) {
        return css`
          text-decoration: line-through;
        `
      }
    }}
  }
`
