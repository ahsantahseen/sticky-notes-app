import React from "react";
import classes from "./Note.module.css";
import Auxilary from "../../hoc/Auxilary";

const Note = (props) => {

  return (
    <Auxilary>
    <img alt="delete" src="https://img.icons8.com/metro/26/000000/delete-sign.png" onClick={props.delete}
      className={classes.deleteIcon}></img>

      <div
        suppressContentEditableWarning={true}
        className={classes.sticky}
              >
        
        <b contentEditable="true" suppressContentEditableWarning={true}>
          Untitled
        </b>
        <p contentEditable="true" suppressContentEditableWarning={true}></p>
      </div>
      
    </Auxilary>
  );
};

export default Note;
