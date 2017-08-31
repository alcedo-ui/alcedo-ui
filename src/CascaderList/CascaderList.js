/**
 * Created by Wendy on 2017/8/29.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import CascaderListItem from '../_CascaderListItem/CascaderListItem';

import CascaderCalculation from '../_vendors/CascaderCalculation';

import './CascaderList.css';

export default class CascaderList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            path: CascaderCalculation.calPath(props.value, {
                ...props,
                data: props.items
            })
        };

        this.changeHandler = this::this.changeHandler;

    }


    changeHandler(path) {

        const value = path[path.length - 1].value;

        this.setState({
            path,
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value, path);
        });

    }

    render() {
        const {className, style, listWidth, items, valueField, displayField}=this.props;
        const {path, value}=this.state;

        return (
            <div className={`cascader-list ${className}`}
                 style={style}>
                <CascaderListItem listData={items}
                                  value={value}
                                  path={path}
                                  listWidth={listWidth}
                                  valueField={valueField}
                                  displayField={displayField}
                                  depth={CascaderCalculation.calDepth(items, path)}
                                  onChange={this.changeHandler}/>
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
     * The value of CascaderList.
     */
    value: PropTypes.String,

    /**
     * The width of CascaderList.
     */
    listWidth: PropTypes.number,

    /**
     * The item-data of CascaderList.
     */
    items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

    /**
     * The value field name in data. (default: "value")
     */
    valueField: PropTypes.string,

    /**
     * The display field name in data. (default: "text")
     */
    displayField: PropTypes.string,

    /**
     * The depth of CascaderList.
     */
    depth: PropTypes.number

};

CascaderList.defaultProps = {

    className: '',
    style: null,
    listWidth: 200,

    items: [],

    valueField: 'value',
    displayField: 'text',

};