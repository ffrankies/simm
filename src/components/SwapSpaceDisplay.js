import React, { Component } from 'react';

/**
 * Displays the entire swap space as a bootstrap Card columns group.
 * @since v0.0.1
 * @author Frank Wanye
 */
class SwapSpaceDisplay extends Component {
    /**
     * Renders all the page tables in the swap space.
     */
    renderSwapSpace() {
        const pageTables = this.props.swapSpace.processNumbers.map((key) =>
            this.props.swapSpace.get(key).renderPageTableCard(this.props.colorGenerator));
        return pageTables
    };

    /**
     * Renders the page table. The page table is to passed to it in props.
     * @return {div} row - the column div containing the page table
     */
    render() {
        return (
            <div className='row w-100 mt-2'>
                <div className='card text-center w-100'>
                    <div className='card-header'>Swap Space</div>
                    <div className='card-body'>
                        <div className='card-columns'>
                            {this.renderSwapSpace()}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default SwapSpaceDisplay;