import React, { Component } from 'react';

import MemReferenceRow from './MemReferenceRow';
import MemState from './MemState';

import PageTable from '../utils/PageTable';
import { undoReference, nextReference, runToNextFault } from '../utils/buttonControl';
// import Page from '../utils/Page';

/**
 * Renders the memory management simulator's state.
 * @since v0.0.1
 * @author Frank Wanye
 */
class SIMMState extends Component {
    /**
     * Constructs the SIMMState object.
     * @param {object} props - the properties passed to this object
     */
    constructor(props) {
        super(props);
        this.state = {
            currentReference : 0,
            currentProcess : 'N/A',
            currentPage : 'N/A',
            swapSpace : {},
            pageTable : [],
            frameTable : []
        };
        this.bindFunctions();
    };
    
    /**
     * Updates the current memory reference.
     */
    // updateMemReference() {
    //     const memReference = this.props.memReferences[this.state.currentReference];
    //     const splitReference = memReference.split(':');
    //     const process = splitReference[0];
    //     const page = splitReference[1];
    //     this.setState({
    //         currentProcess : process,
    //         currentPage : page
    //     });
    // };

    // splitReference(references, refNum) {
    //     const memReference = references[refNum];
    //     const splitReference = memReference.split(':');

    // };

    resetSIMMState(nextProps) {
        // alert('resetting SIMMState');
        const memReference = nextProps.memReferences[0];
        var [processNumber, pageNumber] = memReference.split(':');
        pageNumber = parseInt(pageNumber, 2);
        const pageTable = new PageTable(pageNumber);
        this.setState({
            currentReference : 0,
            currentProcess : processNumber,
            currentPage : pageNumber,
            swapSpace : {},
            pageTable : pageTable,
            frameTable : []
        });
    };

    bindFunctions() {
        this.undoReference = undoReference.bind(this);
        this.nextReference = nextReference.bind(this);
        this.runToNextFault = runToNextFault.bind(this);
    };

    componentWillReceiveProps(nextProps) {
        // alert(nextProps.memReferences);
        if (nextProps.memReferences != null && nextProps.memReferences.length > 0) {
            this.resetSIMMState(nextProps);
        }
    };

    /**
     * Renders the page table for the current process and the frame list.
     * @return {div} mem_state_row - the row containing the page and frame tables
     */
    render() {
        return (
            <div>
                <MemReferenceRow 
                    currentProcess={this.state.currentProcess}
                    currentPage={this.state.currentPage}
                    onUndo={this.undoReference}
                    onNext={this.nextReference}
                    onNextFault={this.runToNextFault}
                />
                <MemState pageTable={this.state.pageTable}/>
            </div>
        );
    };
};

export default SIMMState;