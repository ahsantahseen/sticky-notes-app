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

  console.log(count);
  return (
    <React.Fragment>
      <div className="App">
        <h2>Sticky Notes</h2>
        <CreateNote clicked={createNote}></CreateNote>
      </div>
      <div className="Note">
        <center>
          {count.map((elem) => {
            return <Note key={elem} />;
          })}
        </center>
      </div>
      <Footerbar></Footerbar>
    </React.Fragment>
  );
}

export default App;
