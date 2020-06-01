export default function getPost(request, response) {

    /*
        NOTE: 
        From browser: id is defined (index.tsx)
        From test: id is undefined (post.test.ts)
    */
    const { query: { id } } = request;

    response
        .json({
            id: id, 
            text: "Content of post"
        })
}