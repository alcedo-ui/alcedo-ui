import React, {Component} from 'react';
import PropTypes from 'prop-types';

import List from '../List';

import './Cascader.css';

export default class CascaderList extends Component {

    constructor(props) {

        super(props);

        this.formatData = this::this.formatData;
        this.changeHandle = this::this.changeHandle;

    }

    formatData(data) {

        if (!data || data.length < 1) {
            return data;
        }

        return data.map(item => {
            if (item.children && item.children.length > 0) {
                item.rightIconCls = 'fa fa-angle-right';
            }
            return item;
        });

    }

    changeHandle(activatedNode, index) {

        if (!activatedNode) {
            return;
        }

        const {onChange} = this.props,
            depth = this.props.depth || 0;

        let path = this.props.path.slice(0, depth + 1);
        path[depth] = index;

        onChange && onChange(path);

    }

    render() {

        const {listData, className, style, path} = this.props,
            depth = this.props.depth || 0,
            activatedNode = depth in path ? listData[path[depth]] : null;

        return (
            <div className={`cascader-list ${className}`}
                 style={style}>

                <List className={`cascader-popup-list`}
                      onChange={this.changeHandle}
                      items={this.formatData(listData)}/>

                {
                    activatedNode && activatedNode.children && activatedNode.children.length > 0 ?
                        <CascaderList {...this.props}
                                      listData={activatedNode.children}
                                      depth={depth + 1}/>
                        :
                        null
                }

            </div>
        );

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