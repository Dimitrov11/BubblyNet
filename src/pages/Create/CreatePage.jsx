import React, { useState } from "react";
import { createPost } from "../../services/create";
import style from "../Register/RegisterPage.module.scss";
import ErrorNotification from "../../components/errorNotification/errorNotification.jsx";
import SuccessNotification from "../../components/successNotification/SuccessNotification.jsx";

export default function CreatePage() {
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [postId, setPostId] = useState(null);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");

    const titleHandler = (e) => {
        setTitle(e.target.value);
    };
    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    };
    const fileHandler = (e) => {
        setFile(e.target.files[0]);
    }

    const createButtonHandler = async (e) => {
        e.preventDefault();

        setError("");
        setMessage("");
        setPostId("");

        const result = await createPost(title, description, file);

        if (result == true) {          
            setMessage("The post is created successfully");
            setPostId(result.postId);
            setShowPopup(true);
            
        } else {
            setError(result);
        }
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
                
                <div className={style.inputWrapper}>
                    <label htmlFor="uploadImg">Upload file: </label>
                    <input type="file" id="uploadImg" onChange={fileHandler} />
                </div>

                <button onClick={createButtonHandler}>Create Post</button>
            </form>

            {showPopup && (
                <SuccessNotification
                    message={message}
                    postId={postId}
                />
            )}
        </main>
    );
}
