import  { compose } from 'recompose';
import  { graphql } from 'react-apollo';

import { moviesQuery } from './queries';

const withGraphQL = graphql(moviesQuery, { 
    options: ({ name = '' }) => ({
        variables: { name },
    }),
});

export default compose(withGraphQL);