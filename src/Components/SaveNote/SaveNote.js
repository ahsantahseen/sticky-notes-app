
import React from 'react'
import classes from "./SaveNote.module.css"
const SaveNote = () => {
    return (
        <div>
        <img className={classes.SaveNote} alt="save-icon"  onClick={()=>alert("Saving...")} src="https://img.icons8.com/ios-filled/30/000000/save.png"/>
        </div>
    )
}

export default SaveNote
