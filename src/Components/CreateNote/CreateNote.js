import React from "react";
import classes from "./CreateNote.module.css";
import Auxilary from "../../hoc/Auxilary";

const CreateNote = (props) => {
  return (
    <Auxilary>
      <button onClick={props.clicked} className={classes.button}>
        Create Note
      </button>
    </Auxilary>
  );
};

export default CreateNote;
