/**
 * @file Tr component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Td from '../_Td';

import TableFragment from '../_statics/TableFragment';
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

    isCollapsed = () => {

        const {idProp, data, expandRows} = this.props;

        if (!expandRows || expandRows.length < 1) {
            return true;
        }

        return TableCalculation.indexOfItemInValue(data, expandRows, idProp) === -1;

    };

    handleClick = e => {
        const {data, rowIndex, disabled, onRowClick} = this.props;
        !disabled && onRowClick && onRowClick(data, rowIndex, e);
    };

    render() {

        const {
                className, selectMode, columns, rowIndex, data, isChecked, disabled, baseColIndex, hasChildren, depth,
                ...respProps
            } = this.props,
            collapsed = this.isCollapsed(),

            rowHasChildren = hasChildren ? hasChildren(data) : false,
            columnsWithSpan = TableCalculation.getColumnsWithSpan(TableFragment.BODY, columns, rowIndex);

        return (
            <Fragment>

                <tr className={classNames({
                    activated: isChecked,
                    'has-children': rowHasChildren,
                    collapsed,
                    [data.rowClassName]: data.rowClassName,
                    [className]: className
                })}
                    style={data.rowStyle}
                    disabled={disabled}
                    onClick={this.handleClick}>
                    {
                        columnsWithSpan && columnsWithSpan.map(({column, span}, colIndex) => column ?
                            <Td {...respProps}
                                key={colIndex}
                                className={column.bodyClassName}
                                style={column.bodyStyle}
                                rowIndex={rowIndex}
                                colIndex={baseColIndex + colIndex}
                                data={data}
                                hasChildren={rowHasChildren}
                                isExpandColumn={(baseColIndex + colIndex) === (selectMode === SelectMode.MULTI_SELECT ? 1 : 0)}
                                collapsed={collapsed}
                                renderer={column.bodyRenderer}
                                align={column.bodyAlign}
                                span={span}
                                disabled={disabled}
                                depth={depth}
                                sortable={column.sortable}
                                sortingProp={column.sortingProp}/>
                            :
                            null
                        )
                    }
                </tr>

                {
                    rowHasChildren && !collapsed && data && data.children && data.children.length > 0 ?
                        data.children.map((item, index) =>
                            <Tr {...this.props}
                                key={index}
                                data={item}
                                depth={depth + 1}/>
                        )
                        :
                        null
                }

            </Fragment>
        );

    }
}

Tr.propTypes = {

    className: PropTypes.string,

    /**
     * The select mode of table.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * The select all mode of table, all or current page.
     */
    selectAllMode: PropTypes.oneOf(Util.enumerateValue(SelectAllMode)),

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

    data: PropTypes.object,
    isChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    expandRows: PropTypes.array,
    baseColIndex: PropTypes.number,
    depth: PropTypes.number,
    idProp: PropTypes.string,

    /**
     * sorting
     */
    sorting: PropTypes.shape({
        prop: PropTypes.string,
        type: PropTypes.oneOf(Util.enumerateValue(SortingType))
    }),

    /**
     * callback
     */
    hasChildren: PropTypes.func,
    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func,
    onExpandChange: PropTypes.func

};

Tr.defaultProps = {
    rowIndex: 0,
    isChecked: false,
    disabled: false,
    expandRows: [],
    baseColIndex: 0,
    depth: 0,
    idProp: 'id'
};

export default Tr;
