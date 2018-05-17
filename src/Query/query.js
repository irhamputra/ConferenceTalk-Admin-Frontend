import gql from 'graphql-tag';

const Queries = gql`
    query AllTalks{
        allTalks{
            name,
            conferenceName,
            speakerName,
            date,
            votes
        }
    }
`;

export default Queries;