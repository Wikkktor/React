import React from "react";

const UserItem = (props) => {
  const deleteHandler = () => {
    props.deleteHandler(props.user.id);
  };

  return (
    <li onClick={deleteHandler}>
      {props.children}
    </li>
  );
};
export default UserItem;
