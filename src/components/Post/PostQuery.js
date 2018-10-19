import gql from "graphql-tag";

export const GET_POSTS = gql`
query GetPosts {
    posts{
        title,
        id,
        body,
        author {
            name
        }
      }
}
`;

export const GET_POSTS_FILTER = gql`
query GetPostFilter($query: String) {
    postFilter(query: $query) {
        id,
        title,
        author {
            name
        }
    }
}
`;

export const GET_POST_BY_ID = gql`
query GetPostById($postId: ID) {
    post(postId: $postId) {
        id,
        title,
        body,
        author{
          name
        }
    }
}
`;

export const POST_PAGINATED = gql`
query PostPaginated($offset: Int, $limit: Int) {
    postsPaginated(offset: $offset, limit: $limit) {
        count,
        pagesNumber,
        posts{
            title,
            id,
            body,
            author {
                name
            }
          }
    }
}
`;