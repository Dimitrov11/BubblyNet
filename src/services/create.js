import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth/cordova";
import { db } from "../firebase";

export async function createPost(title, description) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    return "User is not logged in";
  }

  if (title === "" && description === "") {
    return "The post must have a Title";
  }
  if (title === "") {
    return "The post must have a Title";
  }
  if (title.length <= 1) {
    return "Title be must be at least 2 characters long";
  }  
  
  try {
    const newPost = await addDoc(collection(db, "posts"), {
      title,
      description,
      createdAt: new Date(),
      authorId: user.uid, 
    });   

    const createdPostId = newPost.id;
    return "The post is created successfully";
  } catch (error) {
    return "Creating a post has failed";
  }
}
