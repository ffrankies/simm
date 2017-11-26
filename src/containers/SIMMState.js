import React, { Component } from 'react';

import MemReferenceRow from './MemReferenceRow';
import MemState from './MemState';

import PageTable from '../utils/PageTable';
import FrameTable from '../utils/FrameTable';
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
            frameTable : new FrameTable()
        };
        this.bindFunctions();
    };

    resetSIMMState(nextProps) {
        // alert('resetting SIMMState');
        // const memReference = nextProps.memReferences[0];
        // var [processNumber, pageNumber] = memReference.split(':');
        // pageNumber = parseInt(pageNumber, 2);
        // const pageTable = new PageTable(pageNumber);
        // const frameTable = new FrameTable();
        // const [frameNumber, displacedPageNumber] = frameTable.update(pageTable.pageList[0]);
        // pageTable.update(displacedPageNumber, -1); // Displaced page no longer has a frame
        // pageTable.update(pageNumber, frameNumber); // Inserted page is now at <frameNumber>
        this.setState({
            currentReference : -1,
            currentProcess : 'N/A',
            currentPage : 'N/A',
            swapSpace : {},
            pageTable : new PageTable(),
            frameTable : new FrameTable()
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
                <MemState 
                    pageTable={this.state.swapSpace[this.state.currentProcess]} 
                    frameTable={this.state.frameTable} 
                    swapSpace={this.state.swapSpace}
                />
            </div>
        );
    };
};

export default SIMMState;