import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

const Header = styled.header`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: var(--type-large);
`

function App() {
  return (
    <Container>
      <Header>
        <p>Hannah & Andrew are getting married on the 9th October 2021.</p>
      </Header>
    </Container>
  )
}

export default App
