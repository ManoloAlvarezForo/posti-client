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
        title,
        author {
            name
        }
    }
}
`;