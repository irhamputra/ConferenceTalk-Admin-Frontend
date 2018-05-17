import gql from 'graphql-tag';

const createTalkMutation = gql`
    mutation CreateTalk{
        createTalk{
            name,
            description,
            video,
            speakerName,
            conferenceName,
            date
        }
    }
`;