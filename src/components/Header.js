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
            <div className='page-header'>
                <h1>SIMM - A Memory Management Simulator</h1>
            </div>
        );
    };
};

export default Header;