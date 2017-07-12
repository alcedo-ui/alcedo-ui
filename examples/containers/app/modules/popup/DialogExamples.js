import React, {Component} from 'react';

import RaisedButton from 'dist/RaisedButton';
import Dialog from 'dist/Dialog';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import DialogDoc from 'assets/propTypes/DialogBody.json';

import 'sass/containers/app/modules/popup/DialogExamples.scss';

export default class DialogExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            dialogVisible1: false,
            dialogVisible2: false,
            type: 'primary'
        };

        this.toggleDialog = this::this.toggleDialog;
        this.closeDialog = this::this.closeDialog;
        this.okHandle = this::this.okHandle;
        this.cancelHandle = this::this.cancelHandle;
        this.closeHandle = this::this.closeHandle;
        this.updateField = this::this.updateField;

    }

    toggleDialog(id) {
        this.setState({
            [`dialogVisible${id}`]: !this.state.dialogVisible
        });
    }

    closeDialog(id) {
        this.setState({
            [`dialogVisible${id}`]: false
        });
    }

    okHandle(closeDialog) {
        console.log('OK button clicked');
        closeDialog();
    }

    cancelHandle() {
        console.log('Cancel button clicked');
    }

    closeHandle() {
        console.log('Close button clicked');
    }

    updateField(key, value) {
        let state = {};
        state[key] = value;
        this.setState(state);
    }

    render() {

        const {dialogVisible1, dialogVisible2, type} = this.state;

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

                                <p>Dialog example use basic properties.</p>

                                <RaisedButton className="trigger-button"
                                              value="Toggle Dialog"
                                              style={{width: '120px'}}
                                              onTouchTap={() => {
                                                  this.toggleDialog(2);
                                              }}/>

                                <Dialog visible={dialogVisible2}
                                        title={`${type} dialog`}
                                        okButtonTheme={type}
                                        theme={type}
                                        isBlurClose={true}
                                        okButtonText="OK"
                                        okButtonIconCls="fa fa-check"
                                        cancelButtonVisible={true}
                                        cancelButtonText="CANCEL"
                                        cancelButtonIconCls="fa fa-times"
                                        cancelButtonTheme="error"
                                        showModal={false}
                                        onRequestClose={() => {
                                            this.closeDialog(2);
                                        }}
                                        onOKButtonTouchTap={this.okHandle}
                                        onCancelButtonTouchTap={this.cancelHandle}
                                        onCloseButtonTouchTap={this.closeHandle}>
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