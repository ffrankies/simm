import React, { Component } from 'react';

import MemReferenceDisplay from '../components/MemReferenceDisplay';
import MemReferenceButtons from '../components/MemReferenceButtons';

import { undoReference, nextReference, runToNextFault } from '../utils/buttonControl';

/**
 * Container for interacting with memory references
 * @since v0.0.1
 */
class MemReferenceRow extends Component {
    /**
     * Constructs a MemReferenceRow component, and sets the inital memory references to an empty array
     * @param {object} props - the props passed down to this component 
     */
    constructor(props) {
        super(props);
        this.state = {
            currentReference : 0
        };
        this.undoReference = undoReference.bind(this);
        this.nextReference = nextReference.bind(this);
        this.runToNextFault = runToNextFault.bind(this);
    };

    render() {
        var memReference = this.props.memReferences[this.state.currentReference];
        if (memReference == null) {
            memReference = "N/A: N/A";
        }
        return (
            <div className='row'>
                <MemReferenceDisplay memReference={memReference} />
                <MemReferenceButtons 
                    onUndo={this.undoReference}
                    onNext={this.nextReference}
                    onNextFault={this.runToNextFault}
                />
            </div>
        );
    };
};

export default MemReferenceRow;