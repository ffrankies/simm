import React from 'react';
import Page from './Page';

/**
 * The Process Control Block class.
 * @since v0.0.1
 * @author Frank Wanye
 */
class PCB {
    /**
     * Constructs a new, empty page table that grows with each page reference.
     * @param {number} processNumber - the number of process that owns this page table
     */
    constructor(processNumber) {
        /** The number of the process that owns this PCB */
        this.processNumber = processNumber;
        /** The page table for the process that owns this PCB */
        this.pageTable = [];
        /** The largest index into the page table */
        this.numPages = -1; // -1 when there are no pages in the page table
        /** The number of references made for all pages in the page table */
        this.numReferences = 0;
        /** The number of faults caused by all the pages in the page table */
        this.numPageFaults = 0;
        /** The page number of the last accessed page */
        this.lastAccessed = -1;
    };

    /**
     * Inserts a page into the page table, if it's not already there.
     * @param {number} pageNumber - the number of the page to insert
     * @return {Page} insertedPage - the page with the given frame number
     */
    insert(pageNumber) {
        while (pageNumber > this.numPages) {
            this.numPages++;
            const emptyPage = new Page(this.processNumber, this.numPages);
            this.pageTable.push(emptyPage);
        }
        return this.pageTable[pageNumber];
    };

    /**
     * Update the page table with a new page.
     * @param {number} pageNumber - the page with which to update the page table
     * @param {number} frameNumber - the frame number into which the page was inserted
     * @return {boolean} fault - true if the page that was updated caused a fault
     */
    update(pageNumber, frameNumber) {
        if (pageNumber === -1) {
            return false;
        }
        var fault = false;
        if (frameNumber !== -1) {
            this.numReferences++;
            if (frameNumber !== this.pageTable[pageNumber].frameNumber) {
                this.numPageFaults++;
                fault = true;
            }
        }
        this.pageTable[pageNumber].updateFrame(frameNumber);
        this.lastAccessed = pageNumber;
        return fault;
    };

    /**
     * Determines the class of the list item.
     * @param {page} page - is the page to be rendered in the list item
     * @param {ColorGenerator} colorGenerator - the color generator for color-coding the page table
     * @return {object} listStyle - the style to be applied to the list item
     */
    listItemStyle(page, colorGenerator) {
        var listStyle;
        if (this.lastAccessed === page.pageNumber) {
            listStyle = {
                background : colorGenerator.getColor(this.processNumber),
                border : '2px solid black'
            }
        } else {
            listStyle = {
                background : colorGenerator.getColor(this.processNumber)
            }
        }
        return listStyle;
    };

    /**
     * Renders the page table as a list of pages
     * @param {ColorGenerator} colorGenerator - the color generator for color-coding the page table
     * @return {div} pageTableList - the list of page tables
     */
    renderPageTable(colorGenerator) {
        const pages = this.pageTable.map((page) => 
            <li 
                className='list-group-item p-1' 
                key={page.pageNumber.toString()}
                style={this.listItemStyle(page, colorGenerator)}
            >
                <div className='row w-100'>
                    <div className='col col-sm-6'>{page.pageNumber}</div>
                    <div className='col col-sm-6'> 
                        Frame <span className='badge badge-dark'>{page.frameNumber}</span>
                    </div>
                </div>
            </li>
        );
        return <ul className='list-group list-group-flush'>{pages}</ul>;
    };

    /**
     * Renders the list of pages in the page table, wrapped in a card.
     * @param {ColorGenerator} colorGenerator - the color generator for color-coding the page table
     * @return {div} pageTableCard - the page table as a Bootstrap Card div
     */
    renderPageTableCard(colorGenerator) {
        const pageTableCard = (
            <div className='card text-center'>
                <div className='card-header'>
                    Page Table - Process <span className='badge badge-dark'>{this.processNumber}</span>
                </div>
                {this.renderPageTable(colorGenerator)}
            </div>
        )
        return pageTableCard;
    };
};

export default PCB;