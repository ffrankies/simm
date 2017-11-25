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
            const frame = new Frame(-1, i, -1, this.clock);
            this.frameList.push(frame);
        }
    };

    /**
     * Update the frame table with a new page.
     * @param {Page} page - the page with which to update the frame table
     * @return {Frame} displacedFrame - the frame that was displaced by the incoming page 
     */
    update(page) {
        this.clock++;
        var displacedFrame = new Frame('N/A', page.frameNumber, -1, -1);
        if (page.frameNumber === -1) { // If page is not in frame table
            displacedFrame = this.findEmptyFrame();
            if (displacedFrame.frameNumber === -1) {
                displacedFrame = this.findLRUFrame();
            }        
        }
        this.frameList[displacedFrame.frameNumber].update(page.processNumber, page.pageNumber, this.clock);
        return displacedFrame;
    };
    
    /**
     * Finds the index of the first empty frame in the frameList.
     * @return {Frame} emptyFrame - the empty frame. If there are no empty frames, returns a Frame with a 
     *                              frameNumber of -1
     */
    findEmptyFrame() {
        var emptyFrame = new Frame('N/A', -1, -1, -1);
        for (var i = 0; i < this.maxSize; ++i) {
            if (this.frameList[i].isEmpty()) {
                emptyFrame = this.frameList[i];
                break;
            }
        }
        return emptyFrame;
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