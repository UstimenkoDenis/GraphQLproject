import { gql } from 'apollo-boost';

export const addMovieMutation = gql`
    mutation addMovie($name: String!, $genre: String!, $rate: Int, $directorId: ID) {
        addMovie(name: $name, genre: $genre, rate: $rate, directorId: $directorId ) {
            name
        }
    }
`;