import PCB from './PCB';

/**
 * Holds all the PCBs, and provides easy functions for interacting with them.
 * @since v0.0.1
 * @author Frank Wanye
 */
class SwapSpace {
    /**
     * Constructs an empty SwapSpace object.
     */
    constructor() {
        /** The map of PCBs, indexed by process number */
        this.pcbs = {};
        /** The indexes to the PCBs, stored for easy access */
        this.processNumbers = [];
    };

    /**
     * Creates a clone of the current SwapSpace.
     * @return {SwapSpace} clone - a clone of the PCB
     */
    clone() {
        const swapSpaceClone = new SwapSpace();
        swapSpaceClone.pcbs = this.pcbs;
        swapSpaceClone.processNumbers = this.processNumbers;
        return swapSpaceClone;
    };

    /**
     * Obtains the PCB for a process. Creates an empty PCB for it if there isn't one.
     * @param {number} processNumber - the number of the process for which to get a PCB
     * @return {PCB} processControlBlock - the PCB for the requested process
     */
    get(processNumber) {
        if (processNumber === 'N/A' || processNumber === -1) {
            return undefined;
        }
        if (typeof(this.pcbs[processNumber]) === 'undefined') {
            this.pcbs[processNumber] = new PCB(processNumber);
            this.processNumbers.push(processNumber);
        }
        return this.pcbs[processNumber];
    };

    /**
     * Updates a page for a given process to show that it's been displaced.
     * @param {number} processNumber - the number of the process whose page has been displaced
     * @param {number} pageNumber - the number of the page that has been displaced
     */
    updateDisplacedPage(processNumber, pageNumber) {
        if (processNumber === 'N/A' || processNumber === -1) {
            return;
        }
        // alert('Displacing page: ' + processNumber + ' ' + pageNumber);
        this.pcbs[processNumber].update(pageNumber, -1);
    };

    /**
     * Updates a page for a given process to show that it has been placed in a frame.
     * @param {number} processNumber - the number of the process whose page has been placed in a frame
     * @param {number} pageNumber - the number of the page that has been placed in a frame
     * @param {number} frameNumber - the frame into which the page has been placed
     * @return {boolean} fault - true if page allocation caused a fault
     */
    updateAllocatedPage(processNumber, pageNumber, frameNumber) {
        return this.pcbs[processNumber].update(pageNumber, frameNumber);
    };

    /**
     * Inserts a page into the given process's page table.
     * @param {number} processNumber - the number of the process whose page has been displaced
     * @param {number} pageNumber - the number of the page that has been displaced
     * @return {Page} insertedPage - the page that was inserted into the process table
     */
    insertPage(processNumber, pageNumber) {
        const pcb = this.get(processNumber);
        return pcb.insert(pageNumber);
    };

    /**
     * Returns the number of PCBs that are stored in the swap space.
     * @return {number} numberOfPCBs - the number of PCBs stored in the swap space
     */
    numPCBs() {
        return this.processNumbers.length;
    };
};

export default SwapSpace;