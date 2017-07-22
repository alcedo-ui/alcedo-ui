import React, {Component} from 'react';
import PropTypes from 'prop-types';

import List from '../List';

import Valid from '../_vendors/Valid';

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

    changeHandle(value, index) {

        if (!value) {
            return;
        }

        const {onChange} = this.props,
            depth = this.props.depth || 0;

        let path = this.props.path.slice(0, depth + 1);
        path[depth] = {
            value,
            index
        };

        onChange && onChange(path);

    }

    render() {

        const {listWidth, listData, path} = this.props,

            depth = this.props.depth || 0,
            activatedNode = depth in path ? listData[path[depth].index] : null,

            hasChildren = activatedNode && activatedNode.children && activatedNode.children.length > 0,

            listStyle = depth === 0 ?
                {width: listWidth * Valid.range(path.length + (hasChildren ? 1 : 0), 1)}
                :
                null,

            popupListStyle = {
                width: listWidth,
                zIndex: 99 - depth
            };

        return (
            <div className="cascader-list"
                 style={listStyle}>

                <List className={`cascader-popup-list`}
                      style={popupListStyle}
                      onChange={this.changeHandle}
                      items={this.formatData(listData)}/>

                {
                    hasChildren ?
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

    listWidth: PropTypes.number,

    /**
     * The data of popup-list.
     */
    listData: PropTypes.array,

    path: PropTypes.arrayOf(PropTypes.shape({

        /**
         *
         */
        value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),

        /**
         *
         */
        index: PropTypes.number

    })),

    depth: PropTypes.number

};

CascaderList.defaultProps = {

    listWidth: 200,

    listData: [],

    path: [],

    depth: 0

};