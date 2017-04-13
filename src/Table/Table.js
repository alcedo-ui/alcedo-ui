import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

import Paper from '../Paper';
import Checkbox from '../Checkbox';
import Thead from './head/Thead';
import Tbody from './body/Tbody';
// import Tfoot from './foot/Tfoot';
import Pagging from '../Pagging';

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
            scrollTop: e.target.scrollTop
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
                : stopIndex = startIndex + pagging.pageSize; // 默认显示的条数

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
        });
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

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.resizeHandle);
    }

    render() {

        const {className, style, data, columns, isPagging, rowHeight, hasLineNumber, isMultiSelect} = this.props;
        const {sort, pagging} = this.state;

        // 处理 columns
        let finalColumns = _.cloneDeep(columns);

        if (isMultiSelect) {
            finalColumns.unshift({
                headerClassName: 'table-checkbox',
                header() {
                    return <Checkbox/>;
                },
                className: 'table-checkbox',
                renderer() {
                    return <Checkbox/>;
                }
            });
        }

        if (hasLineNumber) {
            finalColumns.unshift({
                className: 'table-line-number',
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

        return (
            <div className={`table-wrapper ${className}`}
                 style={style}>

                <Paper>
                    <div className="head-table">
                        <table className="table">

                            <Thead columns={finalColumns}
                                   sort={sort}
                                   onSort={this.sortHandle}/>

                            {
                                finalData && finalData.length > 0
                                    ? <Tbody columns={finalColumns}
                                             data={finalData}
                                             startIndex={startIndex}/>
                                    : null
                            }

                            {/*<Tfoot/>*/}

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
                                    finalData && finalData.length > 0
                                        ? <Tbody columns={finalColumns}
                                                 data={finalData}
                                                 startIndex={startIndex}/>
                                        : null
                                }

                                {/*<Tfoot/>*/}

                            </table>
                        </div>
                    </div>
                </Paper>

                {
                    isPagging
                        ? <Pagging page={pagging.page}
                                   total={totalPage}
                                   pageSize={pagging.pageSize}
                                   onChange={this.pageChangedHandle}/>
                        : null
                }

            </div>
        );

    }
};

Table.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    // 表格列渲染配置
    columns: PropTypes.arrayOf(PropTypes.shape({

        // TableHeader （th） 的样式
        headerClassName: PropTypes.string,
        headerStyle: PropTypes.object,

        // 表头显示
        // (1) 字符串，例如： 'id'
        // (2) 回调函数，例如：function (colIndex) {return colIndex;}
        header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        // TableCell （td） 的样式
        cellClassName: PropTypes.string,
        cellStyle: PropTypes.object,

        // 表格列元素渲染
        // (1) 数据的key，例如： 'id'
        // (2) 数据key的模板，例如：'${id} - ${name}'
        // (3) 回调函数，例如：function (rowData, rowIndex, colIndex) {return rowData.id;}
        renderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        // 是否排序
        sortable: PropTypes.bool,

        // 排序字段
        sortProp: PropTypes.string

    })).isRequired,

    // 表格数据
    data: PropTypes.array.isRequired,

    // 是否分页，默认true
    isPagging: PropTypes.bool,

    // 排序函数
    sortFunc: PropTypes.func,

    // 行高 默认60px
    rowHeight: PropTypes.number,

    // 是否高度自适应
    isAdaptiveHeight: PropTypes.bool,

    // 是否显示行号
    hasLineNumber: PropTypes.bool,

    // 是否多选
    isMultiSelect: PropTypes.bool,

    // 选择变更回调
    onSelectChange: PropTypes.func

};

Table.defaultProps = {

    className: '',
    style: null,

    columns: [],
    data: [],
    isPagging: true,
    rowHeight: 60,
    isAdaptiveHeight: false,
    hasLineNumber: false,
    isMultiSelect: false

};