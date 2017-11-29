import Page from './Page';

/**
 * The Page Table class.
 * @since v0.0.1
 * @author Frank Wanye
 */
class PageTable {
    /**
     * Constructs a new, empty page table that grows with each page reference.
     * @param {string} processNumber - the number of process that owns this page table
     */
    constructor(processNumber) {
        this.processNumber = processNumber;
        this.pageList = [];
        this.numPages = -1; // -1 when there are no pages in the page table
        this.numReferences = 0;
        this.numPageFaults = 0;
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
            this.pageList.push(emptyPage);
        }
        return this.pageList[pageNumber];
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
            if (frameNumber !== this.pageList[pageNumber].frameNumber) {
                this.numPageFaults++;
                fault = true;
            }
        }
        this.pageList[pageNumber].updateFrame(frameNumber);
        return fault;
    };
};

export default PageTable;