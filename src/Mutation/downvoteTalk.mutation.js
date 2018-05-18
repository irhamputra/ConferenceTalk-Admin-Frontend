import gql from 'graphql-tag';

const DOWNVOTE_TALK = gql`
    mutation DownVoteTalk($_id: String!){
        downvoteTalk(_id: $_id){
            _id
        }
    }
`;

export default DOWNVOTE_TALK;