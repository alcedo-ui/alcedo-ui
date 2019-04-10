/**
 * @file Tfoot component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tf from '../_Tf';

import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

import Util from '../_vendors/Util';
import TableCalculation from '../_vendors/TableCalculation';

class Tfoot extends Component {

    static Align = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    getStyle = (footStyle, index) => {

        const {columnsWidth} = this.props;

        if (!columnsWidth || !columnsWidth[index]) {
            return footStyle;
        }

        return {
            ...footStyle,
            width: columnsWidth[index]
        };

    };

    handleClick = e => {
        const {data, disabled, onFootClick} = this.props;
        !disabled && onFootClick && onFootClick(data, e);
    };

    render() {

        const {
                className, columns, columnsWidth, data, disabled,
                onCellClick
            } = this.props,

            columnsWithSpan = TableCalculation.getColumnsWithSpan(TableFragment.FOOT, columns);

        return (
            <tfoot className={classNames({
                [className]: className,
                [data.rowClassName]: data.rowClassName
            })}
                   style={data.rowStyle}
                   disabled={disabled}
                   onClick={this.handleClick}>
                <tr>
                    {
                        columnsWithSpan && columnsWithSpan.map(({column, span}, index) =>
                            <Tf key={index}
                                className={column.footClassName}
                                style={this.getStyle(column.footStyle, index)}
                                colIndex={index}
                                data={data}
                                renderer={column.footRenderer}
                                align={column.footAlign}
                                span={span}
                                disabled={disabled}
                                onCellClick={onCellClick}/>
                        )
                    }
                </tr>
            </tfoot>
        );

    }
}

Tfoot.propTypes = {

    className: PropTypes.string,

    /**
     * Children passed into table header.
     */
    columns: PropTypes.arrayOf(PropTypes.shape({

        /**
         * width of column
         */
        width: PropTypes.number,

        /**
         * minimum width of column
         */
        minWidth: PropTypes.number,

        /**
         * The class name of header.
         */
        headClassName: PropTypes.string,

        /**
         * Override the styles of header.
         */
        headStyle: PropTypes.object,

        /**
         * The render content in header.
         * (1) string，example： 'id'
         * (2) callback，example：function (colIndex) {return colIndex;}
         */
        headRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * align of table header cell
         */
        headAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * column span of table header
         */
        headSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

        /**
         * The class name of td.
         */
        bodyClassName: PropTypes.string,

        /**
         * Override the styles of td.
         */
        bodyStyle: PropTypes.object,

        /**
         * The render content in table.
         * (1) data key，example： 'id'
         * (2) data key tamplate，example：'${id} - ${name}'
         * (3) callback，example：function (rowData, rowIndex, colIndex) {return rowData.id;}
         */
        bodyRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * align of table body cell
         */
        bodyAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * column span of table body
         */
        bodySpan: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

        /**
         * The class name of footer.
         */
        footClassName: PropTypes.string,

        /**
         * Override the styles of footer.
         */
        footStyle: PropTypes.object,

        /**
         * The render content in footer.
         * (1) string，example： 'id'
         * (2) callback，example：function (colIndex) {return colIndex;}
         */
        footRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * align of table footer cell
         */
        footAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * column span of table foot
         */
        footSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

        /**
         * If true,this column can be sorted.
         */
        sortable: PropTypes.bool,

        /**
         * Sorting property.
         */
        sortingProp: PropTypes.string,

        defaultSortingType: PropTypes.oneOf(Util.enumerateValue(SortingType))

    })).isRequired,

    columnsWidth: PropTypes.arrayOf(PropTypes.number),

    data: PropTypes.array,
    disabled: PropTypes.bool,

    onFootClick: PropTypes.func,
    onCellClick: PropTypes.func

};

Tfoot.defaultProps = {
    disabled: false
};

export default Tfoot;
