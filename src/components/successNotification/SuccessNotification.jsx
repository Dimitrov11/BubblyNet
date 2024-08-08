import React from "react";
import style from "./successNotification.module.scss";

const successNotification = ({ message, onClose }) => {
  return (
    <div className={style.popupOverlay}>
    <div className={style.popup}>
    <p>{message}</p>
    <button onClick={onClose}>Close</button>
    </div>
    </div>
  );
};
 
export default successNotification