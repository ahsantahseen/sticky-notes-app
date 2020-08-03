import React from "react";
import classes from "./Note.module.css";
import Auxilary from "../../hoc/Auxilary";

const Note = (props) => {
  const colors = ["#fff740", "#7afcff", "#ff7eb9", "#feff9c"];
  let random_color = colors[Math.floor(Math.random() * colors.length)];

  console.log(random_color);
  return (
    <Auxilary>
      <div className={classes.sticky} style={{ background: random_color }}>
        <b>Note:</b>
        <p contentEditable="true">Editable text...</p>
      </div>
    </Auxilary>
  );
};

export default Note;
