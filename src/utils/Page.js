/**
 * A page that gets displayed in the page table.
 * @since v0.0.1
 * @author Frank Wanye
 */
class Page {
    /**
     * Creates a new page with the given page number.
     * @param {int} number - the page number 
     */
    constructor(number) {
        this.number = number;
        this.frame = -1; // -1 when the page is not in the frame table
    };

    /**
     * Updates the frame number into which the page has been loaded.
     * @param {int} frame - the frame into which the page has been loaded
     */
    updateFrame(frame) {
        this.frame = frame;
    };
};

export default Page;