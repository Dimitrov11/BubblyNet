import React, { useState } from "react";
import { createPost } from "../../services/create";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import style from "../Register/RegisterPage.module.scss";
import ErrorNotification from "../../components/errorNotification/errorNotification.jsx";
import SuccessNotification from "../../components/successNotification/SuccessNotification.jsx";

export default function CreatePage() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const Navigate = useNavigate();

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const createButtonHandler = async (e) => {
    e.preventDefault();
    const result = await createPost(title, description);

    if (result.startsWith("Post created")) {
      setMessage(result);
      setShowPopup(true);
    } else {
        setMessage(result);
    }
};

const closePopup = () => {
    setShowPopup(false);
    Navigate("/");
  };

  return (
    <main>
      {error !== "" ? <ErrorNotification errorMessage={error} /> : <></>}

      <form>
        <h2>New Post</h2>

        <div className={style.inputWrapper}>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" onChange={titleHandler} />
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor="description">Description: </label>
          <input type="text" id="description" onChange={descriptionHandler} />
        </div>

        <button onClick={createButtonHandler}>Create Post</button>

      </form>

        {showPopup && <SuccessNotification message={message} onClose={closePopup} />}

    </main>
  );
}
