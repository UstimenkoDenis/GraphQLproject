import  { compose } from 'recompose';
import  { graphql } from 'react-apollo';

import { directorsQuery } from './queries';

export default compose(graphql(directorsQuery));