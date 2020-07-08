import  { compose } from 'recompose';
import  { graphql } from 'react-apollo';

import { addMovieMutation } from './mutations';
import { moviesQuery } from '../movies/queries';
import { directorsQuery } from './queries';

const withGraphqlAdd = graphql(addMovieMutation, {
    props: ({ mutate }) => ({
        addDirector: movie => mutate({
            variables: movie,
            refetchQueries: [{ query: moviesQuery }],
        }),
    }),
});

export default compose(withGraphqlAdd, graphql(directorsQuery));
