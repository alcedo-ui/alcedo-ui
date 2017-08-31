import React, {Component} from 'react';
import PropTypes from 'prop-types';

import List from '../List';

import Valid from '../_vendors/Valid';

import '../CascaderField/CascaderField.css';

export default class CascaderListItem extends Component {

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
            currDepth = this.props.currDepth || 0;

        let path = this.props.path.slice(0, currDepth + 1);
        path[currDepth] = {
            value,
            index
        };

        onChange && onChange(path);

    }

    render() {

        const {listWidth, listData, valueField, displayField, path, depth} = this.props,

            currDepth = this.props.currDepth || 0,
            activatedNode = currDepth in path ? listData[path[currDepth].index] : null,
            hasChildren = activatedNode && activatedNode.children && activatedNode.children.length > 0,

            listStyle = currDepth === 0 ?
            {width: listWidth * Valid.range(depth, 1)}
                :
                null,

            popupListClassName = (currDepth === 0 ? ' first' : '') + (currDepth === depth - 1 ? ' last' : ''),
            popupListStyle = {
                width: listWidth,
                zIndex: 99 - currDepth
            };

        return (
            <div className="cascader-list-item"
                 style={listStyle}>

                <List className={'cascader-popup-list' + popupListClassName}
                      style={popupListStyle}
                      items={this.formatData(listData)}
                      value={activatedNode}
                      valueField={valueField}
                      displayField={displayField}
                      mode={List.Mode.RADIO}
                      onChange={this.changeHandle}/>

                {
                    hasChildren ?
                        <CascaderListItem {...this.props}
                                          listData={activatedNode.children}
                                          currDepth={currDepth + 1}/>
                        :
                        null
                }

            </div>
        );

    }
}

CascaderListItem.propTypes = {

    /**
     * The width of CascaderListItem.
     */
    listWidth: PropTypes.number,

    /**
     * The data of cascader-list.
     */
    listData: PropTypes.array,

    /**
     *
     */
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

    /**
     * The value field name in data. (default: "value")
     */
    valueField: PropTypes.string,

    /**
     * The display field name in data. (default: "text")
     */
    displayField: PropTypes.string,

    /**
     *
     */
    currDepth: PropTypes.number,

    /**
     *
     */
    depth: PropTypes.number

};

CascaderListItem.defaultProps = {

    listWidth: 200,

    listData: [],

    path: [],

    valueField: 'value',
    displayField: 'text',

    currDepth: 0,
    depth: 0

};