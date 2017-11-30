import React, { Component } from 'react';

import Header from './containers/Header';
import SIMMState from './containers/SIMMState';

import { loadMemReferences, setMemReferences } from './utils/loadMemReferences';

/** 
 * The component that contains the entire SIMM application. 
 * @since v0.0.1
 * @author Frank Wanye
 */
class App extends Component {
    /**
     * Constructs an App React Component
     * @param {object} props - the properties for the App component 
     */
    constructor(props) {
        super(props);
        this.state = {
            memReferences : []
        };
        this.loadMemReferences = loadMemReferences.bind(this);
        this.setMemReferences = setMemReferences.bind(this);
    };

    /**
     * Renders the application.
     * @return {div} applicationDiv - the div containing the application
     */
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
