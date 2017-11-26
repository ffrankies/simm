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
        var pageList;
        if (this.props.pageTable === undefined) { // Couldn't find a better way to do this check yet
            pageList = <ul className='list-group list-group-flush'></ul>;
        } else {
            const pages = this.props.pageTable.pageList.map((page) => 
                <li className='list-group-item p-1' key={page.pageNumber.toString()}>
                    <div className='row w-100'>
                        <div className='col col-sm-6'>{page.pageNumber}</div>
                        <div className='col col-sm-6'> 
                            Frame <span className='badge badge-dark'>{page.frameNumber}</span>
                        </div>
                    </div>
                </li>
            );
            pageList = <ul className='list-group list-group-flush'>{pages}</ul>;
        }
        return pageList;
    };

    /**
     * Renders the page table. The page table is to passed to it in props.
     */
    render() {
        return (
            <div className='col col-md-3'>
                <div className='card text-center'>
                    <div className='card-header'>Page Table</div>
                    {this.renderPageTable()}
                </div>
            </div>
        );
    };
};

export default PageTableDisplay;