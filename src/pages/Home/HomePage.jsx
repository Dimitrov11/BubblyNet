import React, { useEffect, useState } from "react";
import getAllPosts from "../../services/getAllPosts.js"
import Post from "../../components/postComponent/Post.jsx";

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
		<div>
			{posts.map((post) => (
				<div key={post.id}>
					<Post title={post.title} image={post.imageUrl} description={post.description} />
				</div>
			))}
		</div>
	);
}

export default HomePage;