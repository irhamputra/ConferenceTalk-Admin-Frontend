import gql from 'graphql-tag';

const allTalksQuery = gql`
    query AllTalks{
        allTalks{
            _id,
            name,
            conferenceName,
            speakerName,
            description,
            date,
            votes
        }
    }
`;

export default allTalksQuery;