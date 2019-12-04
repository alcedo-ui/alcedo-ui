import React, {Component} from 'react';

import LocalAutoComplete from 'src/LocalAutoComplete';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/LocalAutoComplete.json';

import 'scss/containers/app/modules/field/LocalAutoCompleteExamples.scss';

class LocalAutoCompleteExamples extends Component {

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
            filter: '',
            value: null,
            uniqueData: [],
            LocalAutoCompleteVisible: {}
        };

    }

    show = id => {

        const {LocalAutoCompleteVisible} = this.state;

        LocalAutoCompleteVisible[id] = true;

        this.setState({
            LocalAutoCompleteVisible
        });

    };

    hide = id => {

        const {LocalAutoCompleteVisible} = this.state;

        LocalAutoCompleteVisible[id] = false;

        this.setState({
            LocalAutoCompleteVisible
        });

    };

    onChange = value => {
        console.log('Changed Value: ', value);
    };

    filterChangeHander = filter => {

        console.log('Filter Changed Value: ', filter);

        this.setState({
            filter
        });

    };

    onChangeHandler = value => {

        console.log('Changed Value: ', value);

        this.setState({
            value
        });

    };

    filterPressEnterHandler = value => {
        console.log('Filter Value: ', value);
    };

    filterClearHandler = () => {
        console.log('Filter Cleared');
    };

    filterUniqueData = (uniqueData, excludeIndex) => {
        return this.data.filter(dataItem =>
            uniqueData.findIndex((item, index) => index !== excludeIndex && item == dataItem) === -1);
    };

    noMatchHandler = filter => {

        // console.log('No Match: ', filter);

        const {value} = this.state;
        this.setState({
            filter: value ? (typeof value === 'object' ? value.text : value) : ''
        });

    };

    onUniqueChange = (key, value) => {
        const {uniqueData} = this.state;
        uniqueData[key] = value;
        this.setState({
            uniqueData
        });
    };

    render() {

        const {
            filter, value, uniqueData,
            LocalAutoCompleteVisible
        } = this.state;

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
                                                   filter={filter}
                                                   value={value}
                                                   placeholder="Please select ..."
                                                   minFilterLength={0}
                                                   onChange={this.onChangeHandler}
                                                   onFilterPressEnter={this.filterPressEnterHandler}
                                                   onFilterClear={this.filterClearHandler}
                                                   onFilterChange={this.filterChangeHander}
                                                   onNoMatch={this.noMatchHandler}/>

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
                                    <code>LocalAutoComplete</code> with default select mode, <code> normal</code>
                                                                   , <code>checkbox</code>, <code>radio</code> applied.
                                </p>

                                <LocalAutoComplete popupStyle={{maxHeight: 300}}
                                                   data={this.data}
                                                   placeholder="Please select ..."
                                                   onChange={this.onChange}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Disabled"/>

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

                    <WidgetHeader className="example-header" title="Custom No Matched Message"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>noMatchedMsg</code> property for no matched message.</p>

                                <LocalAutoComplete popupStyle={{maxHeight: 300}}
                                                   noMatchedMsg="There have no matched value."
                                                   data={this.data}
                                                   triggerRenderer={data => data && typeof data === 'object' ? data.text : data}
                                                   renderer={data => data && typeof data === 'object' ?
                                                       `${data.text} (${data.value})`
                                                       :
                                                       `${data} (${data})`
                                                   }
                                                   placeholder="Please select ..."
                                                   onChange={this.onChange}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Unique"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <LocalAutoComplete popupStyle={{maxHeight: 300}}
                                                   data={this.filterUniqueData(uniqueData, 0)}
                                                   value={uniqueData[0] || null}
                                                   placeholder="Please select ..."
                                                   minFilterLength={0}
                                                   onChange={value => this.onUniqueChange(0, value)}/>

                                <LocalAutoComplete popupStyle={{maxHeight: 300}}
                                                   data={this.filterUniqueData(uniqueData, 1)}
                                                   value={uniqueData[1] || null}
                                                   placeholder="Please select ..."
                                                   minFilterLength={0}
                                                   onChange={value => this.onUniqueChange(1, value)}/>

                                <LocalAutoComplete popupStyle={{maxHeight: 300}}
                                                   data={this.filterUniqueData(uniqueData, 2)}
                                                   value={uniqueData[2] || null}
                                                   placeholder="Please select ..."
                                                   minFilterLength={0}
                                                   onChange={value => this.onUniqueChange(2, value)}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>noMatchedMsg</code> property for no matched message.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={LocalAutoCompleteVisible[1]}
                                        onRequestClose={() => this.hide(1)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <LocalAutoComplete popupStyle={{maxHeight: 300}}
                                                                   noMatchedMsg="There have no matched value."
                                                                   data={this.data}
                                                                   renderer={data => data && typeof data === 'object' ?
                                                                       `${data.text} (${data.value})`
                                                                       :
                                                                       `${data} (${data})`
                                                                   }
                                                                   parentEl={dialogContentEl}
                                                                   placeholder="Please select ..."
                                                                   onChange={this.onChange}/>
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
}

export default LocalAutoCompleteExamples;
