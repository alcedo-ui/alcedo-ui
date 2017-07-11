import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Checkbox from '../Checkbox';
import Thead from '../_Thead';
import Tbody from '../_Tbody';
import Tfoot from '../_Tfoot';
import Pagging from '../Pagging';
import BriefPagging from '../BriefPagging';

import Event from '../_vendors/Event';

import './Table.css';

export default class Table extends Component {

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
            sort: null,

            scrollTop: 0,
            scrollLeft: 0,
            bodyHeight: 0,

            // 排序
            pagging: {
                pageSize: 10,
                page: 0
            }

        };

        this.sortHandle = this::this.sortHandle;
        this.sortData = this::this.sortData;
        this.tableScrollHandle = this::this.tableScrollHandle;
        // this.debounceTableScrollHandle = _.debounce(this::this.debounceTableScrollHandle, 150);
        this.scrollIndex = this::this.scrollIndex;
        this.paggingData = this::this.paggingData;
        this.pageChangedHandle = this::this.pageChangedHandle;
        this.resizeHandle = this::this.resizeHandle;
        this.resetPage = this::this.resetPage;

    }

    sortHandle(prop) {

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

    tableScrollHandle(e) {
        // e.persist();
        // this.debounceTableScrollHandle(e);
        !this.props.isPagging && this.setState({
            scrollTop: e.target.scrollTop,
            scrollLeft: e.target.scrollLeft
        });
    }

    /**
     * 滚动去抖
     */
    // debounceTableScrollHandle(e) {
    //     !this.props.isPagging && this.setState({
    //         scrollTop: e.target.scrollTop
    //     });
    // }

    scrollIndex(data) {

        const {rowHeight, isAdaptiveHeight} = this.props,
            {scrollTop, bodyHeight, pagging} = this.state,
            len = data.length;

        let startIndex = Math.floor(scrollTop / rowHeight), // 下取整
            stopIndex = isAdaptiveHeight
                ? startIndex + Math.ceil(bodyHeight / rowHeight) // 上取整
                : startIndex + pagging.pageSize; // 默认显示的条数

        // 缓冲
        startIndex -= 6;
        stopIndex += 6;

        // 验证有效性
        startIndex = startIndex < 0 ? 0 : startIndex;
        stopIndex = stopIndex > len ? len : stopIndex;

        return {
            startIndex,
            stopIndex
        };

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

    pageChangedHandle(pagging) {
        this.setState({
            pagging
        }, () => {
            this.resetPage(this.props.data, pagging);
        });
    }

    resetPage(data = this.props.data, pagging = this.state.pagging) {

        const {page, pageSize} = pagging,
            total = Math.ceil(data / pageSize);

        if (page + 1 > total) {
            this.setState({
                pagging: {
                    pageSize,
                    page: total - 1
                }
            });
        }

    }

    resizeHandle() {
        this.setState({
            bodyHeight: this.refs.bodyTable.offsetHeight
        });
    }

    componentDidMount() {

        this.resizeHandle();

        Event.addEvent(window, 'resize', this.resizeHandle);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data.length !== this.props.data.length) {
            this.resetPage(nextProps.data);
        }
    }

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.resizeHandle);
    }

    render() {

        const {
                className, style, data, columns, isPagging, rowHeight, hasLineNumber, isMultiSelect, useBriefPagging
            } = this.props,
            {scrollLeft, sort, pagging} = this.state,

            headTableStyle = {
                transform: `translateX(-${scrollLeft}px)`
            };

        // 处理 columns
        let finalColumns = _.cloneDeep(columns);

        if (isMultiSelect) {
            finalColumns.unshift({
                headerClassName: 'table-checkbox-th',
                header() {
                    return <Checkbox className="table-checkbox"/>;
                },
                className: 'table-checkbox-td',
                renderer() {
                    return <Checkbox className="table-checkbox"/>;
                }
            });
        }

        if (hasLineNumber) {
            finalColumns.unshift({
                headerClassName: 'table-line-number-th',
                className: 'table-line-number-td',
                renderer(rowData, rowIndex) {
                    return rowIndex + 1;
                }
            });
        }

        // 处理 data
        const sortedData = this.sortData(_.cloneDeep(data));

        let totalPage, finalData,
            startIndex = 0, stopIndex, scrollerStyle, tableStyle;

        if (isPagging) { // 分页

            totalPage = Math.ceil(sortedData.length / pagging.pageSize);
            finalData = this.paggingData(sortedData);

        } else { // 非分页

            scrollerStyle = {
                height: sortedData.length * rowHeight
            };

            ({startIndex, stopIndex} = this.scrollIndex(sortedData));
            finalData = sortedData.slice(startIndex, stopIndex);

            tableStyle = {
                height: finalData.length * rowHeight,
                transform: `translate3d(0,${startIndex * rowHeight}px,0)`
            };

        }

        const finalDataCount = finalData.length;

        return (
            <div className={`table-wrapper ${className}`}
                 style={style}>

                <div className="head-table">
                    <table className="table">

                        <Thead style={headTableStyle}
                               columns={finalColumns}
                               sort={sort}
                               onSort={this.sortHandle}/>

                        {
                            finalData && finalDataCount > 0
                                ? <Tbody columns={finalColumns}
                                         data={finalData}
                                         startIndex={startIndex}/>
                                : null
                        }

                    </table>
                </div>
                <div ref="bodyTable"
                     className="body-table"
                     onScroll={this.tableScrollHandle}>
                    <div className="body-table-scroller"
                         style={isPagging ? null : scrollerStyle}>
                        <table className="table"
                               style={isPagging ? null : tableStyle}>

                            <Thead columns={finalColumns}
                                   sort={sort}
                                   onSort={this.sortHandle}/>

                            {
                                finalData && finalDataCount > 0
                                    ? <Tbody columns={finalColumns}
                                             data={finalData}
                                             startIndex={startIndex}/>
                                    : null
                            }

                            {
                                isPagging ?
                                    (
                                        <Tfoot columns={finalColumns}>
                                            {
                                                useBriefPagging ?
                                                    <BriefPagging page={pagging.page}
                                                                  count={data.length}
                                                                  total={totalPage}
                                                                  pageSize={pagging.pageSize}
                                                                  onChange={this.pageChangedHandle}/>
                                                    :
                                                    <Pagging page={pagging.page}
                                                             total={totalPage}
                                                             pageSize={pagging.pageSize}
                                                             onChange={this.pageChangedHandle}/>
                                            }
                                        </Tfoot>
                                    )
                                    : null
                            }

                        </table>
                    </div>
                </div>

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
     * If true,the paging will display.
     */
    isPagging: PropTypes.bool,

    /**
     * Sorting method.
     */
    sortFunc: PropTypes.func,

    /**
     * The table row height.
     */
    rowHeight: PropTypes.number,

    /**
     * The function that trigger when step changes.
     */
    isAdaptiveHeight: PropTypes.bool,

    /**
     *  Whether need line number.
     */
    hasLineNumber: PropTypes.bool,

    /**
     * Whether have multiple choose.
     */
    isMultiSelect: PropTypes.bool,

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
    useBriefPagging: PropTypes.bool

};

Table.defaultProps = {

    className: '',
    style: null,

    columns: [],
    data: [],
    isPagging: false,
    rowHeight: 90,
    isAdaptiveHeight: false,
    hasLineNumber: false,
    isMultiSelect: false,
    useBriefPagging: true

};