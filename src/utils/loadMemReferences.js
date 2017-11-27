/**
 * Loads memReferences from the given file
 * @param {function} setMemReferences - the callback function to be called on completion of ajax request
 */
export function loadMemReferences(setMemReferences) {
    const file = document.getElementById('inputFileName').files[0];
    if (typeof(file) === 'undefined') {
        return;
    }
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = function (event) {
        const memReferences = event.target.result;
        setMemReferences(memReferences);
    }
    reader.onerror = function (event) {
        alert('Failed to load file.');
    }
};

/**
 * Callback function that sets the memReferences variable in App's state
 * @param {string} memReferences - the memory references loaded from the file
 */
export function setMemReferences(memReferences) {
    memReferences = memReferences.split('\n');
    this.setState({ memReferences : memReferences });
};