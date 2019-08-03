import React from 'react';
import {
    shallow,
    mount
} from '../enzyme'
import Button from '../components/button/Button';

const handleCypherAction = jest.fn()

describe("Button component: ", () => {
    it("Matches the snapshot", () => {
        const component = shallow( <
            Button isRequestButtonDisabled = {
                false
            }
            handleCypherAction = {
                handleCypherAction
            }
            />
        )
        expect(component).toMatchSnapshot();
    })

    it("Should render", () => {
        const component = shallow( <
            Button isRequestButtonDisabled = {
                false
            }
            handleCypherAction = {
                handleCypherAction
            }
            />
        )
        expect(component.exists()).toBe(true)
    })

    it("Should call handler when clicked", () => {
        const component = shallow( <
            Button isRequestButtonDisabled = {
                false
            }
            handleCypherAction = {
                handleCypherAction
            }
            />
        )

        component.find('a').simulate('click')

        expect(handleCypherAction.mock.calls.length).toEqual(1)
    })
})