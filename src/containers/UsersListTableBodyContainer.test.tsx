import React from 'react';
import { shallow, mount } from 'enzyme';
import { UsersListTableBodyContainer } from './UsersListTableBodyContainer';

describe('render UsersListTableBodyContainer', () => {
    const usersMock = [{"address":"9529 Westminster Drive Parks","email":"veniam@hotmail.com","gender":"male","id":"lefty-breeze","lname":"Steuber","mobile":"916-783-0979","name":"Adrain"}];
    
    const getUsers = jest.fn();
    const selectUser = jest.fn();

  it('call children prop', () => {
    const childrenMock = jest.fn();
    const handleRowClickMock = jest.fn();
    const wrapper = shallow(
      <UsersListTableBodyContainer
        getUsers={getUsers}
        selectUser={selectUser}
      >
          {childrenMock(usersMock, handleRowClickMock)}
      </UsersListTableBodyContainer>);
    
    expect(childrenMock).toHaveBeenCalledWith(usersMock, handleRowClickMock);
  });

  it('component will unmount', () => {
    const componentDidMountSpy = jest.spyOn(UsersListTableBodyContainer.prototype, 'componentDidMount');

    const wrapper = mount(<UsersListTableBodyContainer
      getUsers={getUsers}
      selectUser={selectUser}
    />);

    expect(componentDidMountSpy).toHaveBeenCalled();

    componentDidMountSpy.mockReset();
    componentDidMountSpy.mockRestore();
  });
});