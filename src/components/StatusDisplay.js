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
        if (this.props.swapSpace.numPCBs() === 0) { // If swap space is empty
            pageList = <ul className='list-group list-group-flush'></ul>;
        } else {
            const pageTables = this.props.swapSpace.processNumbers.map((key) => this.props.swapSpace.get(key));
            const pages = pageTables.map((pageTable) => 
                <li 
                    className='list-group-item p-1' 
                    key={pageTable.processNumber.toString()}
                    style={{background : this.props.colorGenerator.getColor(pageTable.processNumber)}}
                >
                    {this.renderRow(pageTable.processNumber, pageTable.numReferences, pageTable.numPageFaults)}
                </li>
            );
            pageList = <ul className='list-group list-group-flush'>{pages}</ul>;
        }
        return pageList;
    };

    /**
     * Renders the total status in the card footer
     * @return {div} total
     */
    renderTotalStatus() {
        const pageTables = this.props.swapSpace.processNumbers.map((key) => this.props.swapSpace.get(key));
        var totalReferences = 0, totalFaults = 0;
        pageTables.forEach((pageTable) => {
            totalReferences += pageTable.numReferences;
            totalFaults += pageTable.numPageFaults;
        });
        return (
            <div className='card-footer text-muted px-0'>
                {this.renderRow('Total', totalReferences, totalFaults)}
            </div>
        );
    };
    
    /**
     * Renders a row containing three columns.
     * @param {string} id - either the process number, or a text identifier
     * @param {int} references - the number of references for the process / identifier
     * @param {int} faults - the number of faults for the process / identifier
     * @return {div} row - the row containing the provided information
     */
    renderRow(id, references, faults) {
        return (
            <div className='row'>
                <div className='col col-sm-3'>{id}</div>
                <div className='col col-sm-5'> 
                    References <span className='badge badge-dark'>{references}</span>
                </div>
                <div className='col col-sm-4'>
                    Faults <span className='badge badge-dark'>{faults}</span>
                </div>
            </div>
        );
    };

    /**
     * Renders the page table. The page table is to passed to it in props.
     */
    render() {
        return (
            <div className='col col-md-4'>
                <div className='card text-center'>
                    <div className='card-header'>Status</div>
                    {this.renderStatus()}
                    {this.renderTotalStatus()}
                </div>
            </div>
        );
    };
};

export default StatusDisplay;