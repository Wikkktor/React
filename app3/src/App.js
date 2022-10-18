import React, { useState } from "react";
import "./index.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [usersList, setUserList] = useState([]);

  const handleAddUser = (username, age) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: username, age: age, id: Math.random().toString() },
      ];
    });
  };

  const handleRemoveUser = (userId) => {
    setUserList(prevUsersList => {
      const updatedUsers = prevUsersList.filter(user => user.id !== userId);
      return updatedUsers;
    });
  }
  return (
    <Wrapper>
      <AddUser onAddUser={handleAddUser} />
      <UserList userDelete={handleRemoveUser} users={usersList} />
    </Wrapper>
  );
}

export default App;
