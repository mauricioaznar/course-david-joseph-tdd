import React from 'react'
import {shallow} from 'enzyme'
import App from './App.js'

describe('App', () => {
  const app = shallow(<App />)

  it('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('Contains a connected Wallet component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true)
  })

  it('Contains a connected Loot component', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true)
  })
})
