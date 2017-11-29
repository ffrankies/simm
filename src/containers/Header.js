import React, { Component } from 'react';
import FileInput from '../components/FileInput';

/**
 * Header component - displays the app name and allows the user to select a file containing memory references.
 * @author Frank Wanye
 * @since 0.0.1
 */
class Header extends Component {
    /**
     * Renders the Header component
     * @return {nav} navBar - the navigation bar that serves as the App's header
     */
    render() {
        return (
            <nav className='navbar navbar-light bg-light w-75 mx-auto'>
                <div className='navbar-brand mb-0 mx-1 h1'>
                    <strong>{'{SIMM}'} A Memory Management Simulator</strong>
                </div>
                <FileInput 
                    loadMemReferences={this.props.loadMemReferences} 
                    setMemReferences={this.props.setMemReferences} 
                />
            </nav>
        );
    };
};

export default Header;