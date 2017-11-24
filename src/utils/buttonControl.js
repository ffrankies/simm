// import Page from './Page';
/**
 * Provides utility methods for the buttons that control memory references
 * @since v0.0.1
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
    const page = this.state.pageTable.insert(pageNum);
    const [pageTable, frameTable] = updateTables(this.state.frameTable, this.state.pageTable, processNum, page);
    this.setState({ 
        currentReference : currentReference,
        currentProcess : processNum,
        currentPage : pageNum,
        pageTable : pageTable,
        frameTable : frameTable
    });
        // this.props.updateMemReference(currentReference);
};

function updateTables(frameTable, pageTable, processNumber, page) {
    const updatedFrameTable = frameTable;
    const [frameNum, displacedPageNum] = updatedFrameTable.update(page);
    const updatedPageTable = pageTable;
    updatedPageTable.update(displacedPageNum, -1);
    updatedPageTable.update(page.pageNumber, frameNum);
    return [updatedPageTable, updatedFrameTable];
};

// function updatePageTable(pageTable, processNumber, pageNumber) {
//     const updatedPageTable = pageTable;
//     updatedPageTable.update(pageNumber, -1);
//     return updatedPageTable;
// };

/**
 * Moves references forward until the next fault occurs.
 * @since v0.0.1
 */
export function runToNextFault() {
    alert('This function has not yet been implemented')
};