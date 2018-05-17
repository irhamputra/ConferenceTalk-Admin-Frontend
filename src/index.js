import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bulma/css/bulma.css';
import App from "./App";
import {ApolloProvider} from "react-apollo";
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:8080/graphql',
        headers: {
            accept: "application/json"
        }
    }),
    cache: new InMemoryCache()
});

const Root = () => {
    return(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    )
};

ReactDOM.render(<Root/>, document.getElementById('root'));