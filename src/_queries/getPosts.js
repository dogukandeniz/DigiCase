import {
    gql
} from "@apollo/client";

export const GET_POSTS = gql`
  query GetPets($page: Int!,$name: String!) {
     characters(page: $page,filter:{name:$name}) {
       results {
         id,
         name,
         image,
         location{
         name
        }
     }
  }
}
`;