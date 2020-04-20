import * as React from 'react'
import {connect} from 'react-redux';
import {getUsers} from '../store/users-list/actions';
import {IUser, IUsersListState} from '../store/users-list/types';

interface IProps extends IUsersListState {
  children?: (users: IUser[]) => React.ReactElement,
}

interface IMapDispatchToProps {
  getUsers: (payload: Object) => void
};

class UsersListTableBodyContainer extends React.Component<IProps & IMapDispatchToProps> {
  static defaultProps: IProps;
  
  componentDidMount() {
    this.props.getUsers(this.getUsersListPayload());
  }

  getUsersListPayload = () => {
    return {
      "token": process.env.REACT_APP_FAKE_JSON_TOKEN,
      "data": {
        "id": "personNickname",
        "name": "nameFirst",
        "lname": "nameLast",
        "email": "internetEmail",
        "gender": "personGender",
        "loginInfo": {
          "dateTime": "dateTime|UNIX",
          "ipv4": "internetIP4"
        },
        "_repeat": 10
      }
    }
  }

  render() {
    if (this.props.children) {
      return this.props.children(this.props.users);
    }

    return null;
  }
};

UsersListTableBodyContainer.defaultProps = {
  users: [],
};

const mapSateToProps = (state: any) => ({
  users: state.users.users,
});

const mapDispatchToProps: IMapDispatchToProps = {
  getUsers
};

export default connect(mapSateToProps, mapDispatchToProps)(UsersListTableBodyContainer);