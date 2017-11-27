import React, { Component } from 'react';

import Header from './components/Header';
import SIMMState from './containers/SIMMState';

import { loadMemReferences, setMemReferences } from './utils/loadMemReferences';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memReferences : []
        };
        this.loadMemReferences = loadMemReferences.bind(this);
        this.setMemReferences = setMemReferences.bind(this);
    };

    render() {
        return (
            <div className='bg-light'>
                <Header loadMemReferences={this.loadMemReferences} setMemReferences={this.setMemReferences} />
                <div className='container'>
                    <SIMMState memReferences={this.state.memReferences}/>
                </div>
            </div>
        );
    };
}

export default App;
