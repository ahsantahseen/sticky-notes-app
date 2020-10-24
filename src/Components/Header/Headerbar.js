import React from 'react'
import CreateNote from "../CreateNote/CreateNote"
import classes from "./Headerbar.module.css"
const Headerbar = (props) => {
    return (
        <div className={classes.Headerbar}>
        <h2 className={classes.Logo}>Sticky Notes</h2>
        <div className={classes.MenuIcons}>
        <CreateNote clicked={props.createNote}></CreateNote>
        </div>

        </div>
    )
}

export default Headerbar
