import React, {Component, PropTypes} from 'react';
import moment from 'moment';

import MaterialDatePicker from 'src/MaterialDatePicker';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MaterialDatePicker.json';

import 'assets/scss/containers/app/modules/date/DateInDialog.scss';



class MaterialDatePickerExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            start: this.yesterday(),
            end: this.yesterday(),
            MaterialDatePickerVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {MaterialDatePickerVisible} = this.state;

        MaterialDatePickerVisible[id] = true;

        this.setState({
            MaterialDatePickerVisible
        });

    };

    hide = id => {

        const {MaterialDatePickerVisible} = this.state;

        MaterialDatePickerVisible[id] = false;

        this.setState({
            MaterialDatePickerVisible
        });

    };

    dialogRenderHandler = () => {

        const triggerEl = this.state.triggerEl;
        triggerEl[1] = findDOMNode(this.refs['trigger1']);

        this.setState({
            triggerEl
        });
    };

    yesterday = () => {
        return moment().add(-1, 'days').format('YYYY-MM-DD');
    };

    onChangeHandle = value => {
        console.log(value);
    };

    startChangeHandler = start => {
        console.log(start);
        this.setState({
            start
        });
    };

    endChangeHandler = end => {
        console.log(end);
        this.setState({
            end
        });
    };

    render() {

        const {start, end, MaterialDatePickerVisible, triggerEl} = this.state;

        return (
            <div className="example time-picker-examples">

                <h2 className="example-title">Material Date Picker</h2>

                <p>
                    <span>Material Date Picker</span>
                    is used to select a single date for an input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Material Date Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <MaterialDatePicker label="Start"
                                                    value={start}
                                                    maxValue={end}
                                                    rightIconCls="far fa-calendar-alt"
                                                    popupClassName="popupClassName"
                                                    onChange={this.startChangeHandler}/>

                                <MaterialDatePicker label="End"
                                                    value={end}
                                                    minValue={start}
                                                    maxValue={this.yesterday()}
                                                    rightIconCls="far fa-calendar-alt"
                                                    popupClassName="popupClassName"
                                                    onChange={this.endChangeHandler}/>

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
                                    <code>Material Date Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <MaterialDatePicker name="date"
                                                    label={'date'}
                                                    value="2017-12-12"
                                                    isLabelAnimate={false}
                                                    autoClose={false}
                                                    disabled={true}
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
                                    <code>Material Date Picker</code> using the <code>value</code> property to set
                                    initial date.
                                </p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={MaterialDatePickerVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>

                                    <div className="popover-dialog-content-scroller">
                                        <MaterialDatePicker label="Start"
                                                            value={start}
                                                            maxValue={end}
                                                            rightIconCls="far fa-calendar-alt"
                                                            popupClassName="popupClassName"
                                                            parentEl={document.querySelector('.dialog-content')}
                                                            triggerEl={triggerEl}
                                                            onChange={this.startChangeHandler}/>

                                        <MaterialDatePicker label="End"
                                                            value={end}
                                                            minValue={start}
                                                            maxValue={this.yesterday()}
                                                            rightIconCls="far fa-calendar-alt"
                                                            popupClassName="popupClassName"
                                                            parentEl={document.querySelector('.dialog-content')}
                                                            triggerEl={triggerEl}
                                                            onChange={this.endChangeHandler}/>
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

export default MaterialDatePickerExamples;
