import React, {Component} from 'react';

import RaisedButton from 'dist/RaisedButton';
import Dialog from 'dist/Dialog';
import List from 'dist/List';
import Theme from 'dist/Theme';
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
            triggerEl: null
        };

        this.toggleDialog = this::this.toggleDialog;
        this.closeDialog = this::this.closeDialog;
        this.okHandle = this::this.okHandle;

    }

    toggleDialog(e) {
        this.setState({
            dialogVisible: !this.state.dialogVisible,
            triggerEl: e.currentTarget
        });
    }

    closeDialog() {
        this.setState({
            dialogVisible: false
        });
    }

    okHandle(callback) {
        callback();
    }

    render() {

        const {dialogVisible, triggerEl} = this.state;

        return (
            <div className="example dialog-examples">

                <h2 className="example-title">Dialog</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Dialog Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <RaisedButton className="trigger-button"
                                              value="Toggle Dialog"
                                              onTouchTap={this.toggleDialog}/>

                                <Dialog visible={dialogVisible}
                                        triggerEl={triggerEl}
                                        title="Dialog Title"
                                        onRequestClose={this.closeDialog}
                                        onOKButtonTouchTap={this.okHandle}>
                                    <div className="dialog-example-content">
                                        Dialog Content
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