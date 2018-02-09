import React, {Component} from 'react';

import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/DialogBody.json';

import 'sass/containers/app/modules/popup/DialogExamples.scss';

export default class DialogExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            dialogVisible1: false,
            dialogVisible2: false,
            type: 'primary'
        };

        this.toggleDialog = ::this.toggleDialog;
        this.closeDialog = ::this.closeDialog;
        this.updateField = ::this.updateField;

    }

    toggleDialog(id) {
        this.setState({
            [`dialogVisible${id}`]: !this.state.dialogVisible
        }, () => {
            if (id === 2) {
                document.querySelector('.app').style.filter = 'blur(10px)';
            }
        });
    }

    closeDialog(id) {
        this.setState({
            [`dialogVisible${id}`]: false
        }, () => {
            document.querySelector('.app').style.filter = '';
        });
    }

    okHandler(closeDialog) {
        console.log('OK button clicked');
        closeDialog();
    }

    cancelHandler() {
        console.log('Cancel button clicked');
    }

    closeHandler() {
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

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p><code>Dialog</code> example use basic properties.</p>

                                <RaisedButton className="trigger-button"
                                              value="Toggle Dialog"
                                              style={{width: '120px'}}
                                              onTouchTap={() => {
                                                  this.toggleDialog(1);
                                              }}/>

                                <Dialog visible={dialogVisible1}
                                        title={`${type} dialog`}
                                        okButtonTheme={type}
                                        theme={type}
                                        isBlurClose={true}
                                        showModal={false}
                                        onRequestClose={() => {
                                            this.closeDialog(1);
                                        }}
                                        onOKButtonTouchTap={this.okHandler}
                                        onCancelButtonTouchTap={this.cancelHandler}
                                        onCloseButtonTouchTap={this.closeHandler}>
                                    <div className="dialog-example-content">
                                        content
                                    </div>
                                </Dialog>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Blur Modal"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p><code>Dialog</code> example use modal.</p>

                                <RaisedButton className="trigger-button"
                                              value="Toggle Dialog"
                                              style={{width: '120px'}}
                                              onTouchTap={() => {
                                                  this.toggleDialog(2);
                                              }}/>

                                <Dialog modalClassName="blur-modal"
                                        visible={dialogVisible2}
                                        title={`${type} dialog`}
                                        okButtonTheme={type}
                                        theme={type}
                                        okButtonText="OK"
                                        okButtonIconCls="fa fa-check"
                                        cancelButtonVisible={true}
                                        cancelButtonText="CANCEL"
                                        cancelButtonIconCls="fas fa-times"
                                        cancelButtonTheme="error"
                                        onRequestClose={() => {
                                            this.closeDialog(2);
                                        }}
                                        onOKButtonTouchTap={this.okHandler}
                                        onCancelButtonTouchTap={this.cancelHandler}
                                        onCloseButtonTouchTap={this.closeHandler}>
                                    <div className="dialog-example-content">
                                        content
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