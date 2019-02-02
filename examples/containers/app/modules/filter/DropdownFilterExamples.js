import React, {Component} from 'react';

import DropdownFilter from 'src/DropdownFilter';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/DropdownFilter.json';

import 'scss/containers/app/modules/filter/DropdownFilterExamples.scss';


class DropdownFilterExamples extends Component {

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
            DropdownFilterVisible: {}
        };

    }

    show = id => {

        const {DropdownFilterVisible} = this.state;

        DropdownFilterVisible[id] = true;

        this.setState({
            DropdownFilterVisible
        });

    };

    hide = id => {

        const {DropdownFilterVisible} = this.state;

        DropdownFilterVisible[id] = false;

        this.setState({
            DropdownFilterVisible
        });

    };

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

        const {DropdownFilterVisible} = this.state;

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
                                                placeholder="Please select ..."
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

                                <p><code>DropdownFilter</code> multiple example.</p>

                                <DropdownFilter data={this.data}
                                                placeholder="Please select ..."
                                                selectMode={DropdownFilter.SelectMode.MULTI_SELECT}
                                                onChange={this.onChange}
                                                onFilterPressEnter={this.filterPressEnterHandle}
                                                onFilterClear={this.filterClearHandle}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>DropdownFilter</code> multiple example.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={DropdownFilterVisible[1]}
                                        onRequestClose={() => this.hide(1)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <DropdownFilter data={this.data}
                                                                placeholder="Please select ..."
                                                                selectMode={DropdownFilter.SelectMode.MULTI_SELECT}
                                                                parentEl={dialogContentEl}
                                                                onChange={this.onChange}
                                                                onFilterPressEnter={this.filterPressEnterHandle}
                                                                onFilterClear={this.filterClearHandle}/>
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

export default DropdownFilterExamples;