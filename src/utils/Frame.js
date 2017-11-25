/**
 * A frame that gets displayed in the frame table.
 * @since v0.0.1
 * @author Frank Wanye
 */
class Frame {
    /**
     * Creates a new frame with the given page number.
     * @param {string} processNumber - the process number that owns the page in this frame
     * @param {number} frameNumber - the frame number
     * @param {number} pageNumber - the page number. When it's -1, no page is in the frame
     * @param {number} clock - the last time the frame was referenced 
     */
    constructor(processNumber, frameNumber, pageNumber, clock) {
        this.processNumber = processNumber;
        this.frameNumber = frameNumber;
        this.pageNumber = pageNumber;
        this.clock = clock;
    };

    /**
     * Updates the page number that has been loaded into the frame.
     * @param {string} processNumber - the process number that owns the page being loaded into this frame
     * @param {number} pageNumber - the page that has been placed into the frame
     * @param {number} clock - the time at which the frame was referenced
     */
    update(processNumber, pageNumber, clock) {
        this.processNumber = processNumber;
        this.pageNumber = pageNumber;
        this.clock = clock;
    };

    /**
     * Checks if the frame is empty. This is done by checking the pageNumber field. If it's -1, the frame is considered
     * empty.
     * @return {boolean} isEmpty - true if it's empty, false otherwise
     */
    isEmpty() {
        return this.pageNumber === -1;
    };
};

export default Frame;