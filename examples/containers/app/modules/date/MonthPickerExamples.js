import React, {Component, PropTypes} from 'react';

import MonthPicker from 'src/MonthPicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MonthPicker.json';

import 'scss/containers/app/modules/date/DateInDialog.scss';

class MonthPickerExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MonthPickerVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {MonthPickerVisible} = this.state;

        MonthPickerVisible[id] = true;

        this.setState({
            MonthPickerVisible
        });

    };

    hide = id => {

        const {MonthPickerVisible} = this.state;

        MonthPickerVisible[id] = false;

        this.setState({
            MonthPickerVisible
        });

    };

    dialogRenderHandler = () => {

        const triggerEl = this.state.triggerEl;
        triggerEl[1] = findDOMNode(this.refs['trigger1']);

        this.setState({
            triggerEl
        });
    };

    onChangeHandle = value => {
        console.log(value);
    };

    render() {

        const {MonthPickerVisible, triggerEl} = this.state;
        return (
            <div className="example time-picker-examples">

                <h2 className="example-title">Month Picker</h2>

                <p>
                    <span>Month Picker</span> is used to select a single date for an input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Month Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <MonthPicker name="date"
                                             label={'date'}
                                             dateFormat={'YYYY/MM'}
                                             autoClose={false}
                                             onChange={this.onChangeHandle}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Month Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={MonthPickerVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>

                                    <div className="popover-dialog-content-scroller">
                                        <MonthPicker name="date"
                                                     label={'date'}
                                                     dateFormat={'YYYY/MM'}
                                                     parentEl={document.querySelector('.dialog-content')}
                                                     triggerEl={triggerEl}
                                                     autoClose={false}
                                                     onChange={this.onChangeHandle}/>
                                    </div>

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

export default MonthPickerExamples;