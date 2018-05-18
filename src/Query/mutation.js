import gql from 'graphql-tag';

const CREATE_TALK= gql`
    mutation CreateTalk($name: String!, $conferenceName: String!, $video: String!, $description: String!, $speakerName: String!, $date: String){
        createTalk(name: $name, conferenceName: $conferenceName, video: $video, description: $description, speakerName: $speakerName, date: $date){
            _id
            name
            conferenceName
            speakerName
            video
            speakerName
            date
        }
    }
`;

export default CREATE_TALK;

const UPVOTE_TALK = gql`
    mutation UpvoteTalk($_id: String!){
        upvoteTalk(_id: $_id){
            id
        }
    }
`;

export default UPVOTE_TALK;

const DELETE_TALK = gql`
    mutation DeleteTalk($_id: String!){
        deleteTalk(_id: $_id){
            id
        }
    }
`;

export default DELETE_TALK;

const DOWNVOTE_TALK = gql`
    mutation DownVoteTalk($_id: String!){
        downvoteTalk(_id: $_id){
            _id
        }
    }
`;

export default DOWNVOTE_TALK;