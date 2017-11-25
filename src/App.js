import React, { Component } from 'react';

import Header from './components/Header';
import FileInput from './containers/FileInput';
// import MemReferenceRow from './containers/MemReferenceRow';
import SIMMState from './containers/SIMMState';

import { loadMemReferences, setMemReferences } from './utils/loadMemReferences';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memReferences : [] //,
            // currentProcess : 'N/A',
            // currentPage : 'N/A'
        };
        // this.updateMemReference = updateMemReference.bind(this);
        this.loadMemReferences = loadMemReferences.bind(this);
        this.setMemReferences = setMemReferences.bind(this);
    };

    render() {
        return (
            <div className='bg-light'>
                <Header />
                <div className='container'>
                    <FileInput loadMemReferences={this.loadMemReferences} setMemReferences={this.setMemReferences} />
                    <SIMMState memReferences={this.state.memReferences}/>
                </div>
            </div>
        );
    };
}

export default App;
