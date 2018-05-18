import React, {Component} from "react";
import {Query, graphql} from "react-apollo";
import query from '../Query/query';

class TalkList extends Component {
    renderTalkList() {
        return (
            <Query query={query}>
                {({loading, error, data}) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error: ${error.message}`;

                    return data.allTalks.map(({_id, name, description}) => {
                        return (
                            <ol key={_id}>
                                <p className="title is-small">{name}</p>
                                <p className="subtitle">{description}</p>
                            </ol>
                        )
                    })
                }}
            </Query>
        )
    }

    render() {
        return (
            <div className="container">
                <ul>
                    {this.renderTalkList()}
                </ul>
            </div>
        )
    }
}

export default graphql(query)(TalkList);