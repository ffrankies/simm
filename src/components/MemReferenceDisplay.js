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
                <div className='col h4 h-100'>
                    Process: <span className='badge badge-secondary'>{this.props.currentProcess}</span>
                </div>
                <div className='col h4 h-100'>
                    Page: <span className='badge badge-secondary'>{this.props.currentPage}</span>
                </div>
            </div>
        );
    }

    /**
     * Renders the MemReferenceDisplay component as a column div with some text and two labels
     */
    render() {
        return (
            <div className='col col-md-4'>
                {this.renderReference(this.props.memReference)}
            </div>
        );
    };
};

export default MemReferenceDisplay;