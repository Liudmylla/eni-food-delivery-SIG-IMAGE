import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import Restaurants from '../pages/Restaurants'
import fakeDataJSON from './fakeData.json'

describe('Render page restaurant', () => {
  let originFetch
  // On simule le fetch
  beforeEach(() => {
    originFetch = global.fetch
  })
  afterEach(() => {
    global.fetch = originFetch
  })
  describe('When page is ready', () => {
    test('Restaurant is present', async () => {
      // On simule la donnée
      const mRes = { json: jest.fn().mockResolvedValueOnce(fakeDataJSON) }
      const mockedFetch = jest.fn().mockResolvedValueOnce(mRes)
      global.fetch = mockedFetch
      // On render notre page avec le MemoryRouter
      const { getAllByTestId } = render(
        <MemoryRouter>
          <Restaurants />
        </MemoryRouter>
      )
      // On attend le chargement des éléments
      const restaurants = await waitFor(() => getAllByTestId('restaurant'))
      // const restaurants = screen.getAllByTestId('restaurant')
      for (const e of restaurants) {
        expect(e).toBeInTheDocument()
      }
    })
  })
})
