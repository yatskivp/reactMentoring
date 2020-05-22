import * as React from 'react'
import { connect } from 'react-redux';
import { IUser } from '../store/users-list/types';
import { initState } from '../store/users-list/reducer';
import { editUser } from '../store/users-list/actions';
import { IStore } from '../store'; 

interface IProps {
  children?: (
    user: IUser, handleSaveBtnClick: () => void, handleCancleBtnClick: () => void, handleChangeValue: (event: React.SyntheticEvent) => void) => React.ReactElement,
  selectedUser: IUser,
}

interface IMapDispatchToProps {
  editUser: (payload: Object) => void
};

interface IState {
  editedUser: IUser
}

class SelectedUserFormContainer extends React.Component<IProps & IMapDispatchToProps, IState> {
  static defaultProps: IProps;

  constructor(props: IProps & IMapDispatchToProps) {
    super(props);

    this.state = {
      editedUser: { ...this.props.selectedUser },
    };
  }
  
  handleSaveBtnClick = () => {
    const { editUser } = this.props;

    editUser(this.state.editedUser);
  }

  handleCancleBtnClick = () => {
    const { editUser, selectedUser } = this.props;

    this.setState({editedUser: { ...selectedUser }});
  
    editUser(selectedUser);
  }

  handleChangeValue = ({ target }: React.SyntheticEvent) => {
    const { value, name } = target as HTMLInputElement;
    this.setState(state => ({editedUser: { ...state.editedUser, [name]: value }}));
  };

  render() {
    if (this.props.children) {
      return this.props.children(this.state.editedUser, this.handleSaveBtnClick, this.handleCancleBtnClick, this.handleChangeValue);
    }

    return null;
  }
};

SelectedUserFormContainer.defaultProps = {
  selectedUser: initState.selectedUser,
};

const mapSateToProps = (state: IStore) => ({
  selectedUser: state.users.selectedUser,
});

const mapDispatchToProps: IMapDispatchToProps = {
  editUser,
};

export default connect(mapSateToProps, mapDispatchToProps)(SelectedUserFormContainer);