/**
 * @file Table component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Thead from '../_Thead';
import Tbody from '../_Tbody';
import Pagging from '../Pagging';
import BriefPagging from '../BriefPagging';

import Util from '../_vendors/Util';
import Valid from '../_vendors/Valid';
import Calculation from '../_vendors/Calculation';
import SelectMode from '../_statics/SelectMode';
import SortType from '../_statics/SortType';
import Theme from '../Theme';

export default class Table extends Component {

    static SelectMode = SelectMode;
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
                page: 0
            },

            value: Calculation.getInitValue(props),

            sortedData: this.sortData(props.data, props.sortInitConfig)

        };

        this.isHeadChecked = ::this.isHeadChecked;
        this.isHeadIndeterminate = ::this.isHeadIndeterminate;
        this.isItemChecked = ::this.isItemChecked;
        this.headCheckBoxChangeHandler = ::this.headCheckBoxChangeHandler;
        this.multiSelectHandler = ::this.multiSelectHandler;
        this.singleSelectHandler = ::this.singleSelectHandler;
        this.sortHandler = ::this.sortHandler;
        this.sortData = ::this.sortData;
        this.rowTouchTapHandler = ::this.rowTouchTapHandler;
        this.cellTouchTapHandler = ::this.cellTouchTapHandler;
        this.calSelectedCount = ::this.calSelectedCount;
        this.paggingData = ::this.paggingData;
        this.pageChangedHandler = ::this.pageChangedHandler;
        this.resetPage = ::this.resetPage;

    }

    isHeadChecked() {

        const {data} = this.props,
            {value} = this.state;

        if (!value || !data || data.length < 1) {
            return false;
        }

        return value.length === data.filter(item => item && !item.disabled).length;

    }

    isHeadIndeterminate() {

        const {data} = this.props,
            {value} = this.state,
            dataLen = data.filter(item => item && !item.disabled).length,
            valueLen = value.length;

        if (dataLen > 0 && valueLen > 0 && valueLen < dataLen) {
            return true;
        }

        return false;

    }

    isItemChecked(rowData, value = this.state.value) {

        const {selectMode, idProp} = this.props;

        if (!rowData || !value) {
            return false;
        }

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                return value.findIndex(item => item[idProp] === rowData[idProp]) !== -1;
            case SelectMode.SINGLE_SELECT:
                return value[idProp] === rowData[idProp];
        }

    }

    headCheckBoxChangeHandler(checked) {

        const value = checked ? this.props.data.filter(item => !item.disabled) : [];

        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    }

    sortHandler(col) {

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

        this.setState({
            sort,
            sortedData: this.sortData(data, sort)
        });

    }

    sortData(data, sort = this.state.sort) {

        if (!sort) {
            return data;
        }

        const {sortFunc} = this.props;
        let copyData = _.cloneDeep(data);

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

    }

    multiSelectHandler(rowData, rowIndex) {

        if (!rowData) {
            return;
        }

        const {value} = this.state,
            checked = this.isItemChecked(rowData, value);

        if (checked) {
            value.splice(value.indexOf(rowData), 1);
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

    }

    singleSelectHandler(rowData, rowIndex) {

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

    }

    rowTouchTapHandler(rowData, rowIndex, e) {

        if (!rowData) {
            return;
        }

        const {disabled} = this.props;
        if (disabled) {
            return;
        }

        const {onRowTouchTap} = this.props;
        onRowTouchTap && onRowTouchTap(rowData, rowIndex, e);

        const {selectMode} = this.props;

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                this.multiSelectHandler(rowData, rowIndex);
                return;
            case SelectMode.SINGLE_SELECT:
                this.singleSelectHandler(rowData, rowIndex);
                return;
        }

    }

    cellTouchTapHandler(data, rowIndex, colIndex, e) {

        const {disabled} = this.props;
        if (disabled) {
            return;
        }

        const {onCellTouchTap} = this.props;
        onCellTouchTap && onCellTouchTap(data, rowIndex, colIndex, e);

    }

    calSelectedCount() {

        const {selectMode} = this.props,
            {value} = this.state;

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                return value.length;
            case SelectMode.SINGLE_SELECT:
                return value ? 1 : 0;
        }

        return 0;

    }

    paggingData(data) {

        const {pagging} = this.state,
            {pageSize, page} = pagging,
            len = data.length;

        let start = page * pageSize,
            stop = start + pageSize;

        start = start < 0 ? 0 : start;
        stop = stop > len ? len : stop;

        return data.slice(start, stop);

    }

    pageChangedHandler(pagging) {

        if (typeof pagging.pageSize === 'object') {
            pagging.pageSize = pagging.pageSize.value;
        }

        this.setState({
            pagging
        }, () => {
            this.resetPage(this.props.data, pagging);
        });

    }

    resetPage(data = this.props.data, pagging = this.state.pagging) {

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

    render() {

        const {

                className, style, data, columns, hasLineNumber, pageSizes, disabled,

                selectTheme, selectMode, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                sortAscIconCls, sortDescIconCls,
                paggingPrevIconCls, paggingNextIconCls, paggingFirstIconCls, paggingLastIconCls,

                idProp, isPagging, useFullPagging, paggingSelectedCountVisible, paggingPageSizeVisible,

                // not passing down these props
                defaultSortType, defaultPageSize, sortInitConfig, onPageChange,

                ...restProps

            } = this.props,
            {value, sort, pagging, sortedData} = this.state,
            self = this,

            tableClassName = (selectMode === SelectMode.MULTI_SELECT
                || selectMode === SelectMode.SINGLE_SELECT ? ' selectable' : '')
                + (isPagging ? ' pagging-table' : '') + (className ? ' ' + className : '');

        // handle columns
        let finalColumns = _.cloneDeep(columns);

        if (selectMode === SelectMode.MULTI_SELECT) {
            finalColumns.unshift({
                headerClassName: 'table-select-th',
                header() {
                    return <Checkbox className="table-select"
                                     theme={selectTheme}
                                     checked={self.isHeadChecked()}
                                     disabled={disabled}
                                     indeterminate={self.isHeadIndeterminate()}
                                     uncheckedIconCls={checkboxUncheckedIconCls}
                                     checkedIconCls={checkboxCheckedIconCls}
                                     indeterminateIconCls={checkboxIndeterminateIconCls}
                                     onChange={self.headCheckBoxChangeHandler}/>;
                },
                cellClassName: 'table-select-td',
                renderer(rowData) {
                    return <Checkbox className="table-select"
                                     theme={selectTheme}
                                     checked={self.isItemChecked(rowData, value)}
                                     disabled={disabled || rowData.disabled}
                                     uncheckedIconCls={checkboxUncheckedIconCls}
                                     checkedIconCls={checkboxCheckedIconCls}
                                     indeterminateIconCls={checkboxIndeterminateIconCls}/>;
                }
            });
        } else if (selectMode === SelectMode.SINGLE_SELECT && (radioUncheckedIconCls || radioCheckedIconCls)) {
            finalColumns.unshift({
                cellClassName: 'table-select-td',
                renderer(rowData) {
                    return (
                        <Radio className="table-select"
                               theme={selectTheme}
                               checked={self.isItemChecked(rowData, value)}
                               disabled={disabled || rowData.disabled}
                               uncheckedIconCls={radioUncheckedIconCls}
                               checkedIconCls={radioCheckedIconCls}/>
                    );
                }
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

        // handle data
        const totalPage = Math.ceil(sortedData.length / pagging.pageSize),
            finalData = isPagging ? this.paggingData(sortedData) : sortedData,
            finalDataCount = finalData.length;

        return (
            <div className={'table' + tableClassName}
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
                                <Tbody columns={finalColumns}
                                       data={finalData}
                                       idProp={idProp}
                                       value={value}
                                       selectMode={selectMode}
                                       disabled={disabled}
                                       onRowTouchTap={this.rowTouchTapHandler}
                                       onCellTouchTap={this.cellTouchTapHandler}/>
                                :
                                null
                        }

                    </table>

                </div>

                {
                    isPagging ?
                        (
                            useFullPagging ?
                                <Pagging page={pagging.page}
                                         count={data.length}
                                         selectedCount={this.calSelectedCount()}
                                         total={totalPage}
                                         pageSize={pagging.pageSize}
                                         pageSizes={pageSizes}
                                         selectedCountVisible={paggingSelectedCountVisible}
                                         pageSizeVisible={paggingPageSizeVisible}
                                         paggingPrevIconCls={paggingPrevIconCls}
                                         paggingNextIconCls={paggingNextIconCls}
                                         paggingFirstIconCls={paggingFirstIconCls}
                                         paggingLastIconCls={paggingLastIconCls}
                                         onChange={this.pageChangedHandler}/>
                                :
                                <BriefPagging page={pagging.page}
                                              count={data.length}
                                              selectedCount={this.calSelectedCount()}
                                              total={totalPage}
                                              pageSize={pagging.pageSize}
                                              pageSizes={pageSizes}
                                              selectedCountVisible={paggingSelectedCountVisible}
                                              pageSizeVisible={paggingPageSizeVisible}
                                              paggingPrevIconCls={paggingPrevIconCls}
                                              paggingNextIconCls={paggingNextIconCls}
                                              onChange={this.pageChangedHandler}/>
                        )
                        :
                        null
                }

            </div>
        );

    }
};

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
     * The function that trigger when select changes.
     */
    onSelectChange: PropTypes.func,

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

    /**
     *
     */
    defaultPageSize: PropTypes.number,

    /**
     *
     */
    pageSizes: PropTypes.array,

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
    paggingPrevIconCls: PropTypes.string,
    paggingNextIconCls: PropTypes.string,
    paggingFirstIconCls: PropTypes.string,
    paggingLastIconCls: PropTypes.string,

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
    onRowTouchTap: PropTypes.func,

    /**
     * The function that trigger when the td is touch-tapped.
     */
    onCellTouchTap: PropTypes.func,

    onPageChange: PropTypes.func,

    onChange: PropTypes.func

};

Table.defaultProps = {

    className: null,
    style: null,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,

    columns: [],
    data: [],
    value: null,
    hasLineNumber: false,

    disabled: false,
    idProp: 'id',
    isPagging: true,
    useFullPagging: false,
    paggingSelectedCountVisible: false,
    paggingPageSizeVisible: true,
    defaultPageSize: 10,
    pageSizes: [5, 10, 15, 20],

    defaultSortType: SortType.ASC,
    sortInitConfig: null,

    radioUncheckedIconCls: null,
    radioCheckedIconCls: null,
    checkboxUncheckedIconCls: 'fa fa-square-o',
    checkboxCheckedIconCls: 'fa fa-check-square',
    checkboxIndeterminateIconCls: 'fa fa-minus-square'

};