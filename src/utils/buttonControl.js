import PageTable from './PageTable';

/**
 * Provides utility methods for the buttons that control memory references.
 * @since v0.0.1
 * @author Frank Wanye
 */

/**
 * Undoes the previous memory reference function.
 * @since v0.0.1
 */
export function undoReference() {
    alert('This function has not yet been implemented')
};

/**
 * Loads the next memory reference.
 * @since v0.0.1
 */
export function nextReference() {
    var currentReference = this.state.currentReference + 1;
    if (currentReference === this.props.memReferences.length) {
        alert('Reached the last reference - cannot move further');
        return;
    }
    const [processNum, pageNum] = splitReference(this.props.memReferences, currentReference);
    const [swapSpace, frameTable] = updateTables(this.state.frameTable, this.state.swapSpace, processNum, pageNum);
    this.setState({ 
        currentReference : currentReference,
        currentProcess : processNum,
        currentPage : pageNum,
        swapSpace : swapSpace,
        frameTable : frameTable
    });
};

/**
 * Splits the reference string into a process number and a page number.
 * @param {array} memReferences - A list of reference strings of the form "Proc#:    Page#"
 * @param {number} referenceNumber - The index of the current reference string
 * @return {array} [process number, page number]
 */
function splitReference(memReferences, referenceNumber) {
    const memReference = memReferences[referenceNumber];
    var [processNumber, pageNumber] = memReference.split(':');
    processNumber = processNumber.substring(1);
    processNumber = parseInt(processNumber, 10);
    pageNumber = parseInt(pageNumber, 2);
    return [processNumber, pageNumber]
};

/**
 * Updates the frame table and the page table for the current process.
 * @since v0.0.1
 * @param {FrameTable} frameTable - the frame table for this run
 * @param {object} swapSpace - the swap space for this run, contains all the page tables
 * @param {string} processNumber - the current process' number
 * @param {number} pageNumber - the current page's number
 * @return {array} [updated swap space, updated frame table]
 */
function updateTables(frameTable, swapSpace, processNumber, pageNumber) {
    const [updatedPageTable, updatedSwapSpace] = getPageTable(processNumber, swapSpace);
    const page = updatedPageTable.insert(pageNumber);
    const updatedFrameTable = frameTable;
    const displacedFrame = updatedFrameTable.update(page);
    updatedPageTable.update(displacedFrame.pageNumber, -1);
    updatedPageTable.update(pageNumber, displacedFrame.frameNumber);
    updatedSwapSpace[processNumber] = updatedPageTable
    return [updatedSwapSpace, updatedFrameTable];
};

/**
 * Updates the frame table and the page table for the current process.
 * @since v0.0.1
 * @param {string} processNumber - the current process' number
 * @param {object} swapSpace - the swap space for this run, contains all the page tables
 * @return {array} [updated page table, updated swap space]
 */
function getPageTable(processNumber, swapSpace) {
    const newSwapSpace = swapSpace;
    var pageTable;
    if (!(processNumber in newSwapSpace)) {
        newSwapSpace[processNumber] = new PageTable(processNumber);
    }
    pageTable = newSwapSpace[processNumber];
    return [pageTable, newSwapSpace];
};

/**
 * Moves references forward until the next fault occurs.
 * @since v0.0.1
 */
export function runToNextFault() {
    alert('This function has not yet been implemented')
};