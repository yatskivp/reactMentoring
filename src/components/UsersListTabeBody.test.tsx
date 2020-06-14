import React from 'react';
import { shallow } from 'enzyme';
import UsersListTableBody from './UsersListTableBody';

it('render rows', () => {
  const handlerMock = jest.fn();
  const columnsMock = [{id: 'test', label: 'test'}, {id: 'test1', label: 'test1'}];
  const usersMock = [{"address":"9529 Westminster Drive Parks","email":"veniam@hotmail.com","gender":"male","id":"lefty-breeze","lname":"Steuber","mobile":"916-783-0979","name":"Adrain"}];    
  
  const TableBodywrapper = shallow(<UsersListTableBody handleFormVisibility={handlerMock} columns={columnsMock} />)
    .renderProp('children')([usersMock, handlerMock]);

  expect(TableBodywrapper).toHaveLength(1);
});
