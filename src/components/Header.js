/**
 * Header component - contains app name
 * @author Frank Wanye
 * @since 0.0.1
 */
import React, { Component } from 'react';

/**
 * Header component - contains app name
 */
class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-light bg-light w-75 mx-auto'>
                <h1 className='navbar-brand mb-0 mx-1'>
                    <strong>SIMM - A Memory Management Simulator</strong>
                </h1>
            </nav>
        );
    };
};

export default Header;