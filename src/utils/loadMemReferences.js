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
 * Callback function that sets the memReferences variable in App's state.
 * @param {string} memReferenceString - the memory references loaded from the file
 */
export function setMemReferences(memReferenceString) {
    var memReferences = memReferenceString.split('\n');
    memReferences = sanitizeMemoryRefences(memReferences);
    this.setState({ memReferences : memReferences });
};

/**
 * Makes sure that only lines that match the input format are loaded
 * @param {array} memReferences - the unsanitized memory refences
 * @return {array} sanitizedMemReferences - the sanitized memory references
 */
function sanitizeMemoryRefences(memReferences) {
    const sanitizedMemReferences = [];
    const pattern = /P\d+:?\s[01]+/i;
    for (let reference of memReferences) {
        if (pattern.test(reference) === true) {
            sanitizedMemReferences.push(reference);
        }
    }
    return sanitizedMemReferences;
};