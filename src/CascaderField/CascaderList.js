/**
 * Created by Wendy on 2017/8/29.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import CascaderListItem from './CascaderListItem';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';
import CascaderCalculation from '../_vendors/CascaderCalculation';

import './CascaderField.css';

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
        const {listWidth, items, valueField, displayField}=this.props;
        const {path, value}=this.state;

        return (
            <div className="cascader-list">
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
     *
     */
    listWidth: PropTypes.number,

    /**
     * The data of popup-list.
     */
    items: PropTypes.array,

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

CascaderList.defaultProps = {

    className: '',
    style: null,
    listWidth: 200,

    items:[],

    valueField: 'value',
    displayField: 'text',

    separator: '/'

};