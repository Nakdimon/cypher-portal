import React from 'react';
import App from '../components/app/App';
import { shallow }  from '../enzyme'

describe("App component: ", ()=> { 
  it("Renders.", () => {
    const component = shallow(<App />)
    expect(component.exists()).toBe(true)
  }),

  it("Matches the snapshot.", () => {
    const component = shallow(<App />)
    expect(component).toMatchSnapshot();
  })
})
