import React, { Component } from 'react';

import Header from './components/Header';
import FileInput from './containers/FileInput';
import MemReferences from './containers/MemReferences';

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
            <div className='container'>
                <Header />
                <FileInput loadMemReferences={this.loadMemReferences} setMemReferences={this.setMemReferences} />
                <MemReferences memReferences={this.state.memReferences} />
            </div>
        );
    };
}

export default App;
