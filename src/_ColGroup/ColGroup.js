/**
 * @file ColGroup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Statics
import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

// Vendors
import isEmpty from 'lodash/isEmpty';
import Util from '../_vendors/Util';

class ColGroup extends Component {

    static Fragment = TableFragment;
    static Align = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    getColStyle = column => {

        const {columnKeyField, columnsWidth, useColumnsWidth, defaultColumnWidth} = this.props,
            result = {};

        // width
        result.width = useColumnsWidth ?
            (columnsWidth && columnsWidth.get((columnKeyField && column[columnKeyField]) || column))
            :
            (column.width || defaultColumnWidth);

        // min width
        result.minWidth = column.minWidth ?
            column.minWidth
            :
            result.width;

        return isEmpty(result) ? null : result;

    };

    render() {

        const {columns, ignoreColumnSpan} = this.props;

        return columns ?
            <colgroup>
                {
                    columns.map(({column, span}, index) => column ?
                        <col key={index}
                             style={this.getColStyle(column)}
                             span={ignoreColumnSpan ? null : (span && span > 1 ? span : null)}/>
                        :
                        null
                    )
                }
            </colgroup>
            :
            null;

    }

}

ColGroup.propTypes = {

    /**
     * Children passed into table header.
     */
    columns: PropTypes.arrayOf(PropTypes.shape({

        /**
         * unique keyof column.
         */
        key: PropTypes.string,

        /**
         * fixed position of column ( 'left' / 'right' )
         */
        fixed: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * width of column
         */
        width: PropTypes.number,

        /**
         * minimum width of column
         */
        minWidth: PropTypes.number,

        /**
         * align of current column
         */
        align: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

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
         * The render content in table head.
         *  (1) callback:
         *      function (tableData, colIndex) {
         *          return colIndex;
         *      }
         *
         *  (2) others:
         *      render whatever you pass
         */
        headRenderer: PropTypes.any,

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
         * align of table body cell
         */
        bodyAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * The render content in table body.
         *  (1) callback:
         *      function (rowData, rowIndex, colIndex, parentData, tableData, collapsed, depth, path) {
         *          return rowData.id;
         *      }
         *
         *  (2) others:
         *      render whatever you pass
         */
        bodyRenderer: PropTypes.any,

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
         * align of table footer cell
         */
        footAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * The render content in table foot.
         *  (1) callback:
         *      function (tableData, colIndex) {
         *          return colIndex;
         *      }
         *
         *  (2) others:
         *      render whatever you pass
         */
        footRenderer: PropTypes.any,

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
    columnKeyField: PropTypes.string,
    columnsWidth: PropTypes.object,
    useColumnsWidth: PropTypes.bool,

    /**
     * column resizable
     */
    isColumnResizable: PropTypes.bool,
    defaultColumnWidth: PropTypes.number,
    minColumnWidth: PropTypes.number,

    ignoreColumnSpan: PropTypes.bool

};

ColGroup.defaultProps = {

    columnKeyField: 'key',
    useColumnsWidth: false,

    /**
     * column resizable
     */
    isColumnResizable: false,
    defaultColumnWidth: 100,
    minColumnWidth: 64,

    ignoreColumnSpan: false

};

export default ColGroup;
