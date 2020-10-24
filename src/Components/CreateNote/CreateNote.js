
import React from "react";
import Auxilary from "../../hoc/Auxilary";
import classes from "./CreateNote.module.css"

const CreateNote = (props) => {
  return (
    <Auxilary>
    <img className={classes.CreateNote} onClick={props.clicked} alt='addnote' src="https://img.icons8.com/wired/64/000000/add-column.png"/>
    </Auxilary>
  );
};

export default CreateNote;
