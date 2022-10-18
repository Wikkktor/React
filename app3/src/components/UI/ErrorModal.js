import React from "react";
import ReactDOM from "react-dom";

import styled from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={styled.backdrop} onClick={props.onAction}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styled.modal}>
      <header className={styled.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styled.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styled.actions}>
        <Button onClick={props.onAction}>Okey</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onAction={props.onAction} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onAction={props.onAction}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
