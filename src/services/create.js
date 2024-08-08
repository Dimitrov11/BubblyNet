import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function createPost(title, description) {
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
    });
    // TODO:
    // Success notification
    return `Post created with ID: ${newPost.id}`;
  } catch (error) {
    console.log("Error adding document: ", error);
    return "Creating post failed";
  }
  
}
