/**
 * @file CascaderListItem component
 * @author wendy(wendy.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import List from '../List';

import Valid from '../_vendors/Valid';

class CascaderListItem extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.formatData = ::this.formatData;
        this.changeHandle = ::this.changeHandle;

    }

    formatData(data) {

        if (!data || data.length < 1) {
            return data;
        }

        return data.map(item => {
            if (item.children && item.children.length > 0) {
                item.rightIconCls = 'fas fa-angle-right';
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
            node: value,
            index
        };

        onChange && onChange(path);

    }

    render() {

        const {listWidth, data, valueField, displayField, path, depth} = this.props,

            currDepth = this.props.currDepth || 0,
            activatedNode = currDepth in path ? data[path[currDepth].index] : null,
            hasChildren = activatedNode && activatedNode.children && activatedNode.children.length > 0,

            listStyle = currDepth === 0 ?
                {width: listWidth * Valid.range(depth, 1)}
                :
                null,

            popupListClassName = classNames('cascader-popup-list', {
                first: currDepth === 0,
                last: currDepth === depth - 1
            }),
            popupListStyle = {
                width: listWidth,
                zIndex: 99 - currDepth
            };

        return (
            <div className="cascader-list-item"
                 style={listStyle}>

                <List className={popupListClassName}
                      style={popupListStyle}
                      data={this.formatData(data)}
                      value={activatedNode}
                      valueField={valueField}
                      displayField={displayField}
                      onChange={this.changeHandle}/>

                {
                    hasChildren ?
                        <CascaderListItem {...this.props}
                                          data={activatedNode.children}
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
    data: PropTypes.array,

    /**
     *
     */
    path: PropTypes.arrayOf(PropTypes.shape({

        /**
         *
         */
        node: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),

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
     * The current depth.
     */
    currDepth: PropTypes.number,

    /**
     *
     */
    depth: PropTypes.number

};

CascaderListItem.defaultProps = {

    listWidth: 200,

    data: [],

    path: [],

    valueField: 'value',
    displayField: 'text',

    currDepth: 0,
    depth: 0

};

export default CascaderListItem;