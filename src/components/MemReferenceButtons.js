import React, { Component } from 'react';

/**
 * Contains the buttons that manipulate what page reference.
 */
class MemReferenceButtons extends Component {

    /**
     * Renders a single button.
     * @param {string} text - the text to display in the button
     * @param {function} fun - the onClick function
     */
    renderButton(text, fun) {
        return <button type='button' className='btn btn-dark w-75' onClick={fun}>{text}</button>;
    };

    /**
     * Renders the undo, next and next fault buttons
     */
    renderButtons() {
        return (
            <div className='btn-group' role='group' aria-label='control-buttons'>
                {this.renderButton('Reset', this.props.onReset)}
                {this.renderButton('Undo', this.props.onUndo)}
                {this.renderButton('Next Step', this.props.onNextStep)}
                {this.renderButton('Next Reference', this.props.onNextReference)}
                {this.renderButton('Next Fault', this.props.onNextFault)}
                {this.renderButton('Last Reference', this.props.onLastReference)}
            </div>
        );
    };

    /**
     * Renders the buttons as a row in a column div
     */
    render() {
        return (
            <div className='col col-md-8 text-right'>
                {this.renderButtons()}
            </div>
        );
    };
};

export default MemReferenceButtons;