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
    const newState = goToNextReference(this.state, this.props);
    if (newState.length === 0) {
        return;
    }
    this.setState({ 
        currentReference : newState[0],
        currentProcess : newState[1],
        currentPage : newState[2],
        swapSpace : newState[3],
        frameTable : newState[4]
    });
};

/**
 * Advances execution logic to the end of the next memory reference.
 * @param {object} state - the current state of the SIMMState component
 * @param {object} props - the current properties of the SIMMState component
 * @return {array} updatedStateParams - [reference, process number, page number, swap space,  frame table, fault].
 *                                      When the last reference is reached, returns an empty array
 */
function goToNextReference(state, props) {
    var currentReference = state.currentReference + 1;
    if (currentReference === props.memReferences.length) {
        alert('Reached the last reference - cannot move further');
        return [];
    }
    const [processNum, pageNum] = splitReference(props.memReferences, currentReference);
    const [swapSpace, frameTable, fault] = updateTables(state.frameTable, state.swapSpace, processNum, pageNum);
    return [currentReference, processNum, pageNum, swapSpace, frameTable, fault]
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
    const updatedSwapSpace = swapSpace.clone();
    const updatedFrameTable = frameTable.clone();
    const page = updatedSwapSpace.insertPage(processNumber, pageNumber);
    const displacedFrame = updatedFrameTable.update(page);
    updatedSwapSpace.updateDisplacedPage(displacedFrame.processNumber, displacedFrame.pageNumber);
    const fault = updatedSwapSpace.updateAllocatedPage(processNumber, pageNumber, displacedFrame.frameNumber);
    return [updatedSwapSpace, updatedFrameTable, fault];
};

// /**
//  * Updates the frame table and the page table for the current process.
//  * @since v0.0.1
//  * @param {string} processNumber - the current process' number
//  * @param {object} swapSpace - the swap space for this run, contains all the page tables
//  * @return {array} [updated page table, updated swap space]
//  */
// function getPageTable(processNumber, swapSpace) {
//     const newSwapSpace = swapSpace;
//     var pageTable;
//     if (!(processNumber in newSwapSpace)) {
//         newSwapSpace[processNumber] = new PageTable(processNumber);
//     }
//     pageTable = newSwapSpace[processNumber];
//     return [pageTable, newSwapSpace];
// };

/**
 * Moves references forward until the next fault occurs.
 * @since v0.0.1
 */
export function runToNextFault() {
    var newState = [];
    const state = this.state;
    do {
        const currentState = goToNextReference(state, this.props);
        if (currentState.length === 0) {
           break;
        }
        newState = currentState;
        state.currentReference = newState[0];
        state.currentProcess = newState[1];
        state.currentPage = newState[2];
        state.swapSpace = newState[3];
        state.frameTable = newState[4];
    } while (newState[5] !== true);
    if (newState.length === 0) {
        return;
    }
    this.setState({ 
        currentReference : newState[0],
        currentProcess : newState[1],
        currentPage : newState[2],
        swapSpace : newState[3],
        frameTable : newState[4]
    });
};

/**
 * Moves references forward until the last reference.
 * @since v0.0.1
 */
export function runToLastReference() {
    var newState = [];
    const state = this.state;
    do {
        const currentState = goToNextReference(state, this.props);
        if (currentState.length === 0) {
           break;
        }
        newState = currentState;
        state.currentReference = newState[0];
        state.currentProcess = newState[1];
        state.currentPage = newState[2];
        state.swapSpace = newState[3];
        state.frameTable = newState[4];
    } while (true);
    if (newState.length === 0) {
        return;
    }
    this.setState({ 
        currentReference : newState[0],
        currentProcess : newState[1],
        currentPage : newState[2],
        swapSpace : newState[3],
        frameTable : newState[4]
    });
};