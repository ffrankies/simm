import React, { Component } from 'react';

import PageTableDisplay from '../components/PageTableDisplay';

class MemState extends Component {
    render() {
        return (
            <div className='row'>
                <PageTableDisplay pageTable={this.props.pageTable} />
                <div className='col'>Placeholder for Frame Table</div>
            </div>
        );
    };
};

export default MemState;