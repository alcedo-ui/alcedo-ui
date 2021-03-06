import React, {Component} from 'react';

import AutoCompleteFilter from 'src/AutoCompleteFilter';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/AutoCompleteFilter.json';

import 'scss/containers/app/modules/filter/AutoCompleteFilterExamples.scss';

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

        this.state = {
            AutoCompleteFilterVisible: {}
        };

    }

    show = id => {

        const {AutoCompleteFilterVisible} = this.state;

        AutoCompleteFilterVisible[id] = true;

        this.setState({
            AutoCompleteFilterVisible
        });

    };

    hide = id => {

        const {AutoCompleteFilterVisible} = this.state;

        AutoCompleteFilterVisible[id] = false;

        this.setState({
            AutoCompleteFilterVisible
        });

    };

    handleChange = item => {
        console.log('select item: ', item);
    };

    handleFilterPressEnter = value => {
        console.log('filter value: ', value);
    };

    handleFilterClear = () => {
        console.log('filter cleared');
    };

    render() {

        const {AutoCompleteFilterVisible} = this.state;

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
                                                    onChange={this.handleChange}
                                                    onFilterPressEnter={this.handleFilterPressEnter}
                                                    onFilterClear={this.handleFilterClear}/>

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
                                                    onFilterPressEnter={this.handleFilterPressEnter}
                                                    onChange={this.handleChange}/>

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
                                                    handleChange={this.handleChange}/>

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
                                                    handleChange={this.handleChange}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>AutoCompleteFilter</code> simple example.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={AutoCompleteFilterVisible[1]}
                                        onRequestClose={() => this.hide(1)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
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
                                                                    parentEl={dialogContentEl}
                                                                    handleChange={this.handleChange}/>
                                            </div>
                                    }
                                </Dialog>

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
