import React from "react";
import classes from "./Note.module.css";
import Auxilary from "../../hoc/Auxilary";

const Note = (props) => {
  const colors = ["#fff740", "#7afcff", "#ff7eb9", "#feff9c"];
  let random_color = colors[Math.floor(Math.random() * colors.length)];

  const positions = ["rotate(5deg)", "rotate(-5deg)"];

  let random_position = positions[Math.floor(Math.random() * positions.length)];

  console.log(random_color);
  return (
    <Auxilary>
      <div
        className={classes.sticky}
        style={{ background: random_color, transform: random_position }}
      >
        <b>Note:</b>
        <p contentEditable="true">Editable text...</p>
      </div>
    </Auxilary>
  );
};

export default Note;
