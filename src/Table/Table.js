import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Checkbox from '../Checkbox';
import IconButton from '../IconButton';
import Thead from '../_Thead';
import Tbody from '../_Tbody';
import Pagging from '../Pagging';
import BriefPagging from '../BriefPagging';

import Util from '../_vendors/Util';
import Valid from '../_vendors/Valid';

import './Table.css';

export default class Table extends Component {

    static Mode = {
        NORMAL: 'normal',
        CHECKBOX: 'checkbox',
        RADIO: 'radio'
    };

    constructor(props) {

        super(props);

        this.state = {

            /**
             * sort construct
             *  {
			 *	    prop: '', // 排序的列属性名称
			 *	    type: 1 | -1 // 正序 | 倒序
			 *  }
             */
            sort: props.sortInitConfig,

            scrollTop: 0,
            scrollLeft: 0,
            bodyHeight: 0,

            pagging: {
                pageSize: 10,
                page: 0
            },

            value: this.initValue(props)

        };

        this.initValue = this::this.initValue;
        this.isHeadChecked = this::this.isHeadChecked;
        this.isItemChecked = this::this.isItemChecked;
        this.headCheckBoxChangeHandler = this::this.headCheckBoxChangeHandler;
        this.itemCheckBoxChangeHandler = this::this.itemCheckBoxChangeHandler;
        this.itemRadioChangeHandler = this::this.itemRadioChangeHandler;
        this.sortHandler = this::this.sortHandler;
        this.sortData = this::this.sortData;
        this.rowTouchTapHandler = this::this.rowTouchTapHandler;
        this.calSelectedCount = this::this.calSelectedCount;
        this.paggingData = this::this.paggingData;
        this.pageChangedHandler = this::this.pageChangedHandler;
        this.resetPage = this::this.resetPage;
        // this.wdithHandle = this::this.wdithHandle;

    }

    initValue(props) {

        if (!props) {
            return;
        }

        const {value, mode} = props;

        if (!mode) {
            return;
        }

        if (value) {
            return value;
        }

        switch (mode) {
            case Table.Mode.CHECKBOX:
                return [];
            case Table.Mode.RADIO:
                return null;
            default:
                return value;
        }

    }

    isHeadChecked() {

        const {data} = this.props,
            {value} = this.state;

        if (!value || !data) {
            return false;
        }

        return value.length === data.length;

    }

    isItemChecked(rowData, value = this.state.value) {

        const {mode, idProp} = this.props;

        if (mode === Table.Mode.NORMAL || !rowData || !value) {
            return false;
        }

        switch (mode) {
            case Table.Mode.CHECKBOX:
                return value.findIndex(item => item[idProp] === rowData[idProp]) !== -1;
            case Table.Mode.RADIO:
                return value[idProp] === rowData[idProp];
        }

    }

    headCheckBoxChangeHandler(checked) {

        const value = checked ? this.props.data.slice() : [];

        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    }

    sortHandler(prop) {

        const {sort} = this.state;
        let type = 1;

        if (sort && sort.prop === prop) {
            type = -sort.type;
        }

        this.setState({
            sort: {
                prop,
                type
            }
        });

    }

    sortData(data) {

        const {sort} = this.state;
        if (!sort) {
            return data;
        }

        const {sortFunc} = this.props;

        if (sortFunc) {
            data = sortFunc(data, sort);
        } else {
            data.sort((a, b) => {
                if (!isNaN(a[sort.prop]) && !isNaN(b[sort.prop])) {
                    return (Number(a[sort.prop]) - Number(b[sort.prop])) * sort.type;
                } else {
                    return (a[sort.prop] + '').localeCompare(b[sort.prop] + '') * sort.type;
                }
            });
        }

        return data;

    }

