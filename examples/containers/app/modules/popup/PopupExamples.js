import React, {Component} from 'react';

import RaisedButton from 'dist/RaisedButton';
import Dialog from 'dist/Dialog';
import Popup from 'dist/Popup';
import List from 'dist/List';
import Theme from 'dist/Theme';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import PopupDoc from 'assets/propTypes/Popup.json';

import 'sass/containers/app/modules/popup/PopupExamples.scss';

export default class PopupExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            popupVisible: false,
            triggerEl: null,
            dialogVisible: false
        };

        this.togglePopup = this::this.togglePopup;
        this.closePopup = this::this.closePopup;

        this.toggleDialog = this::this.toggleDialog;
        this.closeDialog = this::this.closeDialog;
        this.okHandle = this::this.okHandle;

    }

    togglePopup(e) {
        this.setState({
            popupVisible: !this.state.popupVisible,
            triggerEl: e.currentTarget
        });
    }

    closePopup() {
        this.setState({
            popupVisible: false
        });
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

    okHandle(callback) {
        callback();
    }

    render() {

        const {popupVisible, triggerEl, dialogVisible} = this.state;
        let items = [{
            iconCls: 'fa fa-facebook',
            value: 'Facebook',
            theme: Theme.PRIMARY
        }, {
            iconCls: 'fa fa-twitter',
            value: 'Twitter',
            theme: Theme.PRIMARY
        }, {
            iconCls: 'fa fa-google-plus',
            value: 'Google+',
            theme: Theme.PRIMARY
        }];

        return (
            <div className="example popup-examples">

                <h2 className="example-title">Popup</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Popup Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <RaisedButton className="trigger-button"
                                              value="Toggle Popup"
                                              onTouchTap={this.togglePopup}/>

                                <Popup visible={popupVisible}
                                       triggerEl={triggerEl}
                                       theme={Theme.PRIMARY}
                                       onRequestClose={this.closePopup}>
                                    <List items={items}/>
                                </Popup>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Dialog Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <RaisedButton className="trigger-button"
                                              value="Toggle Dialog"
                                              onTouchTap={this.toggleDialog}/>

                                <Dialog visible={dialogVisible}
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

                <PropTypeDescTable data={PopupDoc}/>

            </div>
        );
    }
};