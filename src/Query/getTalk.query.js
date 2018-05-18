import gql from 'graphql-tag';

const getTalkQuery = gql`
    query GetTalk{
        getTalk{
            _id
        }
    }
`;

export default getTalkQuery;