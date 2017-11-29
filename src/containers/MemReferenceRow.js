import React, { Component } from 'react';

import MemReferenceDisplay from '../components/MemReferenceDisplay';
import MemReferenceButtons from '../components/MemReferenceButtons';

/**
 * Container for interacting with memory references
 * @since v0.0.1
 * @author Frank Wanye
 */
class MemReferenceRow extends Component {
    render() {
        return (
            <div className='row'>
                <MemReferenceDisplay 
                    currentProcess={this.props.currentProcess}
                    currentPage={this.props.currentPage}
                    currentReference={this.props.currentReference}
                    numReferences={this.props.numReferences}
                />
                <MemReferenceButtons 
                    onUndo={this.props.onUndo}
                    onNextReference={this.props.onNextReference}
                    onNextFault={this.props.onNextFault}
                    onLastReference={this.props.onLastReference}
                />
            </div>
        );
    };
};

export default MemReferenceRow;