/**
 * @file TableExamples.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment, createRef} from 'react';
import classNames from 'classnames';
import round from 'lodash/round';

import Table from 'src/Table';
import Switcher from 'src/Switcher';
import IconButton from 'src/IconButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import CircularLoading from 'src/CircularLoading';
import RaisedButton from 'src/RaisedButton';
import MaterialTextField from 'src/MaterialTextField';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Table.json';

import Util from 'vendors/Util';

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
            headRenderer: 'ID',
            bodyRenderer: rowDate => rowDate[LOADING_SYMBOL] ?
                <CircularLoading/> : rowDate.id,
            footRenderer: 'Total',
            sortable: true,
            sortingProp: 'id'
        }, {
            width: 300,
            noWrap: true,
            headRenderer: 'Name',
            bodyRenderer: rowDate => rowDate.firstName && rowDate.lastName ?
                `${rowDate.firstName} ${rowDate.lastName}` : '',
            sortable: true,
            sortingProp: 'firstName'
        }, {
            align: Table.Align.RIGHT,
            noWrap: true,
            headRenderer: 'Age',
            bodyRenderer: rowDate => rowDate.age,
            footRenderer: this.state.data && this.state.data.length > 0 ? () =>
                    <Fragment>
                        <div>Average</div>
                        <div>{this.state.data.reduce((a, b) => a + b.age, 0) / this.state.data.length}</div>
                    </Fragment>
                :
                null,
            sortable: true,
            sortingProp: 'age'
        }, {
            headRenderer: 'Other Column',
            headAlign: Table.Align.CENTER,
            children: [{
                width: 300,
                headRenderer: 'Other Column 1',
                bodyRenderer: rowDate => rowDate.other ? `${rowDate.other} 1` : ''
            }, {
                width: 300,
                headRenderer: 'Other Column 2',
                bodyRenderer: rowDate => rowDate.other ? `${rowDate.other} 2` : ''
            }, {
                width: 300,
                headRenderer: 'Other Column 3',
                bodyRenderer: rowDate => rowDate.other ? `${rowDate.other} 3` : ''
            }, {
                width: 300,
                headRenderer: 'Other Column 4',
                bodyRenderer: rowDate => rowDate.other ? `${rowDate.other} 4` : ''
            }]
        }, {
            align: Table.Align.RIGHT,
            noWrap: true,
            headRenderer: 'Deposit',
            bodyRenderer: rowDate => rowDate.deposit ? `$${rowDate.deposit}` : '',
            footRenderer: this.state.data && this.state.data.length > 0 ? () =>
                    <Fragment>
                        <div>Sum</div>
                        <div>${this.state.data.reduce((a, b) => round(a + b.deposit, 2), 0)}</div>
                    </Fragment>
                :
                null,
            sortable: true,
            sortingProp: 'deposit'
        }, {
            headRenderer: 'Status',
            bodyRenderer: rowData => rowData[LOADING_SYMBOL] ?
                null
                :
                <Switcher value={!rowData.disabled}
                          size="small"
                          onClick={e => e.stopPropagation()}/>
        }, {
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
            if (['ID', 'Name'].includes(column.headRenderer)) {
                return {
                    fixed: Table.Fixed.LEFT,
                    ...column
                };
            } else if (['Status', 'Action'].includes(column.headRenderer)) {
                return {
                    fixed: Table.Fixed.RIGHT,
                    ...column
                };
            }
            return column;
        });
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
                    deposit: round(Math.random() * 1000000, 2),
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

                            <Table className="example-table"
                                   columns={this.columns}
                                   data={data}
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
                                       scroll={{width: 1200}}
                                       isPaginated={false}
                                       useDynamicRender={true}
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
                                  title="No Data"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>No Data <code>Table</code> example.</p>

                            <Table className="example-table"
                                   data={[]}
                                   columns={this.columns}
                                   selectMode={Table.SelectMode.MULTI_SELECT}
                                   isFootHidden={true}/>

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
