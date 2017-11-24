import Page from './Page';

/**
 * The Page Table class.
 * @since v0.0.1
 * @author Frank Wanye
 */
class PageTable {
    /**
     * Constructs a new, empty page table that grows with each page reference.
     * @param {int} pageNumber - the number of the first page in the PageTable
     */
    constructor(pageNumber) {
        this.pageList = [];
        this.maxPage = -1; // -1 when there are no pages in the page table
        const page = new Page(pageNumber);
        this.update(page);
    };

    /**
     * Update the frame table with a new page.
     * @param {Page} page - the page with which to update the page table
     */
    update(page) {
        alert('Update page with number: ' + page.number);
        while (page.number > this.maxPage) {
            const emptyPage = new Page(this.maxPage + 1);
            this.pageList.push(emptyPage);
            this.maxPage++;
        }
        this.pageList[page.number] = page;
    };
};

export default PageTable;