import React, {Component} from 'react';

import AutoCompleteFilter from 'src/AutoCompleteFilter';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/AutoCompleteFilter.json';

class AutoCompleteFilterExamples extends Component {

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

    changeHandler = item => {
        console.log('select item: ', item);
    };

    filterPressEnterHandler = value => {
        console.log('filter value: ', value);
    };

    filterClearHandler = () => {
        console.log('filter cleared');
    };

    render() {
        return (
            <div className="example">

                <h2 className="example-title">AutoCompleteFilter</h2>

                <p>
                    A <span>AutoCompleteFilter</span> is an interface to help users to complete their input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>AutoCompleteFilter</code> simple example.</p>

                                <AutoCompleteFilter data={this.data}
                                                    placeholder="Please select ..."
                                                    filterInitValue="test"
                                                    changeHandler={this.changeHandler}
                                                    onFilterPressEnter={this.filterPressEnterHandler}
                                                    onFilterClear={this.filterClearHandler}/>

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
                                    <code>AutoCompleteFilter</code> with default select mode, <code> normal</code>
                                    , <code>checkbox</code>, <code>radio</code> applied.
                                </p>

                                <AutoCompleteFilter popupStyle={{maxHeight: 300}}
                                                    data={this.data}
                                                    placeholder="Please select ..."
                                                    minFilterLength={2}
                                                    onFilterPressEnter={this.filterPressEnterHandler}
                                                    changeHandler={this.changeHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With mode"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>disabled</code> property to true,the <code>AutoCompleteFilter</code>
                                    will disabled.</p>

                                <AutoCompleteFilter popupStyle={{maxHeight: 300}}
                                                    disabled={true}
                                                    data={this.data}
                                                    placeholder="Please select ..."
                                                    changeHandler={this.changeHandler}/>

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

                                <AutoCompleteFilter popupStyle={{maxHeight: 300}}
                                                    noMatchedMsg="There have no matched value."
                                                    data={this.data}
                                                    renderer={data => {
                                                        return data && typeof data === 'object' ?
                                                            `${data.text} (${data.value})`
                                                            :
                                                            `${data} (${data})`;
                                                    }}
                                                    placeholder="Please select ..."
                                                    changeHandler={this.changeHandler}/>

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

export default AutoCompleteFilterExamples;