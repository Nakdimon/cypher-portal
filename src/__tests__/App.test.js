import React from 'react';
import App from '../components/app/App';
import {
  shallow,
  mount
} from '../enzyme'

describe("App component: ", () => {
  it("Should render.", () => {
    const component = shallow( < App / > )
    expect(component.exists()).toBe(true)
  })

  it("Should match the snapshot.", () => {
    const component = shallow( < App / > )
    expect(component).toMatchSnapshot();
  })

})