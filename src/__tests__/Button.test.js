import React from 'react';
import { create } from 'react-test-renderer';
import Button from '../components/button/Button';

const handleCypherAction = () => 'dummyHandleCypherAction'

describe("Button component: ", ()=> {
  it("Matches the snapshot", () => {
    const button = create(
      <Button
        isRequestButtonDisabled={false}
        handleCypherAction={handleCypherAction}
      />
    )
    expect(button).toMatchSnapshot();
  })
})