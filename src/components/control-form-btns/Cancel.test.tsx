import React from 'react';
import { shallow } from 'enzyme';
import CancelBtn from './Cancel';

it('render Cancel button', () => {
  const handleCancleBtnClick = jest.fn();

  expect(
    shallow(<CancelBtn handleCancleBtnClick={handleCancleBtnClick}/>).text()
  ).toBe('Cancel'); 
});