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
        this.setState({ currentReference : currentReference });
    }
};

/**
 * Moves references forward until the next fault occurs.
 * @since v0.0.1
 */
export function runToNextFault() {
    alert('This function has not yet been implemented')
};