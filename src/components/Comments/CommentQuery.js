import gql from "graphql-tag";

export const GET_COMMENTS = gql`
query GetComments($parentId: ID, $isToPost: Boolean) {
    comments(parentId: $parentId, isToPost: $isToPost) {
        id,
        name,
        email,
        body,
        comments {
            name,
            email,
            body
        }
    }
}
`;