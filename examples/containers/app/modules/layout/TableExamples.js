import React, {Component} from 'react';

import Table from 'src/Table';
import Switcher from 'src/Switcher';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Paper from 'src/Paper';

import PropTypeDescTable from '../PropTypeDescTable';
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
            cellClassName: 'test-cell',
            flex: 1
        }, {
            header: 'Name',
            renderer: '${firstName} - ${lastName}',
            flex: 2
        }, {
            header: 'Status',
            renderer(rowData) {
                return <Switcher value={!rowData.disabled}
                                 size="small"
                                 onTouchTap={(e) => {
                                     e.stopPropagation();
                                 }}/>;
            },
            flex: 2
        }];

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

    render() {

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

                            <Paper>
                                <Table columns={this.columns}
                                       isPagging={true}
                                       data={this.generateData()}/>
                            </Paper>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With isPagging"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple <code>Table</code> example.</p>

                            <Paper style={{width: 400, height: 600, overflow: 'auto'}}>
                                <Table columns={this.columns}
                                       isPagging={true}
                                       data={this.generateData(5)}
                                       mode={Table.Mode.RADIO}
                                       sortInitConfig={{
                                           prop: 'id',
                                           type: -1
                                       }}
                                       onChange={value => {
                                           console.log(value);
                                       }}/>
                            </Paper>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With hasLineNumber and isMultiSelect"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A more complex example.Set the <code>hasLineNumber</code> and <code>isMultiSelect</code>
                                to true for showLineNumber and checkbox.</p>

                            <Paper>
                                <Table columns={this.columns}
                                       isPagging={true}
                                       mode={Table.Mode.CHECKBOX}
                                       data={this.generateData()}
                                       paggingSelectedCountVisible={true}
                                       defaultPageSize={20}
                                       pageSizes={[10, 20, 30, 40]}
                                       onChange={value => {
                                           console.log(value);
                                       }}/>
                            </Paper>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TableDoc}/>

            </div>
        );
    }
};