    itemCheckBoxChangeHandler(rowData, rowIndex) {

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

    itemRadioChangeHandler(rowData, rowIndex) {

        if (!rowData) {
            return;
        }

        const checked = this.isItemChecked(rowData, this.state.value),
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

    rowTouchTapHandler(rowData, rowIndex) {

        if (!rowData) {
            return;
        }

        const {onRowTouchTap} = this.props;
        onRowTouchTap && onRowTouchTap(rowData, rowIndex);

        const {mode} = this.props;

        switch (mode) {
            case Table.Mode.CHECKBOX:
                this.itemCheckBoxChangeHandler(rowData, rowIndex);
                return;
            case Table.Mode.RADIO:
                this.itemRadioChangeHandler(rowData, rowIndex);
                return;
        }

    }

    calSelectedCount() {

        const {mode} = this.props,
            {value} = this.state;

        switch (mode) {
            case Table.Mode.CHECKBOX:
                return value.length;
            case Table.Mode.RADIO:
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
        this.setState({
            pagging
        }, () => {
            this.resetPage(this.props.data, pagging);
        });
    }

    resetPage(data = this.props.data, pagging = this.state.pagging) {

        const {page, pageSize} = pagging,
            total = Math.ceil(data.length / pageSize);

        if (page + 1 > total) {
            this.setState({
                pagging: {
                    pageSize,
                    page: Valid.range(total - 1, 0)
                }
            });
        }

    }

    componentDidMount() {
        // this.wdithHandle();
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.data.length !== this.props.data.length) {
            this.resetPage(nextProps.data);
        }

        if (nextProps.value !== this.state.value) {
            this.setState({
                value: this.initValue(nextProps)
            });
        }

    }

    // wdithHandle() {
    //     const columns = this.props.columns;
    //
    //     let finalColumns = _.cloneDeep(columns);
    //
    //     console.log("finalColumns:"+JSON.stringify(finalColumns));
    //
    //     let flagFlex = finalColumns.every(function (item) {
    //         return item.flex && typeof item.flex == "number"
    //     });
    //
    //     if (flagFlex) {
    //         let sum = 0;
    //         finalColumns.forEach(function (item) {
    //             sum += item.flex;
    //         });
    //         console.log(sum);
    //
    //         for (let i = 0; i < finalColumns.length; i++) {
    //             finalColumns[i].width = (100 / sum) * finalColumns[i].flex
    //         }
    //     }
    //     console.log(finalColumns)
    //
    // }

    render() {

        const {
                className, style, data, columns, hasLineNumber, mode,
                idProp, isPagging, useFullPagging, paggingSelectedCountVisible, paggingPageSizeVisible,
                onCellTouchTap
            } = this.props,
            {value, sort, pagging} = this.state,
            self = this,

            tableClassName = (mode === Table.Mode.CHECKBOX || mode === Table.Mode.RADIO ? ' selectable' : '')
                + (className ? ' ' + className : '');

        // 处理 columns
        let finalColumns = _.cloneDeep(columns);

        if (mode === Table.Mode.CHECKBOX) {
            finalColumns.unshift({
                headerClassName: 'table-select-th',
                header() {
                    return <Checkbox className="table-checkbox"
                                     value={self.isHeadChecked()}
                                     onChange={self.headCheckBoxChangeHandler}/>;
                },
                cellClassName: 'table-select-td',
                renderer(rowData) {
                    return <Checkbox className="table-checkbox"
                                     value={self.isItemChecked(rowData, value)}/>;
                }
            });
        } else if (mode === Table.Mode.RADIO) {
            finalColumns.unshift({
                cellClassName: 'table-select-td',
                renderer(rowData) {
                    return (
                        <IconButton className={'table-radio' + (self.isItemChecked(rowData, value) ? ' activated' : '')}
                                    iconCls="fa fa-check"/>
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

        // 处理 data
        const sortedData = this.sortData(data),
            totalPage = Math.ceil(sortedData.length / pagging.pageSize),
            finalData = isPagging ? this.paggingData(sortedData) : sortedData,
            finalDataCount = finalData.length;

        return (
            <div>

                <div className="table-wrapper">
                    <table className={'table' + tableClassName}
                           style={style}>

                        <Thead columns={finalColumns}
                               sort={sort}
                               onSort={this.sortHandler}/>

                        {
                            finalData && finalDataCount > 0
                                ? <Tbody columns={finalColumns}
                                         data={finalData}
                                         idProp={idProp}
                                         value={value}
                                         mode={mode}
                                         onRowTouchTap={this.rowTouchTapHandler}
                                         onCellTouchTap={onCellTouchTap}/>
                                : null
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
                                         selectedCountVisible={paggingSelectedCountVisible}
                                         pageSizeVisible={paggingPageSizeVisible}
                                         onChange={this.pageChangedHandler}/>
                                :
                                <BriefPagging page={pagging.page}
                                              count={data.length}
                                              selectedCount={this.calSelectedCount()}
                                              total={totalPage}
                                              pageSize={pagging.pageSize}
                                              selectedCountVisible={paggingSelectedCountVisible}
                                              pageSizeVisible={paggingPageSizeVisible}
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
     * The table list data.
     */
    data: PropTypes.array.isRequired,

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

        // TableHeader （th） 的样式
        /**
         * The class name of header.
         */
        headerClassName: PropTypes.string,

        /**
         * Override the styles of header.
         */
        headerStyle: PropTypes.object,

        // 表头显示
        // (1) 字符串，例如： 'id'
        // (2) 回调函数，例如：function (colIndex) {return colIndex;}
        /**
         * The render content in header.
         */
        header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        // TableCell （td） 的样式
        /**
         * The class name of td.
         */
        cellClassName: PropTypes.string,

        /**
         * Override the styles of td.
         */
        cellStyle: PropTypes.object,

        // 表格列元素渲染
        // (1) 数据的key，例如： 'id'
        // (2) 数据key的模板，例如：'${id} - ${name}'
        // (3) 回调函数，例如：function (rowData, rowIndex, colIndex) {return rowData.id;}
        /**
         * The render content in table.
         */
        renderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        // 是否排序
        /**
         * If true,this column can be sorted.
         */
        sortable: PropTypes.bool,

        // 排序字段
        /**
         * Sort field.
         */
        sortProp: PropTypes.string

    })).isRequired,

    /**
     * The type of table list.Can be checkbox,radio,normal.
     */
    mode: PropTypes.oneOf(Util.enumerateValue(Table.Mode)),

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

    /**
     *
     */
    onChange: PropTypes.func

};

Table.defaultProps = {

    className: '',
    style: null,

    columns: [],
    data: [],
    value: null,
    hasLineNumber: false,

    mode: Table.Mode.NORMAL,
    idProp: 'id',
    isPagging: true,
    useFullPagging: false,
    paggingSelectedCountVisible: false,
    paggingPageSizeVisible: true,

    sortInitConfig: null

};