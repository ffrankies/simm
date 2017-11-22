import React, { Component } from 'react';

/**
 * The file input form
 */
class FileInput extends Component {
    /**
     * Constructs a FileInput form, and sets the inital memory references to an empty array
     * @param {object} props - the props passed down to this component 
     */
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };

    /**
     * Handles a button click by loading memory references from the file in the input field
     */
    handleClick() {
        this.props.loadMemReferences(this.props.setMemReferences);
    };

    /**
     * Renders the file input form
     */
    render() {
        /** 
         * TODO: Replace fileName input with dropdown, otherwise can type in anything funny, and apparently the 
         * result is undefined, because javascript
         * https://www.w3schools.com/bootstrap/bootstrap_forms_inputs.asp
         */
        return (
            <form className='form-inline row'>
                <div className='form-group col-md-8'>
                    <label htmlFor='fileName'>MemReferences File Name:</label>
                    <input type='text' className='form-control' id='fileName' placeholder='input3a.data' />
                </div>
                <button type='button' className='btn btn-default col-md-4' onClick={this.handleClick}>
                    Load Memory References
                </button>
            </form>
        );
    };
};

export default FileInput;