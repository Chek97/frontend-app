import { db } from "../firebase/firebase-config"

export const loadPosts = async(uid) => {

    const getPosts = await db.collection(`${uid}/favorites/posts/`).get();
    const favoritePosts = [];

    getPosts.forEach( gp => {
        favoritePosts.push({
            id: gp.id,
            ...gp.data()
        })
    });
    
    return favoritePosts;
}