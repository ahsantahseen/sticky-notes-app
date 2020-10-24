import React from "react";
import Note from "../Components/Note/Note";
import "./App.css";
import Footerbar from "../Components/Footerbar/Footerbar";
import Auxilary from "../hoc/Auxilary";
import Headerbar from "../Components/Header/Headerbar";

function App() {
  const [count, setCount] = React.useState([]);
  const createNote = () => {
    setCount([...count, (count.length += 1)]);
  };

  return (
    <Auxilary>

      <div className="App">
      <Headerbar createNote={createNote}></Headerbar>
      <div className="container">
        <div className="Note">
          {count.map((elem) => {
            return <Note key={elem} />;
          })}

          <Footerbar></Footerbar>
        </div>
      </div>
      
      </div>
    </Auxilary>
  );
}

export default App;
