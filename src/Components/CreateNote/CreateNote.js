import React from "react";
import classes from "./CreateNote.module.css";

const CreateNote = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.clicked} className={classes.button}>
        Create Note
      </button>
    </React.Fragment>
  );
};

export default CreateNote;
