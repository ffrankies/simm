import React, { Component } from 'react';

/**
 * Displays the frame table as a bootstrap Card.
 * @since v0.0.1
 * @author Frank Wanye
 */
class FrameTableDisplay extends Component {
    /**
     * Renders the list of frames in the frame table.
     */
    renderFrameTable() {
        const frames = this.props.frameTable.frameList.map((frame) => 
            <li className='list-group-item'>
                <div className='row w-100'>
                    <div className='col col-sm-4 text-center'>{frame.frameNumber}</div>
                    <div classname='col col-sm-4'> 
                        Page <span className='badge badge-dark'>{frame.pageNumber}</span>
                    </div>
                    <div className='col col-sm-4'>
                        Clock <span className='badge badge-dark'>{frame.clock}</span>
                    </div>
                </div>
            </li>
        );
        const frameList = <ul className='list-group list-group-flush'>{frames}</ul>;
        return frameList;
    };

    /**
     * Renders the page table. The page table is to passed to it in props.
     */
    render() {
        return (
            <div className='col col-md-8'>
                <div className='card text-center'>
                    <div className='card-header'>Frame Table</div>
                    {this.renderFrameTable()}
                </div>
            </div>
        );
    };
};

export default FrameTableDisplay;