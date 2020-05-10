import axios from 'axios';

interface Options {
  url: string,
  [index: string]: any
};

export default async (payload: any, options: Options) => {
  const {method = 'post', url = ''} = options;
  // const result = await axios({
  //   method,
  //   url,
  //   data: payload
  // });

  const users = [{
    address: '6239 Olive Street Bridge',
    email: 'sit_nash@yahoo.com',
    gender: 'female',
    id: 'sunny.waterfall',
    lname: 'Raynor',
    mobile: '(660) 788-4648',
    name: 'Alisa'
  },
  {
    address: '7021 Hilltop Road Green',
    email: 'side@hotmail.com',
    gender: 'male',
    id: 'captain-field-4',
    lname: 'Waters',
    mobile: '(135) 545-8125',
    name: 'Demarco'
  },
  {
    address: '728 Central Avenue Junctions',
    email: 'floyd@gmail.com',
    gender: 'female',
    id: 'mistress-resonance',
    lname: 'Hyatt',
    mobile: '207-247-1749',
    name: 'Richie'
  },
  {
    address: '9969 Holly Drive Creek',
    email: 'ready@outlook.com',
    gender: 'male',
    id: 'modern-darkness-71',
    lname: 'Haag',
    mobile: '606.640.9816',
    name: 'Dorian'
  },
  {
    address: '194 East Avenue Stream',
    email: 'timmy@yahoo.com',
    gender: 'male',
    id: 'dirty.dawn',
    lname: 'Howell',
    mobile: '(797) 733-4378',
    name: 'Terry'
  },
  {
    address: '1428 Route 70 Mills',
    email: 'audra@outlook.com',
    gender: 'female',
    id: 'lone.sun.27',
    lname: 'Mitchell',
    mobile: '111-889-1469',
    name: 'Brook'
  },
  {
    address: '1699 Arch Street Freeway',
    email: 'born76@gmail.com',
    gender: 'male',
    id: 'proud-sea-17',
    lname: 'Bins',
    mobile: '504-440-8757',
    name: 'Marianna'
  },
  {
    address: '965 Mill Road Rue',
    email: 'bright36@hotmail.com',
    gender: 'female',
    id: 'helpless.snowflake.27',
    lname: 'Reichert',
    mobile: '141-974-5578',
    name: 'Fausto'
  },
  {
    address: '5100 Buttonwood Drive Fort',
    email: 'alias52@yahoo.com',
    gender: 'male',
    id: 'lady-pine-86',
    lname: 'Buckridge',
    mobile: '(997) 902-9254',
    name: 'Derek'
  },
  {
    address: '5113 Cypress Court Lodge',
    email: 'row_bernhard@gmail.com',
    gender: 'female',
    id: 'drunken-smoke',
    lname: 'Keeling',
    mobile: '289-683-3704',
    name: 'Kathlyn'
  }
];

return users;

}