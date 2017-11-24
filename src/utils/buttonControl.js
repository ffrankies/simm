import Page from './Page';
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
    } else {
        const memReference = this.props.memReferences[currentReference];
        var [processNum, pageNum] = memReference.split(':');
        pageNum = parseInt(pageNum, 2);
        const pageTable = updatePageTable(this.state.pageTable, processNum, pageNum);
        this.setState({ 
            currentReference : currentReference,
            currentProcess : processNum,
            currentPage : pageNum,
            pageTable : pageTable 
        });
        // this.props.updateMemReference(currentReference);
    }
};

function updatePageTable(pageTable, processNumber, pageNumber) {
    const updatedPageTable = pageTable;
    const page = new Page(pageNumber);
    updatedPageTable.update(page);
    return updatedPageTable;
};

/**
 * Moves references forward until the next fault occurs.
 * @since v0.0.1
 */
export function runToNextFault() {
    alert('This function has not yet been implemented')
};