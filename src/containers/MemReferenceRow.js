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
                />
                <MemReferenceButtons 
                    onUndo={this.props.onUndo}
                    onNextReference={this.props.onNextReference}
                    onNextFault={this.props.onNextFault}
                />
            </div>
        );
    };
};

export default MemReferenceRow;