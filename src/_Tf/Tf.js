/**
 * @file Tf component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Statics
import HorizontalAlign from '../_statics/HorizontalAlign';
import SortingType from '../_statics/SortingType';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';

class Tf extends Component {

    static Align = HorizontalAlign;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    /**
     * Handle th content render
     * @returns {*}
     */
    handleRender = () => {

        const {rowIndex, colIndex, rowData, tableData, footData, scrollEl, renderer, bodyRenderer} = this.props;

        if (typeof renderer === 'function') {
            return renderer(rowData, rowIndex, colIndex, tableData, footData, bodyRenderer, scrollEl);
        }

        return renderer;

    };

    /**
     * Handle th content render
     * @returns {*}
     */
    handleTitle = () => {

        const {colIndex, tableData, scrollEl, title} = this.props;

        if (typeof title === 'function') {
            return title(tableData, colIndex, scrollEl);
        }

        return title;

    };

    render() {

        const {
            className, style, align, noWrap, span,
            onCellClick
        } = this.props;

        return (
            <td className={classNames({
                [`align-${align}`]: align && align !== HorizontalAlign.LEFT,
                'no-wrap': noWrap,
                [className]: className
            })}
                style={style}
                colSpan={span || null}
                title={this.handleTitle()?.toString() || null}
                onClick={onCellClick}>
                {this.handleRender()}
            </td>
        );

    }
}

Tf.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    rowIndex: PropTypes.number,
    colIndex: PropTypes.number,
    rowData: PropTypes.object,
    tableData: PropTypes.array,
    footData: PropTypes.array,
    title: PropTypes.any,

    renderer: PropTypes.any,
    bodyRenderer: PropTypes.any,
    align: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),
    span: PropTypes.number,
    noWrap: PropTypes.bool,
    scrollEl: PropTypes.object,

    onCellClick: PropTypes.func

};

Tf.defaultProps = {
    colIndex: 0,
    align: HorizontalAlign.LEFT,
    noWrap: false
};

export default Tf;
