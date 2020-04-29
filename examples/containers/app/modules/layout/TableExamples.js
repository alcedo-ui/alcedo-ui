/**
 * @file TableExamples.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment, createRef} from 'react';

// Components
import Table from 'src/Table';
import Switcher from 'src/Switcher';
import IconButton from 'src/IconButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import CircularLoading from 'src/CircularLoading';
import RaisedButton from 'src/RaisedButton';
import MaterialTextField from 'src/MaterialTextField';
import PropTypeDescTable from 'components/PropTypeDescTable';

// Statics
import doc from 'assets/propTypes/Table.json';

// Vendors
import classNames from 'classnames';
import round from 'lodash/round';
import cloneDeep from 'lodash/cloneDeep';
import Util from 'vendors/Util';

// Styles
import 'scss/containers/app/modules/layout/TableExamples.scss';

const LOADING_SYMBOL = Symbol('LOADING_SYMBOL');

class TableExamples extends Component {

    constructor(props) {

        super(props);

        this.tableRef = createRef();

        this.state = {
            data: this.generateData(),
            sorting: null,
            filter: '',
            headVisible: true,
            footVisible: true
        };

        this.columns = [{
            key: 'id',
            width: 64,
            noWrap: true,
            headRenderer: 'ID',
            bodyRenderer: rowData => rowData[LOADING_SYMBOL] ?
                <CircularLoading/> : rowData.id,
            footRenderer: 'Total',
            sortable: true,
            sortingProp: 'id'
        }, {
            key: 'name',
            width: '20%',
            minWidth: 64,
            noWrap: true,
            headRenderer: 'Name (Percentage Width)',
            bodyRenderer: rowData => rowData.firstName && rowData.lastName ?
                `${rowData.firstName} ${rowData.lastName}` : null,
            bodyTitle: rowData => rowData.firstName && rowData.lastName ?
                `${rowData.firstName} ${rowData.lastName}` : null,
            sortable: true,
            sortingProp: 'firstName'
        }, {
            key: 'age',
            width: 64,
            align: Table.Align.RIGHT,
            noWrap: true,
            headRenderer: 'Age',
            bodyRenderer: rowData => rowData.age,
            footRenderer: this.state.data && this.state.data.length > 0 ? () =>
                    <Fragment>
                        <div>Average</div>
                        <div>{round(this.state.data.reduce((a, b) => a + b.age, 0) / this.state.data.length, 0)}</div>
                    </Fragment>
                :
                null,
            sortable: true,
            sortingProp: 'age'
        }, {
            key: 'otherColumn',
            headRenderer: 'Other Column',
            headAlign: Table.Align.CENTER,
            children: [{
                key: 'otherColumn1',
                width: 120,
                noWrap: true,
                headRenderer: 'Other Column 1',
                bodyRenderer: rowData => rowData.other ? `${rowData.other} 1` : ''
            }, {
                key: 'otherColumn2',
                width: 120,
                noWrap: true,
                headRenderer: 'Other Column 2',
                bodyRenderer: rowData => rowData.other ? `${rowData.other} 2` : ''
            }, {
                key: 'otherColumn3',
                width: 120,
                noWrap: true,
                headRenderer: 'Other Column 3',
                bodyRenderer: rowData => rowData.other ? `${rowData.other} 3` : ''
            }, {
                key: 'otherColumn4',
                width: 120,
                noWrap: true,
                headRenderer: 'Other Column 4',
                bodyRenderer: rowData => rowData.other ? `${rowData.other} 4` : ''
            }]
        }, {
            key: 'functionWidth',
            width: data => data && data.length > 0 ?
                Math.max(...data.map(item => item.functionWidth)) + 16
                :
                120,
            align: Table.Align.RIGHT,
            noWrap: true,
            headRenderer: 'Function Width',
            bodyRenderer: rowData => rowData ?
                <div className="dynamic-width-cell-block"
                     style={{width: rowData.functionWidth || null}}>
                    {rowData.functionWidth ? `Width: ${rowData.functionWidth}px` : ''}
                </div>
                :
                null,
            footRenderer: this.state.data && this.state.data.length > 0 ? () =>
                    <Fragment>
                        <div>Sum</div>
                        <div>{this.state.data.reduce((a, b) => round(a + b.functionWidth), 0)}</div>
                    </Fragment>
                :
                null,
            sortable: true,
            sortingProp: 'functionWidth'
        }, {
            key: 'status',
            width: 64,
            align: Table.Align.CENTER,
            headRenderer: 'Status',
            bodyRenderer: rowData => rowData[LOADING_SYMBOL] ?
                null
                :
                <Switcher style={{display: 'inline-block', verticalAlign: 'middle'}}
                          value={!rowData.disabled}
                          size="small"
                          onClick={e => e.stopPropagation()}/>
        }, {
            key: 'action',
            width: 64,
            align: Table.Align.CENTER,
            headRenderer: 'Action',
            bodyRenderer: rowData => rowData[LOADING_SYMBOL] ?
                null
                :
                <IconButton iconCls="fas fa-trash-alt"
                            onClick={() => this.deleteRow(rowData.id)}/>
        }];

        this.pageSizes = [{
            value: 10,
            text: '10 / page'
        }, {
            value: 20,
            text: '20 / page'
        }, {
            value: 30,
            text: '30 / page'
        }, {
            value: 40,
            text: '40 / page'
        }, {
            value: 50,
            text: '50 / page'
        }];

    }

    getFixedColumns = () => {
        return this.columns.map(column => {
            if (['id', 'name'].includes(column.key)) {
                return {
                    ...column,
                    fixed: Table.Fixed.LEFT
                };
            } else if (['status', 'action'].includes(column.key)) {
                return {
                    ...column,
                    fixed: Table.Fixed.RIGHT
                };
            }
            return column;
        });
    };

    getResizableColumns = () => {
        const result = cloneDeep(this.columns);
        Util.preOrderTraverse({children: result}, node => {
            if (['name', 'age', 'otherColumn1', 'otherColumn2',
                'otherColumn3', 'otherColumn4', 'functionWidth'].includes(node.key)) {
                node.resizable = true;
            }
        });
        return result;
    };

    generateData = (size = 100, base = '', expanded = true) => {

        let data = [];
        for (let i = 0; i < size; i++) {

            const id = `${base ? `${base}-` : ''}${i}`,
                item = {
                    id,
                    firstName: `firstName${id}`,
                    lastName: `lastName${id}`,
                    age: Math.floor(Math.random() * 100),
                    functionWidth: 100 + i * 5,
                    other: 'Other Content'
                };

            if (expanded && id.split('-').pop() === '0') {
                item.children = [{
                    [LOADING_SYMBOL]: true,
                    disabled: true
                }];
            }

            data.push(item);

        }

        return data;

    };

    deleteRow = id => {

        const {data} = this.state,
            newData = data.filter(item => item.id !== id);

        this.setState({
            data: newData
        });

    };

    handleSortChange = sorting => {
        this.setState({
            sorting
        });
        console.log('Sort Change Value: ', sorting);
    };

    handlePaginationChange = ({page, pageSize}) => {
        console.log(`page: ${page}, pageSize: ${pageSize}`);
    };

    handleSelect = (rowData, rowIndex, value) => {
        console.log('Select Value: ', rowData);
    };

    handleDeselect = (rowData, rowIndex, value) => {
        console.log('Deselect Value: ', rowData);
    };

    handleSelectAll = value => {
        console.log('Select All Value: ', value);
    };

    handleSeselectAll = value => {
        console.log('Deselect All Value: ', value);
    };

    handleChange = value => {
        console.log('Changed Value: ', value);
    };

    handleExpand = rowData => {

        console.log('Expand: ', rowData);

        const {data} = this.state;

        if (!rowData || !data || !rowData.children[0][LOADING_SYMBOL]) {
            return;
        }

        setTimeout(() => {

            Util.postOrderTraverse({
                children: data
            }, node => {
                if (node && node.id === rowData.id) {
                    node.children = this.generateData(10, node.id);
                    return false;
                }
            });

            this.setState({
                data
            });

        }, 1000);

    };

    handleCollapse = rowData => {
        console.log('Collapse: ', rowData);
    };

    collapseAllRows = () => {
        this.tableRef && this.tableRef.current && this.tableRef.current.collapseAllRows();
    };

    toggleHead = () => {
        this.setState({
            headVisible: !this.state.headVisible
        });
    };

    toggleFoot = () => {
        this.setState({
            footVisible: !this.state.footVisible
        });
    };

    handleFilter = filter => {
        this.setState({
            filter
        });
    };

    filterData = (data = this.state.data) => {

        const {filter} = this.state;

        if (!filter || !data) {
            return data;
        }

        return data.filter(item => item && (
            (item.firstName && item.firstName.toUpperCase().includes(filter.toUpperCase()))
            ||
            (item.lastName && item.lastName.toUpperCase().includes(filter.toUpperCase()))
        ));

    };

    handleColumnsWidthChange = (column, width, nextColumns) => {
        console.log('column::', column);
        console.log('width::', width);
        console.log('nextColumns::', nextColumns);
    };

    render() {

        const {data, sorting, filter, headVisible, footVisible} = this.state,
            filteredLoadingData = this.filterData(data);

        return (
            <div className="example table-examples">

                <h2 className="example-title">Table</h2>

                <p>
                    <span>Table</span>
                    &nbsp;are used to display data and to organize it.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Normal"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple <code>Table</code> example.</p>

                            <div className="example-table-wrapper">
                                <Table className="example-table"
                                       columns={this.columns}
                                       data={data}
                                       canBeExpanded={true}
                                       scroll={{
                                           width: 1200
                                       }}
                                       onSortChange={this.handleSortChange}
                                       onPaginationChange={this.handlePaginationChange}
                                       onExpand={this.handleExpand}
                                       onCollapse={this.handleCollapse}
                                       onChange={this.handleChange}
                                       onSelect={this.handleSelect}
                                       onSelectAll={this.handleSelectAll}
                                       onDeselect={this.handleDeselect}
                                       onDeselectAll={this.handleSeselectAll}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Fix Head & Foot"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>
                                You can config <code>isHeadFixed</code> to fix the Head,&nbsp;
                                and config <code>isFootFixed</code> to fix the Foot.
                            </p>

                            <Table className="example-table"
                                   columns={this.columns}
                                   data={data}
                                   isHeadFixed={true}
                                   isFootFixed={true}
                                   scroll={{
                                       width: 1200,
                                       maxHeight: 320
                                   }}
                                   onSortChange={this.handleSortChange}
                                   onPaginationChange={this.handlePaginationChange}
                                   onExpand={this.handleExpand}
                                   onCollapse={this.handleCollapse}
                                   onChange={this.handleChange}
                                   onSelect={this.handleSelect}
                                   onSelectAll={this.handleSelectAll}
                                   onDeselect={this.handleDeselect}
                                   onDeselectAll={this.handleSeselectAll}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Fix Columns"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>
                                You can config <code>fixed</code> in columns to fix the column&nbsp;
                                <code>Left</code> or <code>Right</code>.
                            </p>

                            <Table className="example-table"
                                   columns={this.getFixedColumns()}
                                   data={data}
                                   scroll={{
                                       width: 1200
                                   }}
                                   onSortChange={this.handleSortChange}
                                   onPaginationChange={this.handlePaginationChange}
                                   onExpand={this.handleExpand}
                                   onCollapse={this.handleCollapse}
                                   onChange={this.handleChange}
                                   onSelect={this.handleSelect}
                                   onSelectAll={this.handleSelectAll}
                                   onDeselect={this.handleDeselect}
                                   onDeselectAll={this.handleSeselectAll}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Fix Head, Foot and Columns"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="toolbar">
                                <RaisedButton className="action-button"
                                              value="Collapse All Rows"
                                              onClick={this.collapseAllRows}/>
                                <RaisedButton className="action-button"
                                              value="Toggle Table Head"
                                              onClick={this.toggleHead}/>
                                <RaisedButton className="action-button"
                                              value="Toggle Table Foot"
                                              onClick={this.toggleFoot}/>
                                <MaterialTextField className="filter"
                                                   label="Filter"
                                                   value={filter}
                                                   onChange={this.handleFilter}/>
                            </div>

                            <div className="loading-table-wrapper">
                                {
                                    filteredLoadingData ?
                                        <Table ref={this.tableRef}
                                               className={classNames('example-table', {
                                                   'head-hidden': !headVisible,
                                                   'foot-hidden': !footVisible || !filteredLoadingData || filteredLoadingData.length < 1
                                               })}
                                               data={filteredLoadingData}
                                               columns={this.getFixedColumns()}
                                               sorting={sorting}
                                               selectMode={Table.SelectMode.MULTI_SELECT}
                                               isHeadFixed={true}
                                               isFootFixed={true}
                                               isHeadHidden={!headVisible}
                                               isFootHidden={!footVisible || !filteredLoadingData || filteredLoadingData.length < 1}
                                               scroll={{
                                                   width: 1200,
                                                   height: filteredLoadingData && filteredLoadingData.length > 0 ? 320 : 0
                                               }}
                                               useFullPagination={true}
                                               paginationTotalRenderer={total =>
                                                   <span>Self Defined Total: {total}</span>
                                               }
                                               onSortChange={this.handleSortChange}
                                               onPaginationChange={this.handlePaginationChange}
                                               onExpand={this.handleExpand}
                                               onCollapse={this.handleCollapse}
                                               onChange={this.handleChange}
                                               onSelect={this.handleSelect}
                                               onSelectAll={this.handleSelectAll}
                                               onDeselect={this.handleDeselect}
                                               onDeselectAll={this.handleSeselectAll}/>
                                        :
                                        <CircularLoading className="loading-table-loading"/>
                                }
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Dynamic Render"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="loading-table-wrapper">
                                <Table ref={this.tableRef}
                                       className="example-table"
                                       data={this.generateData(1000)}
                                       columns={this.columns}
                                       sorting={sorting}
                                       selectMode={Table.SelectMode.MULTI_SELECT}
                                       isHeadFixed={true}
                                       isFootFixed={true}
                                       isPaginated={false}
                                       useDynamicRender={true}
                                       scroll={{
                                           width: 1200
                                       }}
                                       onSortChange={this.handleSortChange}
                                       onExpand={this.handleExpand}
                                       onCollapse={this.handleCollapse}
                                       onChange={this.handleChange}
                                       onSelect={this.handleSelect}
                                       onSelectAll={this.handleSelectAll}
                                       onDeselect={this.handleDeselect}
                                       onDeselectAll={this.handleSeselectAll}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Resize Column Width"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <Table className="example-table border-collapse"
                                   columns={this.getResizableColumns()}
                                   data={data}
                                   scroll={{
                                       width: 1200
                                   }}
                                   onSortChange={this.handleSortChange}
                                   onPaginationChange={this.handlePaginationChange}
                                   onExpand={this.handleExpand}
                                   onCollapse={this.handleCollapse}
                                   onChange={this.handleChange}
                                   onSelect={this.handleSelect}
                                   onSelectAll={this.handleSelectAll}
                                   onDeselect={this.handleDeselect}
                                   onDeselectAll={this.handleSeselectAll}
                                   onColumnsWidthChange={this.handleColumnsWidthChange}/>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="No Data"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>No Data <code>Table</code> example.</p>

                            <Table className="example-table"
                                   data={[]}
                                   columns={this.columns}
                                   selectMode={Table.SelectMode.MULTI_SELECT}
                                   isFootHidden={true}
                                   scroll={{
                                       width: 1200
                                   }}/>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
}

export default TableExamples;
