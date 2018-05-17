import React, {Component} from "react";
import {Query, graphql} from "react-apollo";
import query from '../Query/query';

class TalkList extends Component {
    render() {
        console.log(this.props);
        return (
            <Query query={query}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error: ${error.message}`;

                    return data.allTalks.map(talk => {
                        return(
                            <li key={talk._id}>
                                {talk.name}
                            </li>
                        )
                    })
                }}
            </Query>
        )
    }
}

export default graphql(query)(TalkList);