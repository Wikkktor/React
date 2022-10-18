import React, { useState } from "react";
import Card from "../UI/Card";
import styled from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
        setError({
            title: "Invalid input",
            message: 'Please enter a valid name and age (non-empty valus)'
        });
        console.log(error);
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title: "Invalid age",
            message: 'Age must be higher then 0'
        })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const handleModalAction = () => {
    setError(null);
  }

  return (
    <Wrapper>
        {error && <ErrorModal onAction={handleModalAction} title={error.title} message={error.message} />}
      <Card className={styled.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={enteredUsername}
            onChange={(e) => setEnteredUsername(e.target.value)}
            type="text"
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            value={enteredAge}
            onChange={(e) => setEnteredAge(e.target.value)}
            type="number"
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
