import gql from 'graphql-tag';

const UPVOTE_TALK = gql`
    mutation UpvoteTalk($_id: String!){
        upvoteTalk(_id: $_id){
            id
        }
    }
`;

export default UPVOTE_TALK;