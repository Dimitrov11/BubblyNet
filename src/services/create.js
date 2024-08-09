import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth/cordova";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export async function createPost(title, description, file) {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        return "User is not logged in";
    }
    if (title === "") {
        return "The post must have a Title";
    }
    if (title.length <= 1) {
        return "Title be must be at least 2 characters long";
    }
    if (file == '') {
        return "Upload a file";
    }

    try {
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadFile = uploadBytesResumable(storageRef, file);

        await new Promise((resolve, reject) => {
            uploadFile.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
                (error) => {
                    reject(error);
                },
                () => {
                    resolve();
                }
            );
        });

        const downloadURL = await getDownloadURL(uploadFile.snapshot.ref);

        const newPost = await addDoc(collection(db, "posts"), {
            title,
            description,
            createdAt: new Date(),
            authorId: user.uid,
            imageUrl: downloadURL,
        });
        
        return {'status': true,
            'postID': newPost.id
        };
    } catch (error) {
        return "Creating a post has failed";
    }
}
