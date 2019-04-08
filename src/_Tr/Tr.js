/**
 * @file Tr component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Td from '../_Td';

import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

import Util from '../_vendors/Util';
import TableCalculation from '../_vendors/TableCalculation';

class Tr extends Component {

    static Align = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    handleClick = e => {
        const {data, rowIndex, disabled, onRowClick} = this.props;
        !disabled && onRowClick && onRowClick(data, rowIndex, e);
    };

    render() {

        const {
                className, columns, rowIndex, data, isChecked, disabled,
                onCellClick
            } = this.props,

            columnsWithSpan = TableCalculation.getColumnsWithSpan(columns, rowIndex);

        return (
            <tr className={classNames({
                [className]: className,
                activated: isChecked,
                [data.rowClassName]: data.rowClassName
            })}
                style={data.rowStyle}
                disabled={disabled}
                onClick={this.handleClick}>
                {
                    columnsWithSpan && columnsWithSpan.map(({column, span}, colIndex) => column ?
                        <Td key={colIndex}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                            data={data}
                            className={column.bodyClassName}
                            style={column.bodyStyle}
                            renderer={column.bodyRenderer}
                            align={column.bodyAlign}
                            span={span}
                            disabled={disabled}
                            onCellClick={onCellClick}/>
                        :
                        null
                    )
                }
            </tr>
        );

    }
}

Tr.propTypes = {

    rowIndex: PropTypes.number,

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
         * align of table header cell
         */
        headAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * The render content in header.
         * (1) string，example： 'id'
         * (2) callback，example：function (colIndex) {return colIndex;}
         */
        headRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

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
         * If true,this column can be sorted.
         */
        sortable: PropTypes.bool,

        /**
         * Sorting property.
         */
        sortingProp: PropTypes.string,

        defaultSortingType: PropTypes.oneOf(Util.enumerateValue(SortingType)),

        span: PropTypes.func

    })).isRequired,

    data: PropTypes.object,
    isChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,

    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func

};

Tr.defaultProps = {
    rowIndex: 0,
    isChecked: false,
    disabled: false
};

export default Tr;
