import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import CREATE_TALK from '../Mutation/createTalk.mutation';

class AddTalk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            video: '',
            conferenceName: '',
            speakerName: '',
            vote: 0
        }
    }

    render() {
        return(
            <Mutation mutation={CREATE_TALK}>
                {(createTalk, { data, loading, error} ) => {
                    if (loading) return <div>Loading...</div>;
                    if (error) throw new Error(error);

                    return (
                        <div>
                            <h3>Add Talk</h3>
                            <form onSubmit={async e => {
                                e.preventDefault();
                                const { name, speakerName, conferenceName, video, description } = this.state;

                                await createTalk({
                                    variables: {name, speakerName, conferenceName, video, description}
                                })
                            }}>
                                <input
                                    autoFocus
                                    type="text"
                                    ref="name"
                                    onChange={e => this.setState({ name: e.target.value })}
                                    value={this.state.name}
                                    placeholder="Title"/>
                                <input
                                    type="text"
                                    ref="description"
                                    onChange={e => this.setState({ description: e.target.value })}
                                    value={this.state.description}
                                    placeholder="Description"/>
                                <input
                                    type="text"
                                    ref="speakerName"
                                    onChange={e => this.setState({ speakerName: e.target.value })}
                                    value={this.state.speakerName}
                                    placeholder="Name of the speaker"/>
                                <input
                                    type="text"
                                    ref="conferenceName"
                                    onChange={e => this.setState({ conferenceName: e.target.value })}
                                    value={this.state.conferenceName}
                                    placeholder="Conference Name"/>
                                <input
                                    type="text"
                                    ref="video"
                                    onChange={e => this.setState({ video: e.target.value })}
                                    value={this.state.video}
                                    placeholder="Video URL"/>
                                <button
                                    type="submit"
                                    disabled={!this.state.name || !this.state.speakerName || !this.state.video}>Add</button>
                            </form>
                        </div>
                    )
                }}
            </Mutation>
        )
    }
}

export default AddTalk