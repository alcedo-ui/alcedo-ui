import React, {Component, Fragment} from 'react';
import round from 'lodash/round';

import Table from 'src/Table';
import Switcher from 'src/Switcher';
import IconButton from 'src/IconButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
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
            sort: null
        };

        this.columns = [{
            fixed: Table.Fixed.LEFT,
            headRenderer: 'ID',
            bodyRenderer: rowDate => {

                if (rowDate[LOADING_SYMBOL]) {
                    return (
                        <CircularLoading/>
                    );
                }

                return rowDate.id;

            },
            footRenderer: 'Total',
            footSpan: 2,
            sortable: true,
            sortingProp: 'id'
        }, {
            fixed: Table.Fixed.LEFT,
            width: 300,
            headRenderer: 'Name',
            bodyClassName: 'nowrap',
            bodyRenderer: rowDate => rowDate.firstName && rowDate.lastName ? `${rowDate.firstName} ${rowDate.lastName}` : '',
            sortable: true,
            sortingProp: 'firstName'
        }, {
            headRenderer: 'Age',
            headAlign: Table.Align.RIGHT,
            bodyRenderer: rowDate => rowDate.age,
            bodyAlign: Table.Align.RIGHT,
            footRenderer: () => {
                const {data} = this.state;
                return (
                    <Fragment>
                        <div>Average</div>
                        <div>{data.reduce((a, b) => a + b.age, 0) / data.length}</div>
                    </Fragment>
                );
            },
            footAlign: Table.Align.RIGHT,
            sortable: true,
            sortingProp: 'age'
        }, {
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
        }, {
            headRenderer: 'Deposit',
            headAlign: Table.Align.RIGHT,
            bodyRenderer: rowDate => rowDate.deposit ? `$${rowDate.deposit}` : '',
            bodyAlign: Table.Align.RIGHT,
            footRenderer: () =>
                <Fragment>
                    <div>Sum</div>
                    <div>${this.state.data.reduce((a, b) => round(a + b.deposit, 2), 0)}</div>
                </Fragment>,
            footAlign: Table.Align.RIGHT,
            sortable: true,
            sortingProp: 'deposit'
        }, {
            fixed: Table.Fixed.RIGHT,
            headRenderer: 'Status',
            bodyRenderer: rowData => rowData[LOADING_SYMBOL] ?
                null
                :
                <Switcher value={!rowData.disabled}
                          size="small"
                          onClick={e => e.stopPropagation()}/>
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

            if (expanded && id.endsWith('0')) {
                item.children = [{
                    [LOADING_SYMBOL]: true
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

    handleSortChange = sort => {
        this.setState({
            sort
        });
        console.log('Sort Change Value: ', sort);
    };

    handlePageChange = (page, pageSize) => {
        console.log(`page: ${page}, pageSize: ${pageSize}`);
    };

    handleDataUpdate = currentPageData => {
        console.log('Data Update Value: ', currentPageData);
    };

    selectHandler = (rowData, rowIndex, value) => {
        console.log('Select Value: ', rowData);
    };

    deselectHandler = (rowData, rowIndex, value) => {
        console.log('Deselect Value: ', rowData);
    };

    selectAllHandler = value => {
        console.log('Select All Value: ', value);
    };

    deselectAllHandler = value => {
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

        }, 2000);

    };

    handleCollapse = rowData => {
        console.log('Collapse: ', rowData);
    };

    clearSort = () => {
        this.setState({
            sort: null
        });
    };

    render() {

        const {data, sort} = this.state;

        return (
            <div className="example table-examples">

                <h2 className="example-title">Table</h2>

                <p>
                    <span>Table</span>
                    &nbsp;are used to display data and to organize it.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With isPagging"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple <code>Table</code> example.</p>

                            <RaisedButton className="table-action"
                                          theme={RaisedButton.Theme.PRIMARY}
                                          value="Clear Table Sort"
                                          onClick={this.clearSort}/>

                            <Table data={data}
                                   columns={[...this.columns, {
                                       fixed: Table.Fixed.RIGHT,
                                       headRenderer: 'Action',
                                       bodyRenderer: rowData => rowData[LOADING_SYMBOL] ?
                                           null
                                           :
                                           <IconButton iconCls="fas fa-trash-alt"
                                                       onClick={() => this.deleteRow(rowData.id)}/>
                                   }]}
                                   sort={sort}
                                   selectMode={Table.SelectMode.MULTI_SELECT}
                                   isHeadFixed={true}
                                   isFootFixed={true}
                                   scroll={{
                                       width: 1200,
                                       height: 400
                                   }}
                                   paggingCountRenderer={count => <span>Self Defined Total Count: {count}</span>}
                                   onSortChange={this.handleSortChange}
                                   onPageChange={this.handlePageChange}
                                   onExpand={this.handleExpand}
                                   onCollapse={this.handleCollapse}
                                   onDataUpdate={this.handleDataUpdate}
                                   onChange={this.handleChange}/>

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
