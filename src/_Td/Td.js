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

        const {collapsed, renderer, rowIndex, colIndex, data, depth} = this.props;

        switch (typeof renderer) {
            case 'function':
                return renderer(data, rowIndex, colIndex, collapsed, depth);
            default:
                return renderer;
        }

    };

    handleClick = e => {
        const {data, rowIndex, colIndex, disabled, onCellClick} = this.props;
        !disabled && onCellClick && onCellClick(data, rowIndex, colIndex, e);
    };

    render() {

        const {
            className, style, align, span,
            sortable, sortingProp, sorting
        } = this.props;

        return (
            <td className={classNames({
                [`align-${align}`]: align && align !== HorizontalAlign.LEFT,
                sorting: sortable && sortingProp && sorting && sorting.prop && sorting.prop === sortingProp,
                [className]: className
            })}
                style={style}
                colSpan={span || null}
                onClick={this.handleClick}>
                {this.handleRenderer()}
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
    renderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    align: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),
    span: PropTypes.number,
    disabled: PropTypes.bool,
    collapsed: PropTypes.bool,
    depth: PropTypes.number,

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
    collapsed: true,
    depth: 0

};

export default Td;
