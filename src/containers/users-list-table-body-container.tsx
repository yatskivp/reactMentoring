import * as React from 'react'
import { connect } from 'react-redux';
import { getUsers, selectUser } from '../store/users-list/actions';
import { IUser } from '../store/users-list/types';
import { IState } from '../store'; 

interface IProps {
  children?: (users: IUser[], handler: (row: IUser, cb: (isFormVisible: boolean) => void) => void) => React.ReactElement,
  users: IUser[],
  isFormVisible?: boolean,
}

interface IMapDispatchToProps {
  getUsers: (payload: Object) => void,
  selectUser: (user: IUser) => void,
};

class UsersListTableBodyContainer extends React.Component<IProps & IMapDispatchToProps> {
  static defaultProps: IProps;
  
  componentDidMount() {
    //this.props.getUsers(this.getUsersListPayload());
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

  handleRowClick = (row: IUser, cb: (isFormVisible: boolean) => void) => {
    this.props.selectUser(row);
    cb(true);
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

const mapSateToProps = (state: IState) => ({
  users: [{"email":"estelle@yahoo.com","gender":"female","id":"dark.dream.12","lname":"Reichert","loginInfo":{"dateTime":"Sat Jan 21 16:43:21 UTC 1967","ipv4":"165.135.179.13"},"name":"Zaria"},{"email":"free63@outlook.com","gender":"male","id":"sugar-leaf-48","lname":"Schaden","loginInfo":{"dateTime":"Sun Feb  5 19:47:35 UTC 1967","ipv4":"163.226.189.172"},"name":"Kobe"},{"email":"quia69@hotmail.com","gender":"female","id":"major-frog","lname":"Hand","loginInfo":{"dateTime":"Thu Nov  9 14:45:59 UTC 1967","ipv4":"138.94.210.16"},"name":"Malachi"},{"email":"destiney@gmail.com","gender":"male","id":"beau-dust-64","lname":"Spinka","loginInfo":{"dateTime":"Wed Dec 10 08:43:21 UTC 1969","ipv4":"134.174.238.166"},"name":"Alexandrea"},{"email":"milk@gmail.com","gender":"male","id":"white-rain-62","lname":"Lindgren","loginInfo":{"dateTime":"Wed Sep 15 11:02:48 UTC 1965","ipv4":"208.173.243.109"},"name":"Alison"},{"email":"rebeka@hotmail.com","gender":"female","id":"chicken.pine.88","lname":"Bechtelar","loginInfo":{"dateTime":"Sat Jun  3 03:35:36 UTC 1967","ipv4":"166.8.82.90"},"name":"Meta"},{"email":"more@yahoo.com","gender":"male","id":"warm-smoke-9","lname":"Flatley","loginInfo":{"dateTime":"Thu Mar 20 22:03:40 UTC 1969","ipv4":"154.15.106.131"},"name":"Adan"},{"email":"gerhard@outlook.com","gender":"female","id":"fast.field","lname":"Schowalter","loginInfo":{"dateTime":"Mon Nov 20 12:42:36 UTC 1967","ipv4":"179.47.224.42"},"name":"Vanessa"},{"email":"apple2@yahoo.com","gender":"female","id":"dusty.cloud","lname":"Ruecker","loginInfo":{"dateTime":"Thu Aug 19 08:52:35 UTC 1965","ipv4":"220.231.1.138"},"name":"Celestino"},{"email":"women49@outlook.com","gender":"male","id":"flaming-sky-93","lname":"Effertz","loginInfo":{"dateTime":"Sat Feb 20 05:46:12 UTC 1965","ipv4":"212.149.54.32"},"name":"Elsie"}],
  //state.users.users,
  isFormVisible: state.users.isUserSelected,
});

const mapDispatchToProps: IMapDispatchToProps = {
  getUsers,
  selectUser,
};

export default connect(mapSateToProps, mapDispatchToProps)(UsersListTableBodyContainer);