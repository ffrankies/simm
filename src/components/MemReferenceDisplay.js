import React, { Component } from 'react';

/**
 * Displays the current memory reference
 */
class MemReferenceDisplay extends Component {
    
    /**
     * Chooses what to display in the MemReference
     * @param {string} memReference - the memory reference string, of the format "P#: Page#"
     * @return {<h2 />} referenceDisplay - the display for the reference  
     */
    renderReference(memReference) {
        return (
            <div className='row h-100'>
                <div className='d-inline col col-sm-4 h5 py-1 h-100'>
                    Process: <span className='badge badge-dark'>{this.props.currentProcess}</span>
                </div>
                <div className='d-inline col col-sm-3 h5 py-1 px-0 h-100'>
                    Page: <span className='badge badge-dark'>{this.props.currentPage}</span>
                </div>
                <div className='d-inline col col-sm-5 h5 py-1 h-100'>
                    Reference: <span className='badge badge-dark'>
                        {this.props.currentReference} / {this.props.numReferences}
                    </span>
                </div>
            </div>
        );
    }

    /**
     * Renders the MemReferenceDisplay component as a column div with some text and two labels
     */
    render() {
        return (
            <div className='col col-md-5'>
                {this.renderReference(this.props.memReference)}
            </div>
        );
    };
};

export default MemReferenceDisplay;