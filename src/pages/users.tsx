import React, {useState} from 'react'
import UsersListTable from './users-list-table';
import SelectedUser from './selected-user';

type IHandleFormVisibility = (isFormVisible: boolean) => (void);

export default function Users() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleFormVisibility: IHandleFormVisibility = (isFormVisible: boolean) => {setIsFormVisible(isFormVisible)};
  
  return (
    <>
    {isFormVisible ?
      (<SelectedUser />) :
      (<UsersListTable  handleFormVisibility={handleFormVisibility}/>)
    }
    </>
  )
}
