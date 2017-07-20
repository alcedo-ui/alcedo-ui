import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import List from '../List';

import './Cascader.css';

export default class CascaderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activatedNode: null
        };
        this.changeHandle = this::this.changeHandle;
        // this.onItemTouchTapHandle = this::this.onItemTouchTapHandle;

    }

    changeHandle(activatedNode, index) {

        if (!activatedNode) {
            return
        }

        this.setState({
            activatedNode
        }, () => {
            if (!activatedNode.children || activatedNode.children.length < 1) {
                const {onChange} = this.props;
                onChange && onChange(activatedNode, index);
            }
        });

    }




    render() {
        const {listData, className, style}=this.props;
        const {activatedNode}=this.state;


        return (
            <div className={`cascader-list ${className}`}
                 style={style}>

                <List className={`cascader-popup-list`}
                      onChange={this.changeHandle}
                      items={listData}/>

                {
                    activatedNode && activatedNode.children && activatedNode.children.length > 0 ?
                        <CascaderList {...this.props}
                                      listData={activatedNode.children}/>
                        :
                        null
                }

            </div>
        )

    }
}

CascaderList.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The data of popup-list.
     */
    listData: PropTypes.array

};