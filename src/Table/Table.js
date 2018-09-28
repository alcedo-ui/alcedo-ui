/**
 * @file Table component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';

import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Thead from '../_Thead';
import TableBody from '../_TableBody';
import Pagging from '../Pagging';
import BriefPagging from '../BriefPagging';
import Theme from '../Theme';

import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortType from '../_statics/SortType';

import Util from '../_vendors/Util';
import Valid from '../_vendors/Valid';
import Calculation from '../_vendors/Calculation';

class Table extends Component {

    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortType = SortType;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {

            /**
             * sort construct
             *  {
             *	    prop: '', // col name
             *	    type: 1: 'asc' | -1: 'desc'
             *  }
             */
            sort: props.sortInitConfig,

            scrollTop: 0,
            scrollLeft: 0,
            bodyHeight: 0,

            pagging: {
                pageSize: Calculation.pageSize(props.defaultPageSize, props.pageSizes, 10),
                page: props.page
            },

            value: Calculation.getInitValue(props),

            sortedData: this.sortData(props.data, props.sortInitConfig)

        };

    }

    getCurrentPageData = (state = this.state) => {

        const {sortedData, pagging} = state;

        if (!sortedData || sortedData.length < 1 || !pagging) {
            return [];
        }

        return sortedData.slice(pagging.page * pagging.pageSize, (pagging.page + 1) * pagging.pageSize)
                         .filter(item => item && !item.disabled);

    };

    isHeadChecked = () => {

        const {selectAllMode, data} = this.props,
            {value} = this.state;

        if (!value || value.length < 1) {
            return false;
        }

        const valueLen = value.length;

        if (selectAllMode === SelectAllMode.ALL) {
            const dataLen = data.filter(item => item && !item.disabled).length;
            return dataLen > 0 && valueLen === dataLen;
        } else if (selectAllMode === SelectAllMode.CURRENT_PAGE) {
            const currentPageData = this.getCurrentPageData();
            return currentPageData.every(item => value.includes(item));
        }

    };

    isHeadIndeterminate = () => {

        const {selectAllMode, data} = this.props,
            {value, pagging} = this.state;

        if (!value || value.length < 1) {
            return false;
        }

        const valueLen = value.length;

        if (selectAllMode === SelectAllMode.ALL) {
            const dataLen = data.filter(item => item && !item.disabled).length;
            return dataLen > 0 && valueLen < dataLen;
        } else if (selectAllMode === SelectAllMode.CURRENT_PAGE) {
            const currentPageData = this.getCurrentPageData(),
                len = currentPageData.reduce((result, item) => result + (value.includes(item) ? 1 : 0), 0);
            return len > 0 && len < Math.min(currentPageData.length, pagging.pageSize);
        }

    };

    isItemChecked = (rowData, value = this.state.value) => {

        const {selectMode, idProp} = this.props;

        if (!rowData || !value) {
            return false;
        }

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:

                let index = value.findIndex(item => (idProp in item) && (idProp in rowData)
                    && item[idProp] === rowData[idProp]);

                if (index < 0) {
                    index = value.indexOf(rowData);
                }

                return index >= 0;

            case SelectMode.SINGLE_SELECT:
                return value[idProp] === rowData[idProp];
        }

    };

    headCheckBoxChangeHandler = checked => {

        const {selectAllMode, data} = this.props;
        let result;

        if (selectAllMode === SelectAllMode.ALL) {
            result = checked ? data.filter(item => !item.disabled) : [];
        } else {

            const {idProp} = this.props,
                {value} = this.state,
                currentPageData = this.getCurrentPageData();
            result = value.slice();

            if (checked) {
                if (!result || result.length < 1) {
                    result = currentPageData;
                } else {
                    for (let item of currentPageData) {
                        if (result.findIndex(valueItem =>
                            idProp in item && idProp in valueItem && item[idProp] === valueItem[idProp]) === -1) {
                            result.push(item);
                        }
                    }
                }
            } else {
                for (let item of currentPageData) {
                    const index = result.findIndex(valueItem =>
                        idProp in item && idProp in valueItem && item[idProp] === valueItem[idProp]);
                    if (index > -1) {
                        result.splice(index, 1);
                    }
                }
            }

        }

        this.setState({
            value: result
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(result);
        });

    };

    sortHandler = col => {

        const {data, defaultSortType} = this.props;
        let {sort} = this.state,
            type = col.defaultSortType || defaultSortType;

        if (sort && sort.prop === col.sortProp) {
            type = -sort.type;
        }

        sort = {
            prop: col.sortProp,
            type
        };

        const sortedData = this.sortData(data, sort);

        this.setState({
            sort,
            sortedData
        }, () => {
            const {onSort} = this.props;
            onSort && onSort(sort);
        });

    };

    sortData = (data, sort = (this.state ? this.state.sort : null)) => {

        if (!sort) {
            return data;
        }

        const {sortFunc} = this.props;
        let copyData = data.slice();

        if (sortFunc) {
            copyData = sortFunc(copyData, sort);
        } else {
            copyData.sort((a, b) => {
                if (!isNaN(a[sort.prop]) && !isNaN(b[sort.prop])) {
                    return (Number(a[sort.prop]) - Number(b[sort.prop])) * sort.type;
                } else {
                    return (a[sort.prop] + '').localeCompare(b[sort.prop] + '') * sort.type;
                }
            });
        }

        return copyData;

    };

    multiSelectHandler = (rowData, rowIndex) => {

        if (!rowData) {
            return;
        }

        const {idProp} = this.props,
            {value} = this.state,
            checked = this.isItemChecked(rowData, value);

        if (checked) {

            let index = value.findIndex(item => (idProp in item) && (idProp in rowData)
                && item[idProp] === rowData[idProp]);

            if (index < 0) {
                index = value.indexOf(rowData);
            }

            value.splice(index, 1);

        } else {
            value.push(rowData);
        }

        this.setState({
            value
        }, () => {

            const {onChange, onSelect, onDeselect} = this.props;

            if (checked) {
                onSelect && onSelect([rowData]);
            } else {
                onDeselect && onDeselect([rowData]);
            }

            onChange && onChange(value, rowIndex);

        });

    };

    singleSelectHandler = (rowData, rowIndex) => {

        if (!rowData) {
            return;
        }

        const checked = !this.isItemChecked(rowData, this.state.value),
            value = checked ? rowData : null;

        this.setState({
            value
        }, () => {

            const {onChange, onSelect, onDeselect} = this.props;

            if (checked) {
                onSelect && onSelect(rowData);
            } else {
                onDeselect && onDeselect(rowData);
            }

            onChange && onChange(value, rowIndex);

        });

    };

    rowClickHandler = (rowData, rowIndex, e) => {

        if (!rowData) {
            return;
        }

        const {disabled} = this.props;
        if (disabled) {
            return;
        }

        const {onRowClick} = this.props;
        onRowClick && onRowClick(rowData, rowIndex, e);

        const {selectMode} = this.props;

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                this.multiSelectHandler(rowData, rowIndex);
                return;
            case SelectMode.SINGLE_SELECT:
                this.singleSelectHandler(rowData, rowIndex);
                return;
        }

    };

    cellClickHandler = (data, rowIndex, colIndex, e) => {

        const {disabled} = this.props;
        if (disabled) {
            return;
        }

        const {onCellClick} = this.props;
        onCellClick && onCellClick(data, rowIndex, colIndex, e);

    };

    calSelectedCount = () => {

        const {selectMode} = this.props,
            {value} = this.state;

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                return value.length;
            case SelectMode.SINGLE_SELECT:
                return value ? 1 : 0;
        }

        return 0;

    };

    paggingData = data => {

        const {pagging} = this.state,
            {pageSize, page} = pagging,
            len = data.length;

        let start = page * pageSize,
            stop = start + pageSize;

        start = start < 0 ? 0 : start;
        stop = stop > len ? len : stop;

        return data.slice(start, stop);

    };

    pageChangedHandler = pagging => {

        if (typeof pagging.pageSize === 'object') {
            pagging.pageSize = pagging.pageSize.value;
        }

        const {isClearSelectionOnChangePage} = this.props,
            state = {
                pagging
            };

        if (isClearSelectionOnChangePage) {
            state.value = [];
        }

        this.setState(state, () => {

            const {onPageChange} = this.props;
            onPageChange && onPageChange(pagging.page, pagging.pageSize);

            if (isClearSelectionOnChangePage) {
                const {onChange} = this.props;
                onChange && onChange(state.value);
            }

        });

    };

    resetPage = (data = this.props.data, pagging = this.state.pagging) => {

        const {onPageChange} = this.props;
        let {page, pageSize} = pagging,
            total = Math.ceil(data.length / pageSize);

        if (page + 1 > total) {
            page = Valid.range(total - 1, 0);
            this.setState({
                pagging: {
                    pageSize,
                    page: Valid.range(total - 1, 0)
                }
            }, () => {
                onPageChange && onPageChange(page, pageSize);
            });
            return;
        }

        onPageChange && onPageChange(page, pageSize);

    };

    handleColumns = (columns = this.props.columns) => {

        const {
                hasLineNumber, disabled,
                selectTheme, selectMode, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls
            } = this.props,
            {value} = this.state;

        let finalColumns = cloneDeep(columns);

        if (selectMode === SelectMode.MULTI_SELECT) {
            finalColumns.unshift({
                headerClassName: 'table-select-th',
                header: () =>
                    <Checkbox className="table-select"
                              theme={selectTheme}
                              checked={this.isHeadChecked()}
                              disabled={disabled}
                              indeterminate={this.isHeadIndeterminate()}
                              uncheckedIconCls={checkboxUncheckedIconCls}
                              checkedIconCls={checkboxCheckedIconCls}
                              indeterminateIconCls={checkboxIndeterminateIconCls}
                              onChange={this.headCheckBoxChangeHandler}/>,
                cellClassName: 'table-select-td',
                renderer: rowData =>
                    <Checkbox className="table-select"
                              theme={selectTheme}
                              checked={this.isItemChecked(rowData, value)}
                              disabled={disabled || rowData.disabled}
                              uncheckedIconCls={checkboxUncheckedIconCls}
                              checkedIconCls={checkboxCheckedIconCls}
                              indeterminateIconCls={checkboxIndeterminateIconCls}/>
            });
        } else if (selectMode === SelectMode.SINGLE_SELECT && (radioUncheckedIconCls || radioCheckedIconCls)) {
            finalColumns.unshift({
                cellClassName: 'table-select-td',
                renderer: rowData =>
                    <Radio className="table-select"
                           theme={selectTheme}
                           checked={this.isItemChecked(rowData, value)}
                           disabled={disabled || rowData.disabled}
                           uncheckedIconCls={radioUncheckedIconCls}
                           checkedIconCls={radioCheckedIconCls}/>
            });
        }

        if (hasLineNumber) {
            finalColumns.unshift({
                headerClassName: 'table-line-number-th',
                cellClassName: 'table-line-number-td',
                renderer(rowData, rowIndex) {
                    return rowIndex + 1;
                }
            });
        }

        return finalColumns;

    };

    componentDidMount() {
        const {onDataUpdate} = this.props;
        onDataUpdate && onDataUpdate(this.getCurrentPageData());
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.data.length !== this.props.data.length) {
            this.resetPage(nextProps.data);
        }

        let state = {
            sortedData: this.sortData(nextProps.data)
        };

        if (nextProps.value !== this.state.value) {
            state.value = Calculation.getInitValue(nextProps);
        }

        this.setState(state);

    }

    componentDidUpdate(prevProps, prevState) {
        const {onDataUpdate} = this.props;
        onDataUpdate && onDataUpdate(this.getCurrentPageData());
    }

    render() {

        const {

                className, style, data, pageSizes, disabled, selectMode, emptyText,

                sortAscIconCls, sortDescIconCls, pageSizeRightIconCls,
                paggingPrevIconCls, paggingNextIconCls, paggingFirstIconCls, paggingLastIconCls,

                idProp, isPagging, useFullPagging, paggingSelectedCountVisible, paggingPageSizeVisible,
                paggingCountRenderer,

                // not passing down these props
                defaultSortType, defaultPageSize, sortInitConfig, onPageChange, hasLineNumber, columns, selectTheme,
                radioUncheckedIconCls, radioCheckedIconCls, checkboxUncheckedIconCls, checkboxCheckedIconCls,
                checkboxIndeterminateIconCls, selectAllMode, isClearSelectionOnChangePage, sortFunc, onSort,
                onDataUpdate,

                ...restProps

            } = this.props,
            {value, sort, pagging, sortedData} = this.state,

            tableClassName = classNames('table', {
                selectable: selectMode === SelectMode.MULTI_SELECT || selectMode === SelectMode.SINGLE_SELECT,
                'pagging-table': isPagging,
                [className]: className
            }),

            finalColumns = this.handleColumns();

        // handle data
        const finalData = isPagging ? this.paggingData(sortedData) : sortedData,
            finalDataCount = finalData.length;

        return (
            <div className={tableClassName}
                 style={style}>

                <div className="inner-table-wrapper">

                    <table {...restProps}
                           className="inner-table"
                           disabled={disabled}>

                        <Thead columns={finalColumns}
                               sort={sort}
                               sortAscIconCls={sortAscIconCls}
                               sortDescIconCls={sortDescIconCls}
                               onSort={this.sortHandler}/>

                        {
                            finalData && finalDataCount > 0 ?
                                <TableBody columns={finalColumns}
                                           data={finalData}
                                           idProp={idProp}
                                           value={value}
                                           selectMode={selectMode}
                                           disabled={disabled}
                                           onRowClick={this.rowClickHandler}
                                           onCellClick={this.cellClickHandler}/>
                                :
                                <tbody className="table-body">
                                    <tr className="table-row">
                                        <td className="table-data empty"
                                            colSpan={finalColumns.length}>
                                            {emptyText}
                                        </td>
                                    </tr>
                                </tbody>
                        }

                    </table>

                </div>

                {
                    isPagging ?
                        (
                            useFullPagging ?
                                <Pagging page={pagging.page}
                                         total={data.length}
                                         selectedCount={this.calSelectedCount()}
                                         pageSize={pagging.pageSize}
                                         pageSizes={pageSizes}
                                         selectedCountVisible={paggingSelectedCountVisible}
                                         pageSizeVisible={paggingPageSizeVisible}
                                         pageSizeRightIconCls={pageSizeRightIconCls}
                                         paggingPrevIconCls={paggingPrevIconCls}
                                         paggingNextIconCls={paggingNextIconCls}
                                         paggingFirstIconCls={paggingFirstIconCls}
                                         paggingLastIconCls={paggingLastIconCls}
                                         paggingCountRenderer={paggingCountRenderer}
                                         onChange={this.pageChangedHandler}/>
                                :
                                <BriefPagging page={pagging.page}
                                              total={data.length}
                                              selectedCount={this.calSelectedCount()}
                                              pageSize={pagging.pageSize}
                                              pageSizes={pageSizes}
                                              selectedCountVisible={paggingSelectedCountVisible}
                                              pageSizeVisible={paggingPageSizeVisible}
                                              pageSizeRightIconCls={pageSizeRightIconCls}
                                              paggingPrevIconCls={paggingPrevIconCls}
                                              paggingNextIconCls={paggingNextIconCls}
                                              paggingCountRenderer={paggingCountRenderer}
                                              onChange={this.pageChangedHandler}/>
                        )
                        :
                        null
                }

            </div>
        );

    }
}

