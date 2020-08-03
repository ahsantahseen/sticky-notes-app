import React from "react";
import classes from "./Note.module.css";
import Auxilary from "../../hoc/Auxilary";

const Note = (props) => {
  return (
    <Auxilary>
      <div className={classes.sticky}>
        <b>Note:</b>
        <p contentEditable="true">Editable text...</p>
      </div>
    </Auxilary>
  );
};

export default Note;
