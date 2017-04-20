import React, {Component} from 'react';

import Table from 'dist/Table';
import Switcher from 'dist/Switcher';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import 'sass/containers/app/modules/layout/TableExamples.scss';

export default class TableExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let data = [];
        for (let i = 0; i < 1000; i++) {
            data.push({
                id: i,
                firstName: `firstName${i}`,
                lastName: `lastName${i}`,
                disabled: true
            });
        }

        return (
            <div className="example table-example">

                <h2 className="example-title">Table</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Table Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Table columns={[{
                                    header: 'ID',
                                    sortable: true,
                                    sortProp: 'id',
                                    renderer: 'id'
                                }, {
                                    header: 'Name',
                                    renderer: '${firstName} - ${lastName}'
                                }, {
                                    header: 'Status',
                                    renderer(rowDate) {
                                        return <Switcher value={!rowDate.disabled}
                                                         size="small"/>;
                                    }
                                }]}
                                       data={data}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <div className="example-properties">
                    <h3>Properties</h3>
                    <table className="example-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="properties-name">className</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td></td>
                                <td>The css class name of the root element.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">style</td>
                                <td className="properties-type">PropTypes.object</td>
                                <td></td>
                                <td>The styles of the root element.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">columns</td>
                                <td className="properties-type">PropTypes.array</td>
                                <td></td>
                                <td>The table columns.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">data</td>
                                <td className="properties-type">PropTypes.array</td>
                                <td></td>
                                <td>The table list data.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">isPagging</td>
                                <td className="properties-type">PropTypes.bool</td>
                                <td>true</td>
                                <td>Whether need paging.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">sortFunc</td>
                                <td className="properties-type">PropTypes.func</td>
                                <td></td>
                                <td>Sorting method.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">rowHeight</td>
                                <td className="properties-type">PropTypes.number</td>
                                <td>60</td>
                                <td>The table row height.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">isAdaptiveHeight</td>
                                <td className="properties-type">PropTypes.bool</td>
                                <td>false</td>
                                <td>The function that trigger when step changes.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">hasLineNumber</td>
                                <td className="properties-type">PropTypes.bool</td>
                                <td>false</td>
                                <td>Whether need a line number.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">isMultiSelect</td>
                                <td className="properties-type">PropTypes.bool</td>
                                <td>false</td>
                                <td>Whether have multiple choose.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">onSelectChange</td>
                                <td className="properties-type">PropTypes.func</td>
                                <td></td>
                                <td>The function that trigger when show rows changes.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
};