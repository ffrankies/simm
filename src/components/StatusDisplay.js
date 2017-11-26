import React, { Component } from 'react';

/**
 * Displays the status report as a bootstrap Card.
 * @since v0.0.1
 * @author Frank Wanye
 */
class StatusDisplay extends Component {
    /**
     * Renders the status for each process in the swap space.
     * @return {ul} statusList - List containing the status for each process in the swap space
     */
    renderStatus() {
        var pageList;
        const swapSpaceKeys = Object.keys(this.props.swapSpace);
        if (swapSpaceKeys.length === 0) { // If swap space is empty
            pageList = <ul className='list-group list-group-flush'></ul>;
        } else {
            const pageTables = swapSpaceKeys.map((key) => this.props.swapSpace[key]);
            const pages = pageTables.map((pageTable) => 
                <li className='list-group-item p-1' key={pageTable.processNumber.toString()}>
                    <div className='row w-100'>
                        <div className='col col-sm-3'>{pageTable.processNumber}</div>
                        <div className='col col-sm-5'> 
                            References <span className='badge badge-dark'>{pageTable.numReferences}</span>
                        </div>
                        <div className='col col-sm-4'>
                            Faults <span className='badge badge-dark'>{pageTable.numPageFaults}</span>
                        </div>
                    </div>
                </li>
            );
            pageList = <ul className='list-group list-group-flush'>{pages}</ul>;
        }
        return pageList;
    };

    /**
     * Render the total status in the card footer
     * @return {div} total
     */

    /**
     * Renders the page table. The page table is to passed to it in props.
     */
    render() {
        return (
            <div className='col col-md-4'>
                <div className='card text-center'>
                    <div className='card-header'>Status</div>
                    {this.renderStatus()}
                </div>
            </div>
        );
    };
};

export default StatusDisplay;