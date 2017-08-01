import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Checkbox from '../Checkbox';
import Thead from '../_Thead';
import Tbody from '../_Tbody';
import Tfoot from '../_Tfoot';
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
             * 排序控制
             *  {
			 *	    prop: '', // 排序的列属性名称
			 *	    type: 1 | -1 // 正序 | 倒序
			 *  }
             */
            sort: props.sortInitConfig,

            scrollTop: 0,
            scrollLeft: 0,
            bodyHeight: 0,

            // 排序
            pagging: {
                pageSize: 10,
                page: 0
            },

            value: props.value

        };

        this.isHeadChecked = this::this.isHeadChecked;
        this.isItemChecked = this::this.isItemChecked;
        this.headCheckBoxChangeHandler = this::this.headCheckBoxChangeHandler;
        this.itemCheckBoxChangeHandler = this::this.itemCheckBoxChangeHandler;
        this.sortHandler = this::this.sortHandler;
        this.sortData = this::this.sortData;
        this.paggingData = this::this.paggingData;
        this.pageChangedHandler = this::this.pageChangedHandler;
        this.resetPage = this::this.resetPage;
        // this.wdithHandle = this::this.wdithHandle;

    }

    isHeadChecked() {

        const {data} = this.props,
            {value} = this.state;

        if (!value || !data) {
            return false;
        }

        return value.length === data.length;

    }

    isItemChecked(rowData) {

        const {value} = this.state;

        if (!rowData || !value || value.length < 1) {
            return false;
        }

        return value.indexOf(rowData) !== -1;

    }

    headCheckBoxChangeHandler(checked) {
        this.setState({
            value: checked ? this.props.data.slice() : []
        });
    }

    itemCheckBoxChangeHandler(checked, rowData) {

        const {value} = this.state;

        if (!rowData || !value || value.length < 1) {
            return;
        }

        if (checked) {
            value.push(rowData);
        } else {
            value.splice(value.indexOf(rowData), 1);
        }

        this.setState({
            value
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
                value: nextProps.value
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
                idProp, useBriefPagging
            } = this.props,
            {sort, pagging} = this.state,
            self = this;

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
                                     value={self.isItemChecked(rowData)}
                                     onChange={(checked) => {
                                         self.itemCheckBoxChangeHandler(checked, rowData);
                                     }}/>;
                }
            });
        } else if (mode === Table.Mode.RADIO) {
            finalColumns.unshift({
                cellClassName: 'table-select-td',
                renderer() {
                    return <Checkbox className="table-checkbox"/>;
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
        const sortedData = this.sortData(_.cloneDeep(data)),
            totalPage = Math.ceil(sortedData.length / pagging.pageSize),
            finalData = this.paggingData(sortedData),
            finalDataCount = finalData.length;

        return (
            <table className={'table' + (className ? ' ' + className : '')}
                   style={style}>

                <Thead columns={finalColumns}
                       sort={sort}
                       onSort={this.sortHandler}/>

                {
                    finalData && finalDataCount > 0
                        ? <Tbody columns={finalColumns}
                                 data={finalData}
                                 idProp={idProp}/>
                        : null
                }

                <Tfoot columns={finalColumns}>
                    {
                        useBriefPagging ?
                            <BriefPagging page={pagging.page}
                                          count={data.length}
                                          total={totalPage}
                                          pageSize={pagging.pageSize}
                                          onChange={this.pageChangedHandler}/>
                            :
                            <Pagging page={pagging.page}
                                     total={totalPage}
                                     pageSize={pagging.pageSize}
                                     onChange={this.pageChangedHandler}/>
                    }
                </Tfoot>

            </table>
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
     * Sorting method.
     */
    sortFunc: PropTypes.func,

    /**
     * The function that trigger when step changes.
     */
    isAdaptiveHeight: PropTypes.bool,

    /**
     *  Whether need line number.
     */
    hasLineNumber: PropTypes.bool,

    /**
     * The function that trigger when show rows changes.
     */
    onSelectChange: PropTypes.func,

    /**
     * Children passed into the TableList.
     */
    columns: PropTypes.arrayOf(PropTypes.shape({

        // TableHeader （th） 的样式
        /**
         * The CSS class name of th.
         */
        headerClassName: PropTypes.string,

        /**
         * Override the styles of th.
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
         * The CSS class name of td.
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
     *
     */
    mode: PropTypes.oneOf(Util.enumerateValue(Table.Mode)),

    /**
     *
     */
    idProp: PropTypes.string,

    /**
     * If true,the table will use BriefPagging component.
     */
    useBriefPagging: PropTypes.bool,

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

    })

};

Table.defaultProps = {

    className: '',
    style: null,

    columns: [],
    data: [],
    isAdaptiveHeight: false,
    hasLineNumber: false,

    mode: Table.Mode.NORMAL,
    idProp: 'id',
    useBriefPagging: true,
    sortInitConfig: null

};