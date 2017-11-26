import React, { Component } from 'react';

import PageTableDisplay from '../components/PageTableDisplay';
import FrameTableDisplay from '../components/FrameTableDisplay';
import StatusDisplay from '../components/StatusDisplay';

/**
 * Displays the current memory state of the simulator.
 */
class MemState extends Component {
    render() {
        return (
            <div className='row mt-3'>
                <StatusDisplay swapSpace={this.props.swapSpace} />
                <PageTableDisplay pageTable={this.props.pageTable} />
                <FrameTableDisplay frameTable={this.props.frameTable} />
            </div>
        );
    };
};

export default MemState;