Table.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The theme of the table select radio or checkbox.
     */
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The select mode of table.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * The select all mode of table, all or current page.
     */
    selectAllMode: PropTypes.oneOf(Util.enumerateValue(SelectAllMode)),

    /**
     * The table list data.
     */
    data: PropTypes.arrayOf(PropTypes.shape({

        /**
         * The class name of tr.
         */
        rowClassName: PropTypes.string,

        /**
         * Override the styles of tr.
         */
        rowStyle: PropTypes.object

    })).isRequired,

    /**
     * The value of tr.
     */
    value: PropTypes.any,

    /**
     * Sorting method.
     */
    sortFunc: PropTypes.func,

    /**
     * If true,the table will have line number.
     */
    hasLineNumber: PropTypes.bool,

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

        // header renderer
        // (1) string，example： 'id'
        // (2) callback，example：function (colIndex) {return colIndex;}
        /**
         * The render content in header.
         */
        header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * The class name of td.
         */
        cellClassName: PropTypes.string,

        /**
         * Override the styles of td.
         */
        cellStyle: PropTypes.object,

        // cell renderer
        // (1) data key，example： 'id'
        // (2) data key tamplate，example：'${id} - ${name}'
        // (3) callback，example：function (rowData, rowIndex, colIndex) {return rowData.id;}
        /**
         * The render content in table.
         */
        renderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * If true,this column can be sorted.
         */
        sortable: PropTypes.bool,

        /**
         * Sort field.
         */
        sortProp: PropTypes.string,

        defaultSortType: PropTypes.oneOf(Util.enumerateValue(SortType))

    })).isRequired,

    disabled: PropTypes.bool,

    /**
     * The fields as ID.
     */
    idProp: PropTypes.string,

    emptyText: PropTypes.string,

    /**
     * If true,the table will use Pagging component.
     */
    useFullPagging: PropTypes.bool,

    /**
     * If true,the table will have padding.
     */
    isPagging: PropTypes.bool,

    /**
     * If true,the total of selected will display.
     */
    paggingSelectedCountVisible: PropTypes.bool,

    /**
     * If true,the pageSize will display.
     */
    paggingPageSizeVisible: PropTypes.bool,

    page: PropTypes.number,
    defaultPageSize: PropTypes.number,
    pageSizes: PropTypes.array,

    isClearSelectionOnChangePage: PropTypes.bool,

    /**
     * Sort init config.
     */
    sortInitConfig: PropTypes.shape({

        /**
         * Specify the sorting column.
         */
        prop: PropTypes.string,

        /**
         * If type equals 1,data will ascending ordered,else type equals -1,data will descending ordered.
         */
        type: PropTypes.oneOf([1, -1])

    }),

    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    defaultSortType: PropTypes.oneOf(Util.enumerateValue(SortType)),
    sortAscIconCls: PropTypes.string,
    sortDescIconCls: PropTypes.string,

    /**
     * Use this property to set page size right icon.
     */
    pageSizeRightIconCls: PropTypes.string,

    /**
     * Use this property to set prev button icon.
     */
    paggingPrevIconCls: PropTypes.string,

    /**
     * Use this property to set next button icon.
     */
    paggingNextIconCls: PropTypes.string,

    /**
     * Use this property to set first button icon.
     */
    paggingFirstIconCls: PropTypes.string,

    /**
     * Use this property to set last button icon.
     */
    paggingLastIconCls: PropTypes.string,

    paggingCountRenderer: PropTypes.func,

    /**
     * The function that trigger when select one item.
     */
    onSelect: PropTypes.func,

    /**
     * The function that trigger when unSelect one item.
     */
    onDeselect: PropTypes.func,

    /**
     * The function that trigger when the row is touch-tapped.
     */
    onRowClick: PropTypes.func,

    /**
     * The function that trigger when the td is touch-tapped.
     */
    onCellClick: PropTypes.func,

    onSort: PropTypes.func,
    onPageChange: PropTypes.func,
    onChange: PropTypes.func,
    onDataUpdate: PropTypes.func

};

Table.defaultProps = {

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,
    selectAllMode: SelectAllMode.ALL,

    columns: [],
    data: [],
    hasLineNumber: false,

    disabled: false,
    idProp: 'id',
    emptyText: 'No Data',
    isPagging: true,
    useFullPagging: false,
    paggingSelectedCountVisible: false,
    paggingPageSizeVisible: true,
    page: 0,
    defaultPageSize: 10,
    pageSizes: [5, 10, 15, 20],
    isClearSelectionOnChangePage: false,

    defaultSortType: SortType.ASC,

    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square'

};

export default Table;
