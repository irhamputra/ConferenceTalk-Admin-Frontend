import gql from 'graphql-tag';

const DELETE_TALK = gql`
    mutation DeleteTalk($_id: String!){
        deleteTalk(_id: $_id){
            id
        }
    }
`;

export default DELETE_TALK;