import React, {Component, PropTypes} from 'react';

import MaterialTimePicker from 'src/MaterialTimePicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MaterialTimePicker.json';

import 'scss/containers/app/modules/date/DateInDialog.scss';

class MaterialTimePickerExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MaterialTimePickerVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {MaterialTimePickerVisible} = this.state;

        MaterialTimePickerVisible[id] = true;

        this.setState({
            MaterialTimePickerVisible
        });

    };

    hide = id => {

        const {MaterialTimePickerVisible} = this.state;

        MaterialTimePickerVisible[id] = false;

        this.setState({
            MaterialTimePickerVisible
        });

    };

    dialogRenderHandler = () => {

        const triggerEl = this.state.triggerEl;
        triggerEl[1] = findDOMNode(this.refs['trigger1']);

        this.setState({
            triggerEl
        });
    };

    onChangeHandler = value => {
        console.log(value);
    };

    render() {

        const {MaterialTimePickerVisible, triggerEl} = this.state;

        return (
            <div className="example time-picker-examples">

                <h2 className="example-title">Material Time Picker</h2>

                <p>
                    <span>Material Time Picker</span> is used to select select a single time for an input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Material Time Picker</code> simple example.</p>

                                <MaterialTimePicker label={'time'}
                                                    isLabelAnimate={true}
                                                    onChange={this.onChangeHandler}/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With value"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Material Time Picker</code> using the <code>value</code> property to set
                                    initial time.
                                </p>

                                <MaterialTimePicker label={'time'}
                                                    isLabelAnimate={false}
                                                    value="12:00:00"
                                                    onChange={this.onChangeHandler}/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With maxValue and minValue"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Material Time Picker</code> using the <code>maxValue</code> and
                                    <code>minValue</code>
                                    property to set time selectable range.</p>

                                <MaterialTimePicker label={'time'}
                                                    value="10:00:00"
                                                    maxValue="20:56:20"
                                                    minValue="01:20:20"
                                                    onChange={this.onChangeHandler}/>
                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With placeholder and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Material Time Picker</code> using the <code>placeholder</code> property to set
                                    time
                                    default value and using the <code>dateFormat</code> property constructor set time
                                    format.</p>

                                <MaterialTimePicker label={'time'}
                                                    value="12:00"
                                                    dateFormat="HH:mm"
                                                    maxValue="23:56"
                                                    minValue="01:20"
                                                    onChange={this.onChangeHandler}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Material Time Picker</code> using the <code>placeholder</code> property to set
                                    time
                                    default value and using the <code>dateFormat</code> property constructor set time
                                    format.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={MaterialTimePickerVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>

                                    <div className="popover-dialog-content-scroller">
                                        <MaterialTimePicker label={'time'}
                                                            value="12:00"
                                                            dateFormat="HH:mm"
                                                            maxValue="23:56"
                                                            minValue="01:20"
                                                            parentEl={document.querySelector('.dialog-content')}
                                                            triggerEl={triggerEl}
                                                            onChange={this.onChangeHandler}/>
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

export default MaterialTimePickerExamples;