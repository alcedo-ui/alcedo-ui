import React, {Component} from 'react';

import Table from 'dist/Table';
import Switcher from 'dist/Switcher';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

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
            cellClassName: 'test-cell'
        }, {
            header: 'Name',
            renderer: '${firstName} - ${lastName}'
        }, {
            header: 'Status',
            renderer(rowDate) {
                return <Switcher value={!rowDate.disabled}
                                 size="small"/>;
            }
        }];

        this.state = {
            data: this.generateData()
        };

    }

    generateData(size = 100) {

        let data = [];
        for (let i = 0; i < size; i++) {
            data.push({
                id: i,
                firstName: `firstName${i}`,
                lastName: `lastName${i}`,
                disabled: true
            });
        }

        return data;

    }

    render() {

        const {data} = this.state;

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

                            <p>A simple <code>Table</code> example.Set <code>isPagging</code> property to true for
                                pagination.</p>

                            <Table columns={this.columns}
                                   isPagging={true}
                                   data={data}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With isPagging"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple <code>Table</code> example.Set <code>isPagging</code> property to true for
                                pagination.</p>

                            <Table columns={this.columns}
                                   isPagging={true}
                                   data={data}
                                   sortInitConfig={{
                                       prop: 'id',
                                       type: -1
                                   }}/>

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
                                   isPagging={true}
                                   isMultiSelect={true}
                                   data={data}
                                   useBriefPagging={false}/>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TableDoc}/>

            </div>
        );
    }
};