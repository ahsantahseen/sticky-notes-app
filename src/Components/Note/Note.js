import React, { useEffect, useState } from "react";
import classes from "./Note.module.css";
import Auxilary from "../../hoc/Auxilary";

const Note = (props) => {
  const [random_color, setrandom_color] = useState();
  const [random_position, setrandom_position] = useState();

  useEffect(() => {
    const colors = ["#fff740", "#7afcff", "#ff7eb9", "#feff9c"];
    setrandom_color(colors[Math.floor(Math.random() * colors.length)]);

    const positions = ["rotate(5deg)", "rotate(-5deg)"];

    setrandom_position(positions[Math.floor(Math.random() * positions.length)]);
  }, []);

  return (
    <Auxilary>
      <div
        suppressContentEditableWarning={true}
        className={classes.sticky}
        style={{ background: random_color, transform: random_position }}
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
