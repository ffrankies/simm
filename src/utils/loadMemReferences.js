import $ from 'jquery';

/**
 * Loads memReferences from the given file
 * @param {function} setMemReferences - the callback function to be called on completion of ajax request
 */
export function loadMemReferences(setMemReferences) {
    const fileName = document.getElementById('inputFileName').value;
    const filePath = './inputs/' + fileName;
    $.get(filePath, function(memReferences, status) {
        setMemReferences(memReferences, status); 
    }, 'text');
};

/**
 * Callback function that sets the memReferences variable in App's state
 * @param {string} memReferences - the memory references loaded from the file
 * @param {string} status - the status of the ajax request that calls this function
 */
export function setMemReferences(memReferences, status) {
    if (status === 'success') {
        memReferences = memReferences.split('\n');
        this.setState({ memReferences : memReferences });
    } else {
        alert('The requested file does not exist');
    }
};