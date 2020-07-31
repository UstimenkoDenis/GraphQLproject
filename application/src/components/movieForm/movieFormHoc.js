import  { compose } from 'recompose';
import  { graphql } from 'react-apollo';

import { addMovieMutation } from './mutations';
import { moviesQuery } from '../movies/queries';
import { directorsQuery } from './queries';

const withGraphQL = compose(
    graphql(addMovieMutation, {
        props: ({ mutate }) => ({
            addMovie: movie => mutate({
                variables: movie,
                refetchQueries: [{ 
                    query: moviesQuery,
                    variables: { name: ''}, 
                }],
            }),
        }),
    }),
    graphql(directorsQuery, {
        options: ({ name = ''}) => ({
            variables: { name },
        }),
    })
);

export default compose(withGraphQL);
