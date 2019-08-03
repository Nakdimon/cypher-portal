import React from 'react';
import App from '../components/app/App';
import {
  shallow, mount
} from '../enzyme'

import axios from 'axios'

jest.mock('axios')

describe("App component: ", () => {
  it("Should render.", () => {
    const component = shallow( < App /> )
    expect(component.exists()).toBe(true)
  })

  it("Should match the snapshot.", () => {
    const component = shallow( < App /> )
    expect(component).toMatchSnapshot();
  })
})

describe("Select child: ", () => {
  it("Should enable the textarea on select change.", ()=> {
    const component = mount(< App />)
    
    const event = {
      preventDefault() {},
      target: {
          value: 'event'
      }
    }
    component.find('select').simulate('change', event)
    expect(component.find('textarea').prop('disabled')).toBe(false)
  })
})

describe("TextArea child: ", () => {
  it("Should keep button disabled until changed.", () => {
    const component = mount(< App />)
    
    const event = {
      preventDefault() {},
      target: {
          value: 'event'
      }
    }

    expect(component.find('a.disabled').exists()).toBe(true)
    
    component.find('textarea').simulate('change', event)

    expect(component.find('a.disabled').exists()).toBe(false)
  })

  it("Should enable button when changed and disable it again if cleared.", () => {
    const component = mount(< App />)
    
    const event = {
      preventDefault() {},
      target: {
          value: 'event'
      }
    }

    const emptyEvent = {
      preventDefault() {},
      target: {
          value: ''
      }
    }

    component.find('textarea').simulate('change', event)
    
    expect(component.find('a.disabled').exists()).toBe(false)

    component.find('textarea').simulate('change', emptyEvent)

    expect(component.find('a.disabled').exists()).toBe(true)
    
  })
})

describe("Button child: ", () => {
  it('Should be disabled by default.', () => {
    const component = mount(< App />)

    expect(component.find('a.disabled').exists()).toBe(true)
  })

  it('Should change label if textarea input is not valid. ', () => {
    const component = mount(< App />)

    const invalidInputEvent = {
      preventDefault() {},
      target: {
          value: '1234'
      }
    }

    component.find('textarea').simulate('change', invalidInputEvent)

    component.find('a').simulate('click')

    expect(component.find('label.cypher-result').text()).toBe('That\'s not a valid string :/')

  })

  it('Should make request to server when input is valid ', () => {
    const getSpy = jest.spyOn(axios, 'get')
    const component = mount(< App />)
    
    
    const event = {
      preventDefault() {},
      target: {
          value: 'request'
      }
    }    

    component.find('textarea').simulate('change', event)
    
    component.find('a').simulate('click')

    expect(getSpy).toBeCalled()
  })
})