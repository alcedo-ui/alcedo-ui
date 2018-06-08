/**
 * @file CascaderListItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import List from '../List';

import SelectMode from '../_statics/SelectMode';

import Valid from '../_vendors/Valid';
import Util from '../_vendors/Util';

class _CascaderListItem extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    formatData = data => {

        if (!data || data.length < 1) {
            return data;
        }

        return data.map(item => {
            if (item.children && item.children.length > 0) {
                item.rightIconCls = 'fas fa-angle-right';
            }
            return item;
        });

    };

    changeHandler = (value, index) => {

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

    };

    render() {

        const {selectMode, listWidth, data, valueField, displayField, path, depth} = this.props,

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
                width: listWidth
            };

        return (
            <div className="cascader-list-item"
                 style={listStyle}>

                <List className={popupListClassName}
                      style={popupListStyle}
                      selectMode={selectMode}
                      data={this.formatData(data)}
                      value={activatedNode}
                      valueField={valueField}
                      displayField={displayField}
                      onChange={this.changeHandler}/>

                {
                    hasChildren ?
                        <_CascaderListItem {...this.props}
                                           data={activatedNode.children}
                                           currDepth={currDepth + 1}/>
                        :
                        null
                }

            </div>
        );

    }
}

_CascaderListItem.propTypes = {

    /**
     * The width of CascaderListItem.
     */
    listWidth: PropTypes.number,

    /**
     * The data of cascader-list.
     */
    data: PropTypes.array,

    path: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
        index: PropTypes.number
    })),

    /**
     * The select mode of CascaderList.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

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

    depth: PropTypes.number

};

_CascaderListItem.defaultProps = {

    selectMode: SelectMode.SINGLE_SELECT,

    listWidth: 200,

    data: [],

    path: [],

    valueField: 'value',
    displayField: 'text',

    currDepth: 0,
    depth: 0

};

export default _CascaderListItem;