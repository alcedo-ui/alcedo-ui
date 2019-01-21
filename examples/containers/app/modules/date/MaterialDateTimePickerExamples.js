import React, {Component, PropTypes} from 'react';

import MaterialDateTimePicker from 'src/MaterialDateTimePicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MaterialDateTimePicker.json';

import 'scss/containers/app/modules/date/DateInDialog.scss';

class MaterialDateTimePickerExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MaterialDateTimePickerVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {MaterialDateTimePickerVisible} = this.state;

        MaterialDateTimePickerVisible[id] = true;

        this.setState({
            MaterialDateTimePickerVisible
        });

    };

    hide = id => {

        const {MaterialDateTimePickerVisible} = this.state;

        MaterialDateTimePickerVisible[id] = false;

        this.setState({
            MaterialDateTimePickerVisible
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

        const {MaterialDateTimePickerVisible, triggerEl} = this.state;
        return (
            <div className="example time-picker-examples">

                <h2 className="example-title">Material Date Time Picker</h2>

                <p>
                    <span>Material Date Time Picker</span> is used to select a single date for an input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Material Date Time Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <MaterialDateTimePicker name="date"
                                                        label={'date'}
                                                        value=""
                                                        isLabelAnimate={true}
                                                        theme={MaterialDateTimePicker.Theme.PRIMARY}
                                                        onChange={this.onChangeHandler}/>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Material Date Time Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <MaterialDateTimePicker name="date"
                                                        label={'date'}
                                                        theme={MaterialDateTimePicker.Theme.HIGHLIGHT}
                                                        value="2018-02-02 12:23:00"
                                                        isLabelAnimate={false}
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

                                <p>
                                    <code>Material Date Time Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={MaterialDateTimePickerVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>

                                    <div className="popover-dialog-content-scroller">
                                        <MaterialDateTimePicker name="date"
                                                                label={'date'}
                                                                theme={MaterialDateTimePicker.Theme.HIGHLIGHT}
                                                                value="2018-02-02 12:23:00"
                                                                isLabelAnimate={false}
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

export default MaterialDateTimePickerExamples;