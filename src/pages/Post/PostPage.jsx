import React, { useEffect, useState } from "react";
import getSinglePost from "../../services/getSinglePost";
import { useParams } from "react-router-dom";
import style from "./PostPage.module.scss"

export default function PostPage() {
    const [post, setPost] = useState([]);
    const locationId = useParams().id;   

    useEffect(() => {
    async function fetchPosts() {
      try {
        const result = await getSinglePost(locationId);
        setPost(result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts();

    return () => {
      setPost([]);
    };
  }, []);

  return (
    <main>
        {
            post == "No document found!" ? 
            <p className={style.noPostError}>
                No post have been found!
            </p> : 
            <div className={style.singlePostWrapper}>   
                <img src={post.imageUrl} alt="Post Image" />
                <div className={style.singlePostContent}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            </div>
        } 
    </main>
  );
}
