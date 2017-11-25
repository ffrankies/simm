/**
 * A page that gets displayed in the page table.
 * @since v0.0.1
 * @author Frank Wanye
 */
class Page {
    /**
     * Creates a new page with the given page number.
     * @param {string} processNumber - the process number
     * @param {number} pageNumber - the page number 
     */
    constructor(processNumber, pageNumber) {
        this.processNumber = processNumber;
        this.pageNumber = pageNumber;
        this.frameNumber = -1; // -1 when the page is not in the frame table
    };

    /**
     * Updates the frame number into which the page has been loaded.
     * @param {number} frameNumber - the frame into which the page has been loaded
     */
    updateFrame(frameNumber) {
        this.frameNumber = frameNumber;
    };
};

export default Page;