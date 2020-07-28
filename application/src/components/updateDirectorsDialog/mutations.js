import { gql } from 'apollo-boost';

export const updateDirectorMutation = gql`
    mutation updateDirector($id: ID, $name: String!, $age: Int!) {
        updateDirector(id: $id, name: $name, age: $age) {
            name
        }
    }
`;