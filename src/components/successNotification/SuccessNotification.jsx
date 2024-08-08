import React, { useState } from "react";
import successImage from "../../assets/successImage.png"
import style from "./successNotification.module.scss";
import { Navigate, useNavigate } from 'react-router-dom';


const successNotification = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [postId, setPostId] = useState(null);
  
  const Navigate = useNavigate();

  const handleViewPost = () => {
    Navigate(`/posts/${postId}`);
  };

  const closePopup = () => {
    setShowPopup(false);
    setError("");
    setMessage("");
    Navigate("/");
};

  return (
    <div className={style.popupOverlay}>
      <div className={style.popup}>
        <img src={successImage} alt="Tick image" />
        <p>{props.message}</p>
        <button onClick={closePopup}>Close</button>
        <button onClick={handleViewPost}>View Post</button>
      </div>
    </div>
  );
};

export default successNotification;
