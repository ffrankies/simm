import Frame from './Frame';

/**
 * The Frame Table class.
 * @since v0.0.1
 * @author Frank Wanye
 */
class FrameTable {
    /**
     * Constructs a new, empty frame table.
     */
    constructor() {
        this.frameList = [];
        this.maxSize = 16;
        this.clock = 0;
        this.fillPageTable();
    };

    /**
     * Fills the page table with empty frames.
     */
    fillPageTable() {
        for (var i = 0; i < this.maxSize; ++i) {
            const frame = new Frame(i, -1, this.clock);
            this.frameList.push(frame);
        }
    };

    /**
     * Update the frame table with a new page.
     * @param {Page} page - the page with which to update the frame table
     * @return {array} 
     *  - {int} frameNumber - the frame number into which the page was inserted
     *  - {int} displacedPageNumber - the page that got displaced by the
     */
    update(page) {
        alert('Update frame table with page with number: ' + page.pageNumber);
        this.clock++;
        var frameNumber = page.frameNumber;
        var displacedPageNumber = -1;
        if (frameNumber === -1) { // If page is not in frame table
            frameNumber = this.findEmptyFrame();
            if (frameNumber === -1) {
                const replacedFrame = this.findLRUFrame();
                frameNumber = replacedFrame.frameNumber;
                displacedPageNumber = replacedFrame.pageNumber;
            }        
        }
        this.frameList[frameNumber] = new Frame(frameNumber, page.pageNumber, this.clock);
        return [frameNumber, displacedPageNumber];
    };
    
    /**
     * Finds the index of the first empty frame in the frameList.
     * @return {int} emptyFrameIndex - the index of the first empty frame. If there are no empty frames, returns -1
     */
    findEmptyFrame() {
        var emptyFrameIndex = -1;
        for (var i = 0; i < this.maxSize; ++i) {
            if (this.frameList[i].isEmpty()) {
                emptyFrameIndex = i;
                break;
            }
        }
        return emptyFrameIndex;
    };

    /**
     * Finds the least recently used frame by looking at the clock variable in each frame.
     * @return {Frame} LRUFrame - the least recently used frame
     */
    findLRUFrame() {
        var LRUFrame = this.frameList[0];
        for (var i = 1; i < this.maxSize; ++i) {
            if (this.frameList[i].clock < LRUFrame.clock) {
                LRUFrame = this.frameList[i];
            }
        }
        return LRUFrame;
    };
};

export default FrameTable;