import React,{useState} from "react";
import Note from "../Components/Note/Note";
import classes from "../Components/Header/Headerbar.module.css"
import "./App.css";
import Auxilary from "../hoc/Auxilary";
import Headerbar from "../Components/Header/Headerbar";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import CreateNote from "../Components/CreateNote/CreateNote"

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp( {
  apiKey: "AIzaSyCY8WPs0Gn_qF0ljm5iTIK0VBROGXisjcY",
  authDomain: "sticky-notes-a46a1.firebaseapp.com",
  databaseURL: "https://sticky-notes-a46a1.firebaseio.com",
  projectId: "sticky-notes-a46a1",
  storageBucket: "sticky-notes-a46a1.appspot.com",
  messagingSenderId: "473331026315",
  appId: "1:473331026315:web:d5bb0da52b39cdfab6c78e",
  measurementId: "G-C7VP2D98T8"
});


const auth = firebase.auth();
const firestore = firebase.firestore();

const SignIn = () => {
    const GoogleSignIn = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
      
    };
    return (
        
        <img alt="Sign in with google" onClick={GoogleSignIn} src="https://i.imgur.com/IjVIMxf.png" style={{height:"auto",width:"auto"}}></img>
        
    );
  };
  
 const SignOut = () => {
    return (
      auth.currentUser && <img alt="sing out" src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Octicons-sign-out.svg" style={{height:"32px", width:"32px"}} onClick={() => auth.signOut()}></img>
        
      
    );
  }

function App() {
  const [user] = useAuthState(auth);
  
const [enableNotes, setenableNotes] = useState(false);

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
      <Headerbar >{user? <><CreateNote clicked={createNote}></CreateNote><SignOut></SignOut><img className={classes.userpic} alt="user-pic" src="http://unsplash.it/36/36?gravity=center"/></>:<SignIn></SignIn>}</Headerbar>
      <div className="container">
        <div className="Note">
          {count.map((elem,index) => {
            return <Note key={elem} delete={()=>deleteNote(index)} />;
          })}

        </div>
      </div>
      
      </div>
    </Auxilary>
  );
}

export default App;
