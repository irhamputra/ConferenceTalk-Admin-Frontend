import gql from 'graphql-tag';

const CREATE_TALK = gql`
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