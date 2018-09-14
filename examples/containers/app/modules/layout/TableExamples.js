import React, {Component, Fragment} from 'react';

import Table from 'src/Table';
import Switcher from 'src/Switcher';
import IconButton from 'src/IconButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import DownloadField from 'src/DownloadField';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Table.json';

import 'sass/containers/app/modules/layout/TableExamples.scss';

class DownloadButton extends Component {

    constructor(props) {
        super(props);
    }

    download = () => {
        this.refs.downloadField && this.refs.downloadField.download();
    };

    render() {
        return (
            <Fragment>

                <IconButton iconCls="fas fa-download"
                            onClick={this.download}/>

                <DownloadField ref="downloadField"
                               url="https://nodejs.org/dist/v9.0.0/node-v9.0.0.pkg"/>

            </Fragment>
        );
    }
}

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
            data: this.generateData()
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

    sortHandler = (sortConfig) => {
        console.log(sortConfig);
    };

    pageChangeHandler = (page, pageSize) => {
        console.log(page, pageSize);
    };

    dataUpdateHandler = currentPageData => {
        console.log(currentPageData);
    };

    render() {

        const {data} = this.state;

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
                                   paggingCountRenderer={count => <span>Self Defined Total Count: {count}</span>}
                                   onSort={this.sortHandler}
                                   onPageChange={this.pageChangeHandler}
                                   onDataUpdate={this.dataUpdateHandler}/>

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
                                   columns={[...this.columns, {
                                       header: '',
                                       renderer: () => <DownloadButton/>
                                   }]}
                                   selectMode={Table.SelectMode.MULTI_SELECT}
                                   selectAllMode={Table.SelectAllMode.CURRENT_PAGE}
                                   paggingSelectedCountVisible={true}
                                   defaultPageSize={20}
                                   pageSizes={this.pageSizes}
                                   useFullPagging={true}
                                   sortAscIconCls="fas fa-caret-up"
                                   sortDescIconCls="fas fa-caret-down"
                                   onPageChange={(page, pageSize) => console.log(`page: ${page}, pageSize: ${pageSize}`)}
                                   onChange={value => console.log(value)}/>

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