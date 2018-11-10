import React, {Component} from 'react';

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

        this.columns = [{
            header: 'ID',
            sortable: true,
            sortProp: 'id',
            renderer: 'id',
            headerClassName: 'test-header',
            cellClassName: 'test-cell'
        }, {
            header: 'Name',
            sortable: true,
            sortProp: 'firstName',
            renderer: '${firstName} - ${lastName}'
        }, {
            header: 'Status',
            renderer: rowData =>
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

        this.state = {
            data: this.generateData(),
            sort: null
        };

    }

    generateData = (size = 100) => {

        let data = [];
        for (let i = 0; i < size; i++) {
            data.push({
                id: i,
                firstName: `firstName ${i}`,
                lastName: `lastName ${i}`
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

    selectHandler = value => {
        console.log('Select Value: ', value);
    };

    deselectHandler = value => {
        console.log('Deselect Value: ', value);
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

                            <Table data={data}
                                   columns={[...this.columns, {
                                       header: 'Action',
                                       renderer: rowData =>
                                           <IconButton iconCls="fas fa-trash-alt"
                                                       onClick={() => this.deleteRow(rowData.id)}/>
                                   }]}
                                   sort={sort}
                                   paggingCountRenderer={count => <span>Self Defined Total Count: {count}</span>}
                                   onSort={this.sortHandler}
                                   onPageChange={this.pageChangeHandler}
                                   onDataUpdate={this.dataUpdateHandler}/>

                            <RaisedButton className="table-action"
                                          theme={RaisedButton.Theme.PRIMARY}
                                          value="Clear Table Sort"
                                          onClick={this.clearSort}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With hasLineNumber and isMultiSelect"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A more complex example.Set the <code>hasLineNumber</code> and <code>isMultiSelect</code>
                                to true for showLineNumber and checkbox.</p>

                            <Table data={data}
                                   columns={this.columns}
                                   selectMode={Table.SelectMode.MULTI_SELECT}
                                   selectAllMode={Table.SelectAllMode.CURRENT_PAGE}
                                   paggingSelectedCountVisible={true}
                                   defaultPageSize={20}
                                   pageSizes={this.pageSizes}
                                   useFullPagging={true}
                                   sortAscIconCls="fas fa-caret-up"
                                   sortDescIconCls="fas fa-caret-down"
                                   onPageChange={this.pageChangeHandler}
                                   onSelect={this.selectHandler}
                                   onDeselect={this.deselectHandler}
                                   onSelectAll={this.selectAllHandler}
                                   onDeselectAll={this.deselectAllHandler}
                                   onChange={this.changeHandler}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Empty"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <Table columns={this.columns}
                                   data={[]}/>
                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};

export default TableExamples;
