import  { compose } from 'recompose';
import  { graphql } from 'react-apollo';

import { addDirectorMutation } from './mutations';
import { directorsQuery } from '../directors/queries.js';

const withGraphqlAdd = graphql(addDirectorMutation, {
    props: ({ mutate }) => ({
        addDirector: director => mutate({
            variables: director,
            refetchQueries: [{ query: directorsQuery }],
        }),
    }),
});

export default compose(withGraphqlAdd);