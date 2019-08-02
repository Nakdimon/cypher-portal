import React from 'react';
import { create } from 'react-test-renderer';
import Select from '../components/select/Select';
import cypherOptionList from '../assets/cypherOptionList.json'

const handleSelectChange = () => 'dummyHandleSelectChange'

describe("Select component: ", ()=> {
  it("Matches the snapshot", () => {
    const select = create(
      <Select
        cypherOptionList={cypherOptionList} 
        handleSelectChange={handleSelectChange}
      />
    )
    expect(select).toMatchSnapshot();
  })
})
