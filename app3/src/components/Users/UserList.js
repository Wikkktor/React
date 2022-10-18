import React from "react";
import styled from "./UserList.module.css";
import Card from "../UI/Card";
import UserItem from "./UserItem";

const UserList = (props) => {
  const deleteHandler = (id) => {
    props.userDelete(id);
  };
  return (
    <Card className={styled.users}>
      {props.users.length > 0 ? (
        <ul>
          {props.users.map((user) => (
            <UserItem deleteHandler={deleteHandler} user={user} key={user.id}>
              {user.name} ({user.age} years old)
            </UserItem>
          ))}
        </ul>
      ) : (
        <h1>No users</h1>
      )}
    </Card>
  );
};

export default UserList;
