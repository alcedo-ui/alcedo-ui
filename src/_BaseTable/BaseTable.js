/**
 * @file BaseTable component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Thead from '../_Thead';
import Tbody from '../_Tbody';
import Tfoot from '../_Tfoot';

import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

import Util from '../_vendors/Util';
import TableCalculation from '../_vendors/TableCalculation';

class BaseTable extends Component {

    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {
            className, style, columns, data, disabled,
            sorting, defaultSortingType, sortingAscIconCls, sortingDescIconCls, sortingFunc,
            onSortChange, onHeadClick, onRowClick, onCellClick, onFootClick
        } = this.props;

        return (
            <div className={classNames('base-table', {
                [className]: className
            })}
                 style={style}>
                <table>

                    <Thead columns={columns}
                           data={data}
                           sorting={sorting}
                           defaultSortingType={defaultSortingType}
                           sortingAscIconCls={sortingAscIconCls}
                           sortingDescIconCls={sortingDescIconCls}
                           onSortChange={onSortChange}
                           onHeadClick={onHeadClick}/>

                    <Tbody columns={columns}
                           data={data}
                           disabled={disabled}
                           onRowClick={onRowClick}
                           onCellClick={onCellClick}/>

                    {/** render foot if a footerRenderer exists in columns */}
                    {
                        TableCalculation.hasFooterRenderer(columns) ?
                            <Tfoot columns={columns}
                                   data={data}
                                   disabled={disabled}
                                   onFootClick={onFootClick}
                                   onCellClick={onCellClick}/>
                            :
                            null
                    }

                </table>
            </div>
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
     * Children passed into table header.
     */
    columns: PropTypes.arrayOf(PropTypes.shape({

        /**
         * The class name of header.
         */
        headerClassName: PropTypes.string,

        /**
         * Override the styles of header.
         */
        headerStyle: PropTypes.object,

        /**
         * The render content in header.
         * (1) string，example： 'id'
         * (2) callback，example：function (tableData, colIndex) {return colIndex;}
         */
        headerRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * The class name of td.
         */
        cellClassName: PropTypes.string,

        /**
         * Override the styles of td.
         */
        cellStyle: PropTypes.object,

        /**
         * The render content in table.
         * (1) data key，example： 'id'
         * (2) data key tamplate，example：'${id} - ${name}'
         * (3) callback，example：function (rowData, rowIndex, colIndex) {return rowData.id;}
         */
        cellRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * The class name of footer.
         */
        footerClassName: PropTypes.string,

        /**
         * Override the styles of footer.
         */
        footerStyle: PropTypes.object,

        /**
         * The render content in footer.
         * (1) string，example： 'id'
         * (2) callback，example：function (tableData, colIndex) {return colIndex;}
         */
        footerRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * If true, this column can be sorted.
         */
        sortable: PropTypes.bool,

        /**
         * Sort field.
         */
        sortingProp: PropTypes.string,

        defaultSortingType: PropTypes.oneOf(Util.enumerateValue(SortingType)),

        /**
         * Column span callback
         * example: function (colIndex, rowIndex) {return colIndex === 0 ? 2 : null;}
         */
        span: PropTypes.func

    })).isRequired,

    data: PropTypes.array,

    disabled: PropTypes.bool,

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

    onSortChange: PropTypes.func,
    onHeadClick: PropTypes.func,
    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func,
    onFootClick: PropTypes.func

};

BaseTable.defaultProps = {
    defaultSortingType: SortingType.ASC,
    sortingAscIconCls: 'fas fa-angle-up',
    sortingDescIconCls: 'fas fa-angle-down'
};

export default BaseTable;
