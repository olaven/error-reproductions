import React, { useEffect, useState } from "react";


const usePost = (id: string) => {

    const [post, setPost] = useState(null); 

    const fetchPost = async () => {

        const response = await fetch(`/api/posts/${id}`)
        if (response.status === 200) {

            const post = await response.json(); 
            setPost(post);
        } else {

            console.warn(response);
        }
    }


    useEffect(() => {fetchPost()})

    return post; 
}

export default () => {

    const post = usePost("POST_ID"); 
    if (!post) 
        return <p>Loading post..</p>

    const { id, text } = post;

    return <div>
        Post: 
        ID: {id}, text {text}
    </div>
}