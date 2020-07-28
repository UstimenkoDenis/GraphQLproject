import  { compose } from 'recompose';
import  { graphql } from 'react-apollo';

import { updateDirectorMutation } from './mutations';
import { directorsQuery } from '../directors/queries';

const withGraphqlUpdate = graphql(updateDirectorMutation, {
    props: ({ mutate }) => ({
        updateDirector: director => mutate({
            variables: director,
            refetchQueries: [{ query: directorsQuery }],
        }),
    }),
});

export default compose(withGraphqlUpdate);
