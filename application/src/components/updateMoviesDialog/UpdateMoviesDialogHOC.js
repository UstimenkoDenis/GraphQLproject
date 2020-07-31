import  { compose } from 'recompose';
import  { graphql } from 'react-apollo';

import { updateMovieMutation } from './mutations';
import { moviesQuery } from '../movies/queries';
import { directorsQuery } from '../movieForm/queries';

const withGraphQL = compose(
    graphql(updateMovieMutation, {
        props: ({ mutate }) => ({
            updateMovie: movie => mutate({
                variables: movie,
                refetchQueries: [{ 
                    query: moviesQuery,
                    variables: { name: ''}, 
                }],
            }),
        }),
    }),
    graphql(directorsQuery, {
        options: ({ name = '' }) => ({
            variables: { name },            
        }),
    })
) 

export default compose(withGraphQL);