import React, { Component } from 'react';

import MemReferenceRow from './MemReferenceRow';
import MemState from './MemState';

import FrameTable from '../utils/FrameTable';
import ColorGenerator from '../utils/ColorGenerator';
import { undoReference, nextReference, runToNextFault, runToLastReference } from '../utils/buttonControl';

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
            currentReference : -1,
            currentProcess : 'N/A',
            currentPage : 'N/A',
            swapSpace : {},
            frameTable : new FrameTable(),
            colorGenerator : new ColorGenerator()
        };
        this.bindFunctions();
    };

    /**
     * Binds utility functions to this object
     */
    bindFunctions() {
        this.undoReference = undoReference.bind(this);
        this.nextReference = nextReference.bind(this);
        this.runToNextFault = runToNextFault.bind(this);
        this.runToLastReference = runToLastReference.bind(this);
    };

    /**
     * Resets the SIMM state if new references are loaded in.
     * @param {object} nextProps - The incoming properties
     */
    componentWillReceiveProps(nextProps) {
        if (nextProps.memReferences != null && nextProps.memReferences.length > 0) {
            this.resetSIMMState(nextProps);
        }
    };
    
    /**
     * Resets the SIMM state.
     */
    resetSIMMState() {
        this.setState({
            currentReference : -1,
            currentProcess : 'N/A',
            currentPage : 'N/A',
            swapSpace : {},
            frameTable : new FrameTable(),
            colorGenerator : new ColorGenerator()
        });
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
                    currentReference={this.state.currentReference+1}
                    numReferences={this.props.memReferences.length}
                    onUndo={this.undoReference}
                    onNextReference={this.nextReference}
                    onNextFault={this.runToNextFault}
                    onLastReference={this.runToLastReference}
                />
                <MemState 
                    pageTable={this.state.swapSpace[this.state.currentProcess]} 
                    frameTable={this.state.frameTable} 
                    swapSpace={this.state.swapSpace}
                    colorGenerator={this.state.colorGenerator}
                />
            </div>
        );
    };
};

export default SIMMState;