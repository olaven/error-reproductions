export default function getPost(request, response) {

    const { query: { id } } = request;

    response
        .json({
            id: id, 
            text: "Content of post"
        })
}