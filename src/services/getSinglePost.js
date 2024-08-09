import { db } from "../firebase.js"
import { doc, getDoc } from "firebase/firestore";

export default async function getSinglePost(id) {
    try {
        const postRef = doc(db, "posts", id);
        const postSnap = await getDoc(postRef);
    
        if (postSnap.exists()) {
          return { id: postSnap.id, ...postSnap.data() };
        } else {
          return "No document found!";
        }
      } catch (error) {
        console.error("Error fetching document:", error);
        return null;
      }
    };