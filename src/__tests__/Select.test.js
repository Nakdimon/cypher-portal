import React from 'react';
import {
    shallow
} from '../enzyme'
import Select from '../components/select/Select';
import cypherOptionList from '../assets/cypherOptionList.json'

const handleSelectChange = jest.fn()

describe("Select component: ", () => {
    it("Should match the snapshot", () => {
        const component = shallow( <
            Select cypherOptionList = {
                cypherOptionList
            }
            handleSelectChange = {
                handleSelectChange
            }
            />
        )
        expect(component).toMatchSnapshot();
    })

    it("Should render", () => {
        const component = shallow( <
            Select cypherOptionList = {
                cypherOptionList
            }
            handleSelectChange = {
                handleSelectChange
            }
            />
        )
        expect(component.exists()).toBe(true)
    })

    it("Should run handler when changed", () => {
        const component = shallow( <
            Select cypherOptionList = {
                cypherOptionList
            }
            handleSelectChange = {
                handleSelectChange
            }
            />
        )
        
        const event = {
            preventDefault() {},
            target: {
                value: 'event'
            }
        }

        component.find('select').simulate('change', event)

        expect(handleSelectChange.mock.calls.length).toEqual(1)
    })
})