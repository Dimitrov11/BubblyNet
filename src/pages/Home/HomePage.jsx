import React, { useEffect, useState } from "react";
import getAllPosts from "../../services/getAllPosts.js";
import Post from "../../components/postComponent/Post.jsx";
import style from "./HomePage.module.scss";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const result = await getAllPosts();
        setPosts(result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts();

    return () => {
      setPosts([]);
    };
  }, []);

  return (
    <main>
      <div className={style.boxesWrapper}>
        {posts.map((post) => (
          <Post
            key={post.id}
            postId={post.id}
            title={post.title}
            image={post.imageUrl}
            description={post.description}
          />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
