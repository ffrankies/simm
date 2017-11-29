import React, { Component } from 'react';

/**
 * The file input form allows a user to load memory references from a file.
 * @since v0.0.1
 * @author Frank Wanye
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
            <div className='form-group form-row my-1 mx-0'>
                <label htmlFor='inputFileName' className='col col-form-label px-0'>
                    Memory Reference File:
                </label>
                <div className='col'>
                    <label className='custom-file'>
                        <input 
                            type='file' 
                            id='inputFileName' 
                            className='custom-file-input' 
                            onChange={this.handleClick} 
                        />
                        <span className='custom-file-control'></span>
                    </label>
                </div>
            </div>
        );
    };
};

export default FileInput;