import { db } from "../firebase.js"
import { collection, getDocs } from "firebase/firestore";

export default async function getAllPosts() {
      try {
        const postsCollectionRef = collection(db, "posts");
        const postsSnapshot = await getDocs(postsCollectionRef);
        const postsList = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        if (postsList.length > 0) {
          return postsList;
        } else {
          return "No documents found!";
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };