import React, { Component } from 'react';
import MemReferenceDisplay from '../components/MemReferenceDisplay';
import MemReferenceButtons from '../components/MemReferenceButtons';

/**
 * Container for interacting with memory references
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
    };

    render() {
        var memReference = this.props.memReferences[this.state.currentReference];
        if (memReference == null) {
            memReference = "N/A: N/A";
        }
        return (
            <div className='row'>
                <MemReferenceDisplay memReference={memReference} />
                <MemReferenceButtons />
            </div>
        );
    };
};

export default MemReferenceRow;