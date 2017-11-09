import React, {Component} from 'react';

import LocalAutoComplete from 'src/LocalAutoComplete';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import LocalAutoCompleteDoc from 'assets/propTypes/LocalAutoComplete.json';

export default class LocalAutoCompleteExamples extends Component {

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
            <div className="example">

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

                                <LocalAutoComplete data={this.data}
                                                   placeholder="Please select ..."
                                                   onChange={this.onChange}
                                                   onFilterPressEnter={this.filterPressEnterHandle}
                                                   onFilterClear={this.filterClearHandle}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With mode"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>LocalAutoComplete</code> with default mode, <code> normal</code>
                                    , <code>checkbox</code>, <code>radio</code> applied.
                                </p>

                                <LocalAutoComplete popupStyle={{maxHeight: 300}}
                                                   mode="checkbox"
                                                   data={this.data}
                                                   placeholder="Please select ..."
                                                   onChange={this.onChange}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With mode"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>disabled</code> property to true,the <code>LocalAutoComplete</code>
                                    will disabled.</p>

                                <LocalAutoComplete popupStyle={{maxHeight: 300}}
                                                   disabled={true}
                                                   data={this.data}
                                                   placeholder="Please select ..."
                                                   onChange={this.onChange}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With mode"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>noMatchedMsg</code> property for no matched message.</p>

                                <LocalAutoComplete popupStyle={{maxHeight: 300}}
                                                   noMatchedMsg="There have no matched value."
                                                   data={this.data}
                                                   placeholder="Please select ..."
                                                   onChange={this.onChange}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={LocalAutoCompleteDoc}/>

            </div>

        );
    }
};