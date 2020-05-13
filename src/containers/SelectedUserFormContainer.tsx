import * as React from 'react'
import { connect } from 'react-redux';
import { IUser } from '../store/users-list/types';
import { initState } from '../store/users-list/reducer';
import { IState } from '../store'; 

interface IProps {
  children?: (user: IUser) => React.ReactElement,
  selectedUser: IUser,
}

class SelectedUserFormContainer extends React.Component<IProps> {
  static defaultProps: IProps;  

  render() {
    if (this.props.children) {
      return this.props.children(this.props.selectedUser);
    }

    return null;
  }
};

SelectedUserFormContainer.defaultProps = {
  selectedUser: initState.selectedUser,
};

const mapSateToProps = (state: IState) => ({
  selectedUser: state.users.selectedUser,
});

export default connect(mapSateToProps, null)(SelectedUserFormContainer);