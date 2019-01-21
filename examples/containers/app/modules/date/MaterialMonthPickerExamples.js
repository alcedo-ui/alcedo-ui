import React, {Component, PropTypes} from 'react';

import MaterialMonthPicker from 'src/MaterialMonthPicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MaterialMonthPicker.json';

import 'scss/containers/app/modules/date/DateInDialog.scss'

class MaterialMonthPickerExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MaterialMonthPickerVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {MaterialMonthPickerVisible} = this.state;

        MaterialMonthPickerVisible[id] = true;

        this.setState({
            MaterialMonthPickerVisible
        });

    };

    hide = id => {

        const {MaterialMonthPickerVisible} = this.state;

        MaterialMonthPickerVisible[id] = false;

        this.setState({
            MaterialMonthPickerVisible
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

        const {MaterialMonthPickerVisible, triggerEl} = this.state;

        return (
            <div className="example time-picker-examples">

                <h2 className="example-title">Material Month Picker</h2>

                <p>
                    <span>Material Month Picker</span> is used to select a single date for an input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Material Month Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <MaterialMonthPicker name="date"
                                                     label={'date'}
                                                     isLabelAnimate={true}
                                                     autoClose={false}
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
                                    <code>Material Month Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <MaterialMonthPicker name="date"
                                                     label={'date'}
                                                     isLabelAnimate={false}
                                                     autoClose={true}
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
                                    <code>Material Month Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={MaterialMonthPickerVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>

                                    <div className="popover-dialog-content-scroller">
                                        <MaterialMonthPicker name="date"
                                                             label={'date'}
                                                             isLabelAnimate={false}
                                                             autoClose={true}
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

export default MaterialMonthPickerExamples;