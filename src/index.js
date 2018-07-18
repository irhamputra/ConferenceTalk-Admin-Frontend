import React from "react";
import ReactDOM from "react-dom";
import 'bulma/css/bulma.css';
import {ApolloProvider} from "react-apollo";
import {Router, Route} from 'react-router-dom';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import createBrowserHistory from 'history/createBrowserHistory';

// Import UI Component
import App from "./App";
import AddTalk from './components/AddTalk';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:8000/graphql',
        headers: {
            accept: "application/json"
        }
    }),
    cache: new InMemoryCache()
});

const history = createBrowserHistory();

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router history={history}>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/add-talk" component={AddTalk}/>
                </div>
            </Router>
        </ApolloProvider>
    )
};

ReactDOM.render(<Root/>, document.getElementById('root'));