import React, {Component, Fragment} from 'react';
import round from 'lodash/round';

import Table from 'src/Table';
import Switcher from 'src/Switcher';
import IconButton from 'src/IconButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import CircularLoading from 'src/CircularLoading';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Table.json';

import Util from 'vendors/Util';

import 'scss/containers/app/modules/layout/TableExamples.scss';

const LOADING_SYMBOL = Symbol('LOADING_SYMBOL');

class TableExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            data: this.generateData(),
            sorting: null
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
            headRenderer: 'Name',
            bodyClassName: 'nowrap',
            bodyRenderer: rowDate => rowDate.firstName && rowDate.lastName ?
                `${rowDate.firstName} ${rowDate.lastName}` : '',
            sortable: true,
            sortingProp: 'firstName'
        }, {
            align: Table.Align.RIGHT,
            headRenderer: 'Age',
            bodyRenderer: rowDate => rowDate.age,
            footRenderer: () =>
                <Fragment>
                    <div>Average</div>
                    <div>{this.state.data.reduce((a, b) => a + b.age, 0) / this.state.data.length}</div>
                </Fragment>,
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
            headRenderer: 'Deposit',
            bodyRenderer: rowDate => rowDate.deposit ? `$${rowDate.deposit}` : '',
            footRenderer: () =>
                <Fragment>
                    <div>Sum</div>
                    <div>${this.state.data.reduce((a, b) => round(a + b.deposit, 2), 0)}</div>
                </Fragment>,
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

    handleDataUpdate = currentPageData => {
        console.log('Data Update Value: ', currentPageData);
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

    render() {

        const {data, sorting} = this.state;

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
                                   onDataUpdate={this.handleDataUpdate}
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
                                   onDataUpdate={this.handleDataUpdate}
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
                                   onDataUpdate={this.handleDataUpdate}
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

                            <Table className="example-table"
                                   data={data}
                                   columns={this.getFixedColumns()}
                                   sorting={sorting}
                                   selectMode={Table.SelectMode.MULTI_SELECT}
                                   isHeadFixed={true}
                                   isFootFixed={true}
                                   scroll={{
                                       width: 1200,
                                       height: 320
                                   }}
                                   paginationTotalRenderer={total => <span>Self Defined Total: {total}</span>}
                                   onSortChange={this.handleSortChange}
                                   onPaginationChange={this.handlePaginationChange}
                                   onExpand={this.handleExpand}
                                   onCollapse={this.handleCollapse}
                                   onDataUpdate={this.handleDataUpdate}
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
