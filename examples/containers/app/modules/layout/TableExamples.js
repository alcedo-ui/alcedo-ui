import React, {Component, Fragment} from 'react';
import round from 'lodash/round';

import Table from 'src/Table';
import Switcher from 'src/Switcher';
import IconButton from 'src/IconButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Table.json';

import 'scss/containers/app/modules/layout/TableExamples.scss';

class TableExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            data: this.generateData(),
            sort: null
        };

        this.columns = [{
            headRenderer: 'ID',
            bodyRenderer: 'id',
            sortable: true,
            sortingProp: 'id'
        }, {
            headRenderer: 'Name',
            bodyRenderer: '${firstName} ${lastName}',
            sortable: true,
            sortingProp: 'firstName'
        }, {
            headRenderer: 'Age',
            headAlign: Table.Align.RIGHT,
            bodyRenderer: 'age',
            bodyAlign: Table.Align.RIGHT,
            footAlign: Table.Align.RIGHT,
            sortable: true,
            sortingProp: 'age',
            footRenderer: () => {
                const {data} = this.state;
                return (
                    <Fragment>
                        <div>Average</div>
                        <div>{data.reduce((a, b) => a + b.age, 0) / data.length}</div>
                    </Fragment>
                );
            }
        }, {
            headRenderer: 'Deposit',
            headAlign: Table.Align.RIGHT,
            bodyRenderer: '$ ${deposit}',
            bodyAlign: Table.Align.RIGHT,
            footAlign: Table.Align.RIGHT,
            sortable: true,
            sortingProp: 'deposit',
            footRenderer: () => {
                const {data} = this.state;
                return (
                    <Fragment>
                        <div>Sum</div>
                        <div>{data.reduce((a, b) => round(a + b.deposit, 2), 0)}</div>
                    </Fragment>
                );
            }
        }, {
            headRenderer: 'Status',
            bodyRenderer: rowData =>
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

    generateData = (size = 100) => {

        let data = [];
        for (let i = 0; i < size; i++) {
            data.push({
                id: i,
                firstName: `firstName${i}`,
                lastName: `lastName${i}`,
                age: Math.floor(Math.random() * 100),
                deposit: round(Math.random() * 1000000, 2),
                childrenNum: i === 0 ? 9 : 0
            });
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

    sortHandler = sort => {
        this.setState({
            sort
        });
        console.log('Sort Change Value: ', sort);
    };

    pageChangeHandler = (page, pageSize) => {
        console.log(`page: ${page}, pageSize: ${pageSize}`);
    };

    dataUpdateHandler = currentPageData => {
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

    changeHandler = value => {
        console.log('Changed Value: ', value);
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
                    <span>Tables</span>
                    are used to display data and to organize it.
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
                                       headRenderer: 'Action',
                                       bodyRenderer: rowData =>
                                           <IconButton iconCls="fas fa-trash-alt"
                                                       onClick={() => this.deleteRow(rowData.id)}/>
                                   }]}
                                   sort={sort}
                                   isHeadFixed={true}
                                   isFootFixed={true}
                                   paggingCountRenderer={count => <span>Self Defined Total Count: {count}</span>}
                                   onSortChange={this.sortHandler}
                                   onPageChange={this.pageChangeHandler}
                                   onDataUpdate={this.dataUpdateHandler}/>

                        </div>
                    </div>

                </Widget>

                {/*<Widget>*/}

                {/*<WidgetHeader className="example-header" title="With hasLineNumber and isMultiSelect"/>*/}

                {/*<div className="widget-content">*/}
                {/*<div className="example-content">*/}

                {/*<p>A more complex example.Set the <code>hasLineNumber</code> and <code>isMultiSelect</code>*/}
                {/*to true for showLineNumber and checkbox.</p>*/}

                {/*<Table data={data}*/}
                {/*columns={this.columns}*/}
                {/*selectMode={Table.SelectMode.MULTI_SELECT}*/}
                {/*selectAllMode={Table.SelectAllMode.CURRENT_PAGE}*/}
                {/*paggingSelectedCountVisible={true}*/}
                {/*defaultPageSize={20}*/}
                {/*pageSizes={this.pageSizes}*/}
                {/*useFullPagging={true}*/}
                {/*sortingAscIconCls="fas fa-caret-up"*/}
                {/*sortingDescIconCls="fas fa-caret-down"*/}
                {/*onPageChange={this.pageChangeHandler}*/}
                {/*onSelect={this.selectHandler}*/}
                {/*onDeselect={this.deselectHandler}*/}
                {/*onSelectAll={this.selectAllHandler}*/}
                {/*onDeselectAll={this.deselectAllHandler}*/}
                {/*onChange={this.changeHandler}/>*/}

                {/*</div>*/}
                {/*</div>*/}

                {/*</Widget>*/}

                {/*<Widget>*/}

                {/*<WidgetHeader className="example-header" title="Empty"/>*/}

                {/*<div className="widget-content">*/}
                {/*<div className="example-content">*/}
                {/*<Table columns={this.columns}*/}
                {/*data={[]}/>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*</Widget>*/}

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};

export default TableExamples;
