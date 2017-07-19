import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import List from '../List';

import Util from '../_vendors/Util';

import './Cascader.css';

export default class CascaderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activatedNode: null
        };
        this.changeHandle = this::this.changeHandle;

    }

    changeHandle(activatedNode) {

        if (!activatedNode) {
            return
        }

        this.setState({
            activatedNode
        }, () => {
            if (!activatedNode.children || activatedNode.children.length < 1) {
                const {onChange} = this.props;
                onChange && onChange(value);
            }
        });

    }


    render() {
        const {listData, className, style, listValueField, listDisplayField, listDescriptionField}=this.props;
        const {activatedNode}=this.state;

        // const result = [<List className={`cascader-popup-list`}
        //                       valueField={listValueField}
        //                       displayField={listDisplayField}
        //                       descriptionField={listDescriptionField}
        //                       onChange={this.changeHandle}
        //                       items={listData}/>];
        //
        // if (activatedNode && activatedNode.children && activatedNode.children.length > 0){
        //     result.push(<CascaderList {...this.props}
        //                               listData={activatedNode.children}/>)
        // }
        //
        // return result;

        return (
            <div className={`cascader-list ${className}`}
                 style={style}>

                <List className={`cascader-popup-list`}
                      valueField={listValueField}
                      displayField={listDisplayField}
                      descriptionField={listDescriptionField}
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