import React from "react";
import Note from "../Components/Note/Note";

import "./App.css";

function App() {
  const [count, setCount] = React.useState([]);
  const createNote = () => {
    setCount([...count, (count.length += 1)]);
  };

  console.log(count);
  return (
    <React.Fragment>
      <div className="App">
        {count.map((elem) => {
          return <Note key={elem} />;
        })}

        <h2>Sticky Notes</h2>
        <button onClick={createNote}>Click</button>
      </div>
    </React.Fragment>
  );
}

export default App;
