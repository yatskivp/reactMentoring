import * as React from 'react'
import UsersListTable from './users-list-table';

interface Props {}

class UsersListTableContainer extends React.Component {
  componentDidMount() {}

  render() {
    return <UsersListTable users={[]}/>
  }
};