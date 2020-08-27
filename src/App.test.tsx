import { render } from '@testing-library/react'
import React from 'react'
import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const paragraphElement = getByText(
    /Hannah & Andrew are getting married on the 9th October 2021./i,
  )
  expect(paragraphElement).toBeInTheDocument()
})
