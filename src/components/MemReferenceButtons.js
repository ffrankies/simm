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
        return <button type='button' className='btn btn-primary w-75' onClick={fun}>{text}</button>;
    };

    /**
     * Renders the undo, next and next fault buttons
     */
    renderButtons() {
        return (
            <div className='row'>
                <div className='col col-sm-4 text-right'>
                    {this.renderButton('Undo', this.props.onUndo)}
                </div>
                <div className='col col-sm-4 text-right'>
                    {this.renderButton('Next Reference', this.props.onNext)}
                </div>
                <div className='col col-sm-4 text-right'>
                    {this.renderButton('Run to Next Fault', this.props.onNextFault)}
                </div>
            </div>
        );
    };

    /**
     * Renders the buttons as a row in a column div
     */
    render() {
        return (
            <div className='col col-md-8 align-items-center'>
                {this.renderButtons()}
            </div>
        );
    };
};

export default MemReferenceButtons;