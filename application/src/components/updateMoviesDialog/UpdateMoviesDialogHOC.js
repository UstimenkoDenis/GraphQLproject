import  { compose } from 'recompose';
import  { graphql } from 'react-apollo';

import { updateMovieMutation } from './mutations';
import { moviesQuery } from '../movies/queries';
import { directorsQuery } from '../movieForm/queries';

const withGraphqlUpdate = graphql(updateMovieMutation, {
    props: ({ mutate }) => ({
        updateMovie: movie => mutate({
            variables: movie,
            refetchQueries: [{ query: moviesQuery }],
        }),
    }),
});

export default compose(withGraphqlUpdate, graphql(directorsQuery));