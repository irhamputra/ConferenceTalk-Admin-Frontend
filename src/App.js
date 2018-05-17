import React, { Component } from 'react';

// Import UI
import Header from './components/Header';
import TalkList from './components/TalkList';
import Footer from './components/Footer';

class App extends Component {
    render(){
        return(
            <div>
                <Header/>
                <TalkList/>
                <Footer/>
            </div>
        )
    }
}

export default App;