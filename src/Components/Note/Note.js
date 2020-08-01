import React from "react";
import classes from "./Note.module.css";
import Auxilary from "../../hoc/Auxilary";

const Note = (props) => {
  return (
    <Auxilary>
      <body>
        <ul>
          <li>
            <a href="#">
              <h2 contentEditable="true">Title:{props.title}</h2>
              <p contentEditable="true"> abv{props.content}</p>
            </a>
          </li>
        </ul>
      </body>
    </Auxilary>
  );
};

export default Note;
