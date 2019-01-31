import React, {Component} from 'react';

import MaterialLocalAutoComplete from 'src/MaterialLocalAutoComplete';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/MaterialLocalAutoComplete.json';


import 'scss/containers/app/modules/field/MaterialLocalAutoCompleteExamples.scss';



class MaterialLocalAutoCompleteExamples extends Component {

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
            MaterialLocalAutoCompleteVisible: {}
        };

    }

    show = id => {

        const {MaterialLocalAutoCompleteVisible} = this.state;

        MaterialLocalAutoCompleteVisible[id] = true;

        this.setState({
            MaterialLocalAutoCompleteVisible
        });

    };

    hide = id => {

        const {MaterialLocalAutoCompleteVisible} = this.state;

        MaterialLocalAutoCompleteVisible[id] = false;

        this.setState({
            MaterialLocalAutoCompleteVisible
        });

    };

    dialogRenderHandler = () => {

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

        const {MaterialLocalAutoCompleteVisible} = this.state;
        return (
            <div className="example auto-complete-examples">

                <h2 className="example-title">MaterialLocalAutoComplete</h2>

                <p>
                    A <span>MaterialLocalAutoComplete</span> is an interface to help users to complete their input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>MaterialLocalAutoComplete</code> simple example.</p>

                                <MaterialLocalAutoComplete theme={MaterialLocalAutoComplete.Theme.HIGHLIGHT}
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

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>MaterialLocalAutoComplete</code> simple example.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={MaterialLocalAutoCompleteVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <div className="field-group">
                                                    <MaterialLocalAutoComplete
                                                        theme={MaterialLocalAutoComplete.Theme.HIGHLIGHT}
                                                        filterInitValue={'test'}
                                                        data={this.data}
                                                        label="Label"
                                                        placeholder="Please select ..."
                                                        parentEl={dialogContentEl}
                                                        onChange={this.onChange}
                                                        onFilterPressEnter={this.filterPressEnterHandle}
                                                        onFilterClear={this.filterClearHandle}/>
                                                </div>
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

export default MaterialLocalAutoCompleteExamples;