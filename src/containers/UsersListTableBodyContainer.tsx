import * as React from 'react'
import { connect } from 'react-redux';
import { getUsers, selectUser } from '../store/users-list/actions';
import { IUser } from '../store/users-list/types';
import { IStore } from '../store'; 

interface IProps {
  children?: (users: IUser[], handler: (row: IUser, cb: (isFormVisible: boolean) => void) => void) => React.ReactElement,
  users: IUser[],
  isFormVisible?: boolean,
}

interface IMapDispatchToProps {
  getUsers: () => void,
  selectUser: (user: IUser) => void,
};

class UsersListTableBodyContainer extends React.Component<IProps & IMapDispatchToProps> {
  static defaultProps: IProps;
  
  componentDidMount() {
    this.props.getUsers();
  }

  handleRowClick = (row: IUser, handleFormVisibility: (isFormVisible: boolean) => void) => {
    this.props.selectUser(row);
    handleFormVisibility(true);
  }

  render() {
    if (this.props.children) {
      return this.props.children(this.props.users, this.handleRowClick);
    }

    return null;
  }
};

UsersListTableBodyContainer.defaultProps = {
  users: [],
  isFormVisible: false,
};

const mapSateToProps = (state: IStore) => ({
  users: state.users.users,
  isFormVisible: state.users.isUserSelected,
});

const mapDispatchToProps: IMapDispatchToProps = {
  getUsers,
  selectUser,
};

export default connect(mapSateToProps, mapDispatchToProps)(UsersListTableBodyContainer);