import React, {Component} from 'react';

import RaisedButton from 'src/RaisedButton';
import Toaster from 'src/Toaster';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import MaterialProvider from 'src/MaterialProvider';
import ButtonRadioGroup from 'src/ButtonRadioGroup';
import MaterialTextField from 'src/MaterialTextField';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Toast.json';

import 'sass/containers/app/modules/pop/PopExamples.scss';
import 'sass/containers/app/modules/pop/ToastExamples.scss';

export default class ToastExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            type: Toaster.Type.INFO,
            position: Toaster.Position.TOP,
            message: 'Message',
            toasts: []
        };

        this.Type = Object.keys(Toaster.Type).map(item => ({
            className: `type-${item.toLowerCase()}`,
            iconCls: 'fas fa-check',
            label: item,
            value: Toaster.Type[item]
        }));

        this.ToasterPosition = Object.keys(Toaster.Position).map(item => ({
            label: item,
            value: Toaster.Position[item]
        }));

        this.updateField = ::this.updateField;
        this.addToast = ::this.addToast;
        this.toastPopHandler = ::this.toastPopHandler;

    }

    updateField(key, value) {
        let state = {};
        state[key] = value;
        this.setState(state);
    }

    addToast(position) {

        const {type, message, toasts} = this.state;

        toasts.push({
            type,
            message
        });

        this.setState({
            toasts,
            position
        });

    }

    toastPopHandler() {
        this.setState({
            toasts: []
        });
    }

    render() {

        const {type, position, title, message, toasts} = this.state;

        return (
            <div className="example pop-examples toast-examples">

                <h2 className="example-title">Toast</h2>

                <p>
                    <span>Toast</span> is a global display notification alert information .
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <ButtonRadioGroup data={this.Type}
                                                  value={type}
                                                  onChange={value => {
                                                      this.updateField('type', value);
                                                  }}/>

                                <MaterialTextField theme={MaterialTextField.Theme.HIGHLIGHT}
                                                   value={message}
                                                   onChange={value => {
                                                       this.updateField('message', value);
                                                   }}/>

                                <div className="button-group-wrapper">

                                    <div className="button-group top">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top Left"
                                                      onTouchTap={() => {
                                                          this.addToast(Toaster.Position.TOP_LEFT);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top"
                                                      onTouchTap={() => {
                                                          this.addToast(Toaster.Position.TOP);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top right"
                                                      onTouchTap={() => {
                                                          this.addToast(Toaster.Position.TOP_RIGHT);
                                                      }}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Top"
                                                      onTouchTap={() => {
                                                          this.addToast(Toaster.Position.RIGHT_TOP);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right"
                                                      onTouchTap={() => {
                                                          this.addToast(Toaster.Position.RIGHT);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onTouchTap={() => {
                                                          this.addToast(Toaster.Position.RIGHT_BOTTOM);
                                                      }}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onTouchTap={() => {
                                                          this.addToast(Toaster.Position.BOTTOM_LEFT);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom"
                                                      onTouchTap={() => {
                                                          this.addToast(Toaster.Position.BOTTOM);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onTouchTap={() => {
                                                          this.addToast(Toaster.Position.BOTTOM_RIGHT);
                                                      }}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Top"
                                                      onTouchTap={() => {
                                                          this.addToast(Toaster.Position.LEFT_TOP);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left"
                                                      onTouchTap={() => {
                                                          this.addToast(Toaster.Position.LEFT);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onTouchTap={() => {
                                                          this.addToast(Toaster.Position.LEFT_BOTTOM);
                                                      }}/>
                                    </div>

                                    <div className="button-group center">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Center"
                                                      onTouchTap={() => {
                                                          this.addToast(Toaster.Position.CENTER);
                                                      }}/>
                                    </div>

                                </div>

                                <Toaster toasts={toasts}
                                         position={position}
                                         onToastPop={this.toastPopHandler}/>

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