import React, { Component } from 'react';

/**
 * Container for interacting with memory references
 */
class MemReferences extends Component {
    /**
     * Constructs a MemReferences component, and sets the inital memory references to an empty array
     * @param {object} props - the props passed down to this component 
     */
    constructor(props) {
        super(props);
        this.state = {
            currentReference : 0
        };
    };

    /**
     * Renders the current reference
     */
    renderReference() {
        var ref;
        if (this.props.memReferences.length === 0) {
            ref = (
                <div className='col-md-4'>
                    <h2>
                        Reference: <span className='label label-default'>N/A</span> <span 
                        className='label label-default'>N/A</span>
                    </h2>
                </div>
            );
        } else {
            const reference = this.props.memReferences[this.state.currentReference];
            const splitReference = reference.split(':');
            ref = (
                <div className='col-md-4'>
                    <h2>
                        Reference: <span className='label label-primary'>{splitReference[0]}</span> <span 
                        className='label label-primary'>{splitReference[1]}</span>
                    </h2>
                </div>
            );
        }
        return ref;
    };

    render() {
        return (
            <div className='row'>
                {this.renderReference()}
            </div>
        );
    };
};

export default MemReferences;