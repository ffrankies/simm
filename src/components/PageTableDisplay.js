import React, { Component } from 'react';

/**
 * Displays the page table as a bootstrap Card.
 * @since v0.0.1
 * @author Frank Wanye
 */
class PageTableDisplay extends Component {
    /**
     * Renders the list of pages in the page table.
     */
    renderPageTable() {
        const emptyPageTableCard = (
            <div className='card text-center'>
                <div className='card-header'>
                    Page Table - Process <span className='badge badge-dark'>'N/A'</span>
                </div>
                <ul className='list-group list-group-flush'></ul>
            </div>
        )
        if (this.props.pageTable === undefined) {
            return emptyPageTableCard;
        } 
        return this.props.pageTable.renderPageTableCard(this.props.colorGenerator);
    };

    /**
     * Renders the page table. The page table is to passed to it in props.
     * @return {div} columnDiv - the column div containing the page table
     */
    render() {
        return (
            <div className='col col-md-3'>
                {this.renderPageTable()}
            </div>
        );
    };
};

export default PageTableDisplay;