import React, {Component} from 'react';

import Table from 'src/Table';
import Switcher from 'src/Switcher';
import IconButton from 'src/IconButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import TableDoc from 'assets/propTypes/Table.json';

import 'sass/containers/app/modules/layout/TableExamples.scss';

export default class TableExamples extends Component {

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
            renderer(rowData) {
                return <Switcher value={!rowData.disabled}
                                 size="small"
                                 onTouchTap={(e) => {
                                     e.stopPropagation();
                                 }}/>;
            }
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

        this.deleteRow = ::this.deleteRow;

    }

    generateData(size = 100) {

        let data = [];
        for (let i = 0; i < size; i++) {
            data.push({
                id: i,
                firstName: `firstNameaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa${i}`,
                lastName: `lastName${i}`
            });
        }

        return data;

    }

    deleteRow(id) {

        const {data} = this.state,
            newData = data.filter(item => item.id !== id);

        this.setState({
            data: newData
        });

    }

    render() {

        const {data} = this.state,
            {deleteRow} = this;

        return (
            <div className="example table-examples">

                <h2 className="example-title">Table</h2>

                <p>
                    <span>Tables</span> are used to display data and to organize it.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With isPagging"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple <code>Table</code> example.</p>

                            <Table columns={[...this.columns, {
                                header: 'action',
                                renderer(rowData) {
                                    return (
                                        <IconButton iconCls="fa fa-trash"
                                                    onTouchTap={() => {
                                                        deleteRow(rowData.id);
                                                    }}/>
                                    );
                                }
                            }]}
                                   data={data}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With hasLineNumber and isMultiSelect"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A more complex example.Set the <code>hasLineNumber</code> and <code>isMultiSelect</code>
                                to true for showLineNumber and checkbox.</p>

                            <Table columns={this.columns}
                                   selectMode={Table.SelectMode.MULTI_SELECT}
                                   data={data}
                                   paggingSelectedCountVisible={true}
                                   defaultPageSize={20}
                                   pageSizes={this.pageSizes}
                                   useFullPagging={true}
                                   sortAscIconCls="fa fa-caret-up"
                                   sortDescIconCls="fa fa-caret-down"
                                   onPageChange={(page, pageSize) => {
                                       console.log(`page: ${page}, pageSize: ${pageSize}`);
                                   }}
                                   onChange={value => {
                                       console.log(value);
                                   }}/>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TableDoc}/>

            </div>
        );
    }
};