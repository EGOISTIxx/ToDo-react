import styled from 'styled-components'

export const TodoPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormBody = styled.div`
  display: flex;
  column-gap: 0.5rem;

  & > :first-child {
    width: 100%;
  }
`
