import React,{useState} from "react";
import Note from "../Components/Note/Note";
import "./App.css";
import Footerbar from "../Components/Footerbar/Footerbar";
import Auxilary from "../hoc/Auxilary";
import Headerbar from "../Components/Header/Headerbar";

function App() {
  const [count, setCount] = useState([]);
  const createNote = () => {
    setCount([...count, (count.length += 1)]);
  };
  const deleteNote=(index)=>{
    let oldCount=[...count];
    oldCount.splice(index,1);
    setCount(oldCount);
    
    console.log("WORKING")
  };

  return (
    <Auxilary>

      <div className="App">
      <Headerbar createNote={createNote}></Headerbar>
      <div className="container">
        <div className="Note">
          {count.map((elem,index) => {
            return <Note key={elem} delete={()=>deleteNote(index)} />;
          })}

          <Footerbar></Footerbar>
        </div>
      </div>
      
      </div>
    </Auxilary>
  );
}

export default App;
