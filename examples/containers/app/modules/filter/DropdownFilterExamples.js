import React, {Component} from 'react';

import DropdownFilter from 'src/DropdownFilter';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import doc from 'assets/propTypes/DropdownFilter.json';

export default class DropdownFilterExamples extends Component {

    constructor(props) {

        super(props);

        this.data = ['test0', 'test1', {
            text: 'test2',
            value: 2,
            desc: 'Here is test2.',
            onTouchTap() {
                console.log('test2 selected!');
            }
        }, 'test3', 'test4', 'test5', {
            text: 'test6',
            value: 6,
            desc: 'Here is test6.',
            onTouchTap() {
                console.log('test6 selected!');
            }
        }, 'test7', 'test8', 'test9'];

        this.onChange = this::this.onChange;
        this.filterPressEnterHandle = this::this.filterPressEnterHandle;
        this.filterClearHandle = this::this.filterClearHandle;

    }

    onChange(item) {
        console.log('select item: ', item);
    }

    filterPressEnterHandle(value) {
        console.log('filter value: ', value);
    }

    filterClearHandle() {
        console.log('filter cleared');
    }

    render() {

        return (
            <div className="example auto-complete-examples">

                <h2 className="example-title">DropdownFilter</h2>

                <p>
                    A <span>DropdownFilter</span> is a filter.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>DropdownFilter</code> simple example.</p>

                                <DropdownFilter data={this.data}
                                                mode={DropdownFilter.Mode.CHECKBOX}
                                                placeholder="Please select ..."
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