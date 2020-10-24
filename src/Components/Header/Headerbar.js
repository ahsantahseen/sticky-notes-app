import React from 'react'
import CreateNote from "../CreateNote/CreateNote"
import classes from "./Headerbar.module.css"
const Headerbar = (props) => {
    return (
        <div className={classes.Headerbar}>
        <h2 className={classes.Logo}>Sticky Notes</h2>
        <div className={classes.MenuIcons}>
        <CreateNote clicked={props.createNote}></CreateNote>
        
        <img className={classes.userpic} alt="user-pic" src="http://unsplash.it/36/36?gravity=center"></img>
        </div>
         
        </div>
    )
}

export default Headerbar
