import React from "react";
import Note from "../Components/Note/Note";
import CreateNote from "../Components/CreateNote/CreateNote";
import "./App.css";
import Footerbar from "../Components/Footerbar/Footerbar";

function App() {
  const [count, setCount] = React.useState([]);
  const createNote = () => {
    setCount([...count, (count.length += 1)]);
  };

  return (
    <React.Fragment>
      <div className="App">
        <h2>Sticky Notes</h2>
        <CreateNote clicked={createNote}></CreateNote>
      </div>
      <div className="container">
        <div className="Note">
          {count.map((elem) => {
            return <Note key={elem} />;
          })}

          <Footerbar></Footerbar>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
