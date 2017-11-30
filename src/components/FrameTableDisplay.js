import React, { Component } from 'react';

/**
 * Displays the frame table as a bootstrap Card.
 * @since v0.0.1
 * @author Frank Wanye
 */
class FrameTableDisplay extends Component {
    /**
     * Determines the class of the list item.
     * @param {frame} frame is the frame to be rendered in the list item
     * @return {object} listStyle - the style to be applied to the list item
     */
    listItemStyle(frame) {
        var listStyle;
        if (this.props.frameTable.lastAccessed === frame.frameNumber) {
            listStyle = {
                background : this.props.colorGenerator.getColor(frame.processNumber),
                border : '2px solid black'
            }
        } else {
            listStyle = {
                background : this.props.colorGenerator.getColor(frame.processNumber)
            }
        }
        return listStyle;
    };

    /**
     * Renders the list of frames in the frame table.
     * @return {ul} frameList - the list of frames in the frame table
     */
    renderFrameTable() {
        const frames = this.props.frameTable.frameList.map((frame) => 
            <li 
                className='list-group-item p1' 
                key={frame.frameNumber.toString()}
                style={this.listItemStyle(frame)}
            >
                {this.renderFrame(frame.frameNumber, frame)}
            </li>
        );
        const frameList = <ul className='list-group list-group-flush'>{frames}</ul>;
        return frameList;
    };
    
    /**
     * Renders the victim frame from the last fault in the card footer
     * @return {div} total
     */
    renderVictimFrame() {
        const victim = this.props.frameTable.victim;
        return (
            <div className='card-footer text-muted px-2'>
                {this.renderFrame('Victim', victim)}
            </div>
        );
    };
    
    /**
     * Renders a single frame.
     * @param {string} id - either the frame number, or a text identifier
     * @param {Frame} frame - the frame to render
     * @return {div} row - the row containing the provided information
     */
    renderFrame(id, frame) {
        return (
            <div className='row'>
                <div className='col col-sm-2'>{id}</div>
                <div className='col col-sm-4'> 
                    Process <span className='badge badge-dark'>{frame.processNumber}</span>
                </div>
                <div className='col col-sm-3'> 
                    Page <span className='badge badge-dark'>{frame.pageNumber}</span>
                </div>
                <div className='col col-sm-3'>
                    Clock <span className='badge badge-dark'>{frame.clock}</span>
                </div>
            </div>
        );
    };

    /**
     * Renders the page table. The page table is to passed to it in props.
     */
    render() {
        return (
            <div className='col col-md-5'>
                <div className='card text-center'>
                    <div className='card-header'>Frame Table</div>
                    {this.renderFrameTable()}
                    {this.renderVictimFrame()}
                </div>
            </div>
        );
    };
};

export default FrameTableDisplay;