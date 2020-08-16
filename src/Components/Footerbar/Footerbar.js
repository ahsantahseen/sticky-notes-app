import React from "react";
import classes from "./Footerbar.module.css";
import Auxilary from "../../hoc/Auxilary";

const Footerbar = () => {
  return (
    <Auxilary>
      <div className={classes.Footerbar}>
        <p>Made By Ahsan Tahseen, Powered by React</p>
      </div>
    </Auxilary>
  );
};

export default Footerbar;
