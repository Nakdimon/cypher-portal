import React from 'react';
import TextArea from '../components/textArea/TextArea';
import { shallow }  from '../enzyme'

const handleTextAreaChange = jest.fn()

describe("Text area component: ", ()=> {
  it("Matches the snapshot", () => {
    const component = shallow(
      <TextArea
        isTextAreaDisabled={false}
        handleTextAreaChange={handleTextAreaChange}
      />
    )
    expect(component).toMatchSnapshot();
  }),

  it("Renders", () => {
    const component = shallow(
      <TextArea
        isTextAreaDisabled={false}
        handleTextAreaChange={handleTextAreaChange}
      />
    )
    expect(component.exists()).toBe(true)
  }),

  it("Runs handler when changed", () => {
    const component = shallow (
        <TextArea
          isTextAreaDisabled={false}
          handleTextAreaChange={handleTextAreaChange}
        />
      )
    
    const event = { 
        preventDefault() {}, 
        target: {value: 'change'} 
    }

    component.find('textarea').simulate('change', event)
    
    expect(handleTextAreaChange).toBeCalledWith(event);
  })
})