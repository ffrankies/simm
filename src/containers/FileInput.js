import React, { Component } from 'react';

/**
 * The file input form
 */
class FileInput extends Component {
    render() {
        return (
            <form class='form-inline'>
                <div class='form-group'>
                    <label for='fileName'>Data File Name:</label>
                    <input type='text' class='form-control' id='fileName' />
                </div>
                <button type='button' class='btn btn-default'>Load Data File</button>
            </form>
        );
    };
};

export default FileInput;