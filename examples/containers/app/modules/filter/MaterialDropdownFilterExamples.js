import React, {Component} from 'react';

import MaterialDropdownFilter from 'src/MaterialDropdownFilter';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/MaterialDropdownFilter.json';

class MaterialDropdownFilterExamples extends Component {

    constructor(props) {

        super(props);

        this.data = ['test0', 'test1', {
            text: 'test2',
            value: 2,
            desc: 'Here is test2.',
            onClick() {
                console.log('test2 selected!');
            }
        }, 'test3', 'test4', 'test5', {
            text: 'test6',
            value: 6,
            desc: 'Here is test6.',
            onClick() {
                console.log('test6 selected!');
            }
        }, 'test7', 'test8', 'test9'];

    }

    onChange = item => {
        console.log('select item: ', item);
    };

    filterPressEnterHandle = value => {
        console.log('filter value: ', value);
    };

    filterClearHandle = () => {
        console.log('filter cleared');
    };

    render() {

        return (
            <div className="example">

                <h2 className="example-title">MaterialDropdownFilter</h2>

                <p>
                    A <span>MaterialDropdownFilter</span> is a filter.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>MaterialDropdownFilter</code> simple example.</p>

                                <MaterialDropdownFilter theme={MaterialDropdownFilter.Theme.HIGHLIGHT}
                                                        label="Label"
                                                        placeholder="Please select ..."
                                                        data={this.data}
                                                        onChange={this.onChange}
                                                        onFilterPressEnter={this.filterPressEnterHandle}
                                                        onFilterClear={this.filterClearHandle}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>MaterialDropdownFilter</code> multiple example.</p>

                                <MaterialDropdownFilter theme={MaterialDropdownFilter.Theme.HIGHLIGHT}
                                                        label="Label"
                                                        placeholder="Please select ..."
                                                        data={this.data}
                                                        selectMode={MaterialDropdownFilter.SelectMode.MULTI_SELECT}
                                                        onChange={this.onChange}
                                                        onFilterPressEnter={this.filterPressEnterHandle}
                                                        onFilterClear={this.filterClearHandle}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>

        );
    }
};

export default MaterialDropdownFilterExamples;