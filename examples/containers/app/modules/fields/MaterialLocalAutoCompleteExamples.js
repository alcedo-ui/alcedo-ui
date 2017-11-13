import React, {Component} from 'react';

import MaterialLocalAutoComplete from 'src/MaterialLocalAutoComplete/index';
import Widget from 'src/Widget/index';
import WidgetHeader from 'src/WidgetHeader/index';
import Theme from 'src/Theme/index';

import PropTypeDescTable from '../PropTypeDescTable';
import MaterialLocalAutoCompleteDoc from 'examples/assets/propTypes/MaterialLocalAutoComplete.json';

import 'sass/containers/app/modules/fields/MaterialLocalAutoCompleteExamples.scss';

export default class MaterialLocalAutoCompleteExamples extends Component {

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

                <h2 className="example-title">LocalAutoComplete</h2>

                <p>
                    A <span>LocalAutoComplete</span> is an interface to help users to complete their input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>LocalAutoComplete</code> simple example.</p>

                                <MaterialLocalAutoComplete theme={Theme.HIGHLIGHT}
                                                           filterInitValue={'test'}
                                                           data={this.data}
                                                           label="Label"
                                                           placeholder="Please select ..."
                                                           onChange={this.onChange}
                                                           onFilterPressEnter={this.filterPressEnterHandle}
                                                           onFilterClear={this.filterClearHandle}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={MaterialLocalAutoCompleteDoc}/>

            </div>

        );
    }
};