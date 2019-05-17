/**
 * @file BaseTable component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ColGroup from '../_ColGroup';
import Thead from '../_Thead';
import Tbody from '../_Tbody';
import Tfoot from '../_Tfoot';

import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

import Util from '../_vendors/Util';
import TableCalculation from '../_vendors/TableCalculation';

class BaseTable extends Component {

    static Fragment = TableFragment;
    static Align = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {
            className, style, fixed, fragment, columns, headColumns, bodyColumns, isHeadHidden, isFootHidden,
            ...restProps
        } = this.props;

        return (
            <table className={classNames('base-table', {
                [className]: className
            })}
                   style={style}>

                <ColGroup columns={TableCalculation.getColumnsWithSpan(fragment, bodyColumns || columns)}/>

                {
                    !isHeadHidden && (fragment === TableFragment.HEAD || (!fixed && !fragment)) ?
                        <Thead {...restProps}
                               columns={headColumns || [columns]}/>
                        :
                        null
                }

                {
                    !fragment ?
                        <Tbody {...restProps}
                               columns={bodyColumns || columns}/>
                        :
                        null
                }

                {/** render foot if a footRenderer exists in columns */}
                {
                    !isFootHidden && (fragment === TableFragment.FOOT || (!fixed && !fragment)) ?
                        <Tfoot {...restProps}
                               columns={bodyColumns || columns}/>
                        :
                        null
                }

            </table>
        );

    }
}

BaseTable.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The select mode of table.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * The select all mode of table, all or current page.
     */
    selectAllMode: PropTypes.oneOf(Util.enumerateValue(SelectAllMode)),

    fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(Util.enumerateValue(HorizontalAlign))]),

    fragment: PropTypes.oneOf(Util.enumerateValue(TableFragment)),

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

    })),
    headColumns: PropTypes.array,
    bodyColumns: PropTypes.array,

    data: PropTypes.array,
    baseColIndex: PropTypes.number,
    disabled: PropTypes.bool,
    expandRows: PropTypes.array,

    /**
     * hidden
     */
    isHeadHidden: PropTypes.bool,
    isFootHidden: PropTypes.bool,

    /**
     * sorting
     */
    sorting: PropTypes.shape({
        prop: PropTypes.string,
        type: PropTypes.oneOf(Util.enumerateValue(SortingType))
    }),
    defaultSortingType: PropTypes.oneOf(Util.enumerateValue(SortingType)),
    sortingAscIconCls: PropTypes.string,
    sortingDescIconCls: PropTypes.string,
    sortingFunc: PropTypes.func,

    /**
     * callback
     */
    onSortChange: PropTypes.func,
    onHeadClick: PropTypes.func,
    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func,
    onFootClick: PropTypes.func,
    onExpandChange: PropTypes.func

};

BaseTable.defaultProps = {

    baseColIndex: 0,
    disabled: false,
    expandRows: [],

    isHeadHidden: false,
    isFootHidden: false,

    defaultSortingType: SortingType.ASC,
    sortingAscIconCls: 'fas fa-sort-up',
    sortingDescIconCls: 'fas fa-sort-down'

};

export default BaseTable;
