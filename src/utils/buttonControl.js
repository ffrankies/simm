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
    const memReference = this.props.memReferences[currentReference];
    var [processNum, pageNum] = memReference.split(':');
    pageNum = parseInt(pageNum, 2);
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
 * Updates the frame table and the page table for the current process.
 * @param {FrameTable} frameTable - the frame table for this run
 * @param {object} swapSpace - the swap space for this run, contains all the page tables
 * @param {string} processNumber - the current process' number
 * @param {number} pageNumber - the current page's number
 * @since v0.0.1
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

function getPageTable(processNum, swapSpace) {
    const newSwapSpace = swapSpace;
    var pageTable;
    if (!(processNum in newSwapSpace)) {
        newSwapSpace[processNum] = new PageTable(processNum);
    }
    pageTable = newSwapSpace[processNum];
    return [pageTable, newSwapSpace];
};

/**
 * Moves references forward until the next fault occurs.
 * @since v0.0.1
 */
export function runToNextFault() {
    alert('This function has not yet been implemented')
};