import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styled from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
        setError({
            title: "Invalid input",
            message: 'Please enter a valid name and age (non-empty valus)'
        });
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title: "Invalid age",
            message: 'Age must be higher then 0'
        })
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
