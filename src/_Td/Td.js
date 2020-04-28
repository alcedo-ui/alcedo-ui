/**
 * @file Td component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import HorizontalAlign from '../_statics/HorizontalAlign';
import SortingType from '../_statics/SortingType';

import Util from '../_vendors/Util';

class Td extends Component {

    static Align = HorizontalAlign;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    handleRenderer = () => {

        const {collapsed, renderer, rowIndex, colIndex, data, parentData, tableData, depth, path, scrollEl} = this.props;

        switch (typeof renderer) {
            case 'function':
                return renderer(data, rowIndex, colIndex, parentData, tableData, collapsed, depth, path, scrollEl);
            default:
                return renderer;
        }

    };

    handleTitle = () => {

        const {collapsed, title, rowIndex, colIndex, data, parentData, tableData, depth, path, scrollEl} = this.props;

        switch (typeof title) {
            case 'function':
                return title(data, rowIndex, colIndex, parentData, tableData, collapsed, depth, path, scrollEl);
            default:
                return title;
        }

    };

    handleClick = e => {
        const {data, rowIndex, colIndex, disabled, onCellClick} = this.props;
        !disabled && onCellClick && onCellClick(data, rowIndex, colIndex, e);
    };

    render() {

        const {
            className, style, align, span, noWrap,
            sortable, sortingProp, sorting
        } = this.props;

        return (
            <td className={classNames({
                [`align-${align}`]: align && align !== HorizontalAlign.LEFT,
                'no-wrap': noWrap,
                sorting: sortable && sortingProp && sorting && sorting.prop && sorting.prop === sortingProp,
                [className]: className
            })}
                style={style}
                colSpan={span || null}
                title={this.handleTitle()?.toString() || null}
                onClick={this.handleClick}>
                <span>{this.handleRenderer()}</span>
            </td>
        );

    }
}

Td.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    rowIndex: PropTypes.number,
    colIndex: PropTypes.number,

    data: PropTypes.object,
    title: PropTypes.any,
    parentData: PropTypes.object,
    tableData: PropTypes.array,
    renderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    align: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),
    span: PropTypes.number,
    disabled: PropTypes.bool,
    noWrap: PropTypes.bool,
    collapsed: PropTypes.bool,
    depth: PropTypes.number,
    path: PropTypes.array,
    scrollEl: PropTypes.object,

    /**
     * sorting
     */
    sortable: PropTypes.bool,
    sortingProp: PropTypes.string,
    sorting: PropTypes.shape({
        prop: PropTypes.string,
        type: PropTypes.oneOf(Util.enumerateValue(SortingType))
    }),

    /**
     * callback
     */
    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func,
    onExpandChange: PropTypes.func

};

Td.defaultProps = {

    rowIndex: 0,
    colIndex: 0,

    disabled: false,
    noWrap: false,
    collapsed: true,
    depth: 0

};

export default Td;
