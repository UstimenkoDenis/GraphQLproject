import { gql } from 'apollo-boost';

export const updateMovieMutation = gql`
    mutation updateMovie($id: ID, $name: String!, $genre: String!, $directorId: ID, $rate: Int) {
        updateMovie(id: $id, name: $name, genre: $genre, directorId: $directorId, rate: $rate) {
            name
        }
    }
`;