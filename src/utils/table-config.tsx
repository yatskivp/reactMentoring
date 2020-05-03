export const columns = [
  {
    id: 'name',
    label: 'First Name'
  }, {
    id: 'lname',
    label: 'Last Name'
  }, {
    id: 'email',
    label: 'Email'
  }, {
    id: 'gender',
    label: 'Gender'
  }, {
    id: 'address',
    label: 'Address'
  }, {
    id: 'mobile',
    label: 'Mobile'
}];

export const payload = {
  "token": process.env.REACT_APP_FAKE_JSON_TOKEN,
  "data": {
    "id": "personNickname",
    "name": "nameFirst",
    "lname": "nameLast",
    "email": "internetEmail",
    "gender": "personGender",
    "address": "addressFullStreet",
    "mobile": "phoneMobile",
    "_repeat": 10
  }
};