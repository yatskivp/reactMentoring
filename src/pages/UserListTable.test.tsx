import React from 'react';
import { shallow } from 'enzyme';
import { UsersListTable } from './UsersListTable';

it('render tableContainer', () => {
  const handleFormVisibility = jest.fn();

  const tableContainer = shallow(<UsersListTable handleFormVisibility={handleFormVisibility} />);

  expect(tableContainer.find('div[className*="tableContainer"]')).toHaveLength(1);
});