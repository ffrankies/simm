/**
 * A frame that gets displayed in the frame table.
 * @since v0.0.1
 * @author Frank Wanye
 */
class Frame {
    /**
     * Creates a new frame with the given page number.
     * @param {int} frameNumber - the frame number
     * @param {int} pageNumber - the page number. When it's -1, no page is in the frame
     * @param {int} clock - the last time the frame was referenced 
     */
    constructor(frameNumber, pageNumber, clock) {
        this.frameNumber = frameNumber;
        this.pageNumber = pageNumber;
        this.clock = clock;
    };

    /**
     * Updates the page number that has been loaded into the frame.
     * @param {int} pageNumber - the page that has been placed into the frame
     * @param {int} clock - the time at which the frame was referenced
     */
    updateFrame(pageNumber, clock) {
        this.pageNumber = pageNumber;
        this.clock = clock;
    };

    /**
     * Checks if the frame is empty. This is done by checking the pageNumber field. If it's -1, the frame is considered
     * empty.
     * @return {bool} isEmpty - true if it's empty, false otherwise
     */
    isEmpty() {
        return this.pageNumber === -1;
    };
};

export default Frame;