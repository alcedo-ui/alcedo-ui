import React, {Component} from 'react';

import RaisedButton from 'dist/RaisedButton';
import RadioGroup from 'dist/RadioGroup';
import Dialog from 'dist/Dialog';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import DialogDoc from 'assets/propTypes/Dialog.json';

import 'sass/containers/app/modules/popup/DialogExamples.scss';

export default class DialogExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            dialogVisible: false,
            type: 'primary'

        };

        this.toggleDialog = this::this.toggleDialog;
        this.closeDialog = this::this.closeDialog;
        this.okHandle = this::this.okHandle;
        this.updateField = this::this.updateField;

    }

    toggleDialog() {
        this.setState({
            dialogVisible: !this.state.dialogVisible
        });
    }

    closeDialog() {
        this.setState({
            dialogVisible: false
        });
    }

    okHandle(closeDialog) {
        closeDialog();
    }

    updateField(key, value) {
        let state = {};
        state[key] = value;
        this.setState(state);
    }

    render() {

        const {dialogVisible, type} = this.state;

        return (
            <div className="example dialog-examples">

                <h2 className="example-title">Dialog</h2>

                <p>
                    <span>Dialogs</span> contain text and UI controls focused on a specific task.They inform users about
                    critical information require users to make decisions.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Dialog Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>Dialog example with RadioGroup.You can select different radio button and then click
                                    the toggle dialog button to show different type Dialog.</p>

                                <div className="field-group">
                                    <label className="text-field-label">Type</label>
                                    <RadioGroup data={[{
                                        label: 'Primary',
                                        value: 'primary'
                                    }, {
                                        label: 'Success',
                                        value: 'success'
                                    }, {
                                        label: 'Warning',
                                        value: 'warning'
                                    }, {
                                        label: 'Highlight',
                                        value: 'highlight'
                                    }, {
                                        label: 'Error',
                                        value: 'error'
                                    }]}
                                                value={type}
                                                onChange={(value) => {
                                                    this.updateField('type', value);
                                                }}/>
                                </div>

                                <RaisedButton className="trigger-button"
                                              value="Toggle Dialog"
                                              style={{width: '120px'}}
                                              onTouchTap={this.toggleDialog}/>


                                <Dialog visible={dialogVisible}
                                        title={`${type} dialog`}
                                        theme={type}
                                        disabled={true}
                                        okButtonTheme={type}
                                        isBlurClose={true}
                                        onRequestClose={this.closeDialog}
                                        onOKButtonTouchTap={this.okHandle}>
                                    <div className="dialog-example-content">
                                        content
                                    </div>
                                </Dialog>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Dialog Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>Dialog example use basic properties.</p>

                                <RaisedButton className="trigger-button"
                                              value="Toggle Dialog"
                                              style={{width: '120px'}}
                                              onTouchTap={this.toggleDialog}/>


                                <Dialog visible={dialogVisible}
                                        title={`${type} dialog`}
                                        okButtonTheme={type}
                                        theme={type}
                                        isBlurClose={true}
                                        okButtonText="OK"
                                        okButtonIconCls="fa fa-check-circle"
                                        okButtonDisabled={true}
                                        cancelButtonVisible={true}
                                        cancelButtonText="CANCEL"
                                        cancelButtonIconCls="fa fa-times-circle"
                                        cancelButtonTheme="error"
                                        showModal={false}
                                        onRequestClose={this.closeDialog}
                                        onOKButtonTouchTap={this.okHandle}>
                                    <div className="dialog-example-content">
                                        content
                                    </div>
                                </Dialog>

                            </div>

                        </div>
                    </div>
                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DialogDoc}/>

            </div>
        );
    }
};