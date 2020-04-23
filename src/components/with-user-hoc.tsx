import React from 'react';
import {IUser} from '../store/users-list/types';

export default (WrapperEL: React.ComponentType, user: IUser) => 
  <>
    <WrapperEL>{user.name}</WrapperEL>
    <WrapperEL>{user.lname}</WrapperEL>
    <WrapperEL>{user.email}</WrapperEL>
    <WrapperEL>{user.gender}</WrapperEL>
    <WrapperEL>{user.loginInfo.dateTime}</WrapperEL>
    <WrapperEL>{user.loginInfo.ipv4}</WrapperEL>
  </>