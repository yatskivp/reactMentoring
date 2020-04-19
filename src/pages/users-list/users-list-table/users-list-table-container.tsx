import * as React from 'react'
import {connect} from 'react-redux';
import UsersListTable from './users-list-table';
import {UsersInt} from '../../../interfaces/users-interface';
import {doFetch} from '../../../utils';

interface Props {
  users?: []
};

class UsersListTableContainer extends React.Component<Props & UsersInt, UsersInt> {
  static defaultProps: Props;
  
  componentDidMount() {
    doFetch(this.getUsersListPayload(), {url: 'https://app.fakejson.com/q'})
    .then(res => {console.log(res)});
  }

  getUsersListPayload = () => {
    return {
      "token": "i6-5QRXnpgryAQmFnzczFg",
      "data": {
        "id": "personNickname",
        "email": "internetEmail",
        "gender": "personGender",
        "last_login": {
          "date_time": "dateTime|UNIX",
          "ip4": "internetIP4"
        },
        "_repeat": 15
      }
    };
  }

  render() {
    return <UsersListTable users={this.props.users}/>
  }
};

UsersListTableContainer.defaultProps = {
  users: [],
};

const mapSateToProps = (state: UsersInt) => ({
  users: state.users
});

export default connect(mapSateToProps, null)(UsersListTableContainer);