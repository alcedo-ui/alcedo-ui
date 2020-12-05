/**
 * @file Toaster examples
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';

// Components
import RaisedButton from 'src/RaisedButton';
import Toaster from 'src/Toaster';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import ButtonRadioGroup from 'src/ButtonRadioGroup';
import MaterialTextField from 'src/MaterialTextField';

// Docs
import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Toast.json';

// Vendors
import startCase from 'lodash/startCase';

// Styles
import 'scss/containers/app/modules/pop/PopExamples.scss';
import 'scss/containers/app/modules/pop/ToastExamples.scss';

class ToastExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            type: Toaster.Type.INFO,
            position: Toaster.Position.TOP,
            message: 'Message',
            toasts: {}
        };

        this.Type = Object.keys(Toaster.Type)
            .map(item => ({
                className: `type-${item.toLowerCase()}`,
                iconCls: 'fas fa-check',
                text: startCase(item.toLowerCase()),
                value: Toaster.Type[item]
            }));

    }

    updateField = (key, value) => {
        let state = {};
        state[key] = value;
        this.setState(state);
    };

    addToast = position => {

        const {type, message, toasts} = this.state;

        if (!(position in toasts)) {
            toasts[position] = [];
        }

        toasts[position].push({
            type: type?.value,
            message
        });

        this.setState({
            toasts,
            position
        });

    };

    toastPopHandler = () => {
        this.setState({
            toasts: {}
        });
    };

    render() {

        const {type, message, toasts} = this.state,
            {
                TOP_LEFT, TOP, TOP_RIGHT, RIGHT_TOP, RIGHT, RIGHT_BOTTOM, CENTER,
                BOTTOM_LEFT, BOTTOM, BOTTOM_RIGHT, LEFT_TOP, LEFT, LEFT_BOTTOM
            } = Toaster.Position;

        console.log(toasts[TOP]);

        return (
            <div className="example pop-examples toast-examples">

                <h2 className="example-title">Toast</h2>

                <p>
                    <span>Toast</span>
                    is a global display notification alert information .
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <ButtonRadioGroup data={this.Type}
                                                  value={type}
                                                  onChange={value => this.updateField('type', value)}/>

                                <MaterialTextField theme={MaterialTextField.Theme.HIGHLIGHT}
                                                   value={message}
                                                   onChange={value => this.updateField('message', value)}/>

                                <div className="button-group-wrapper">

                                    <div className="button-group top">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top Left"
                                                      onClick={() => this.addToast(TOP_LEFT)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top"
                                                      onClick={() => this.addToast(TOP)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top right"
                                                      onClick={() => this.addToast(TOP_RIGHT)}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Top"
                                                      onClick={() => this.addToast(RIGHT_TOP)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right"
                                                      onClick={() => this.addToast(RIGHT)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onClick={() => this.addToast(RIGHT_BOTTOM)}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onClick={() => this.addToast(BOTTOM_LEFT)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom"
                                                      onClick={() => this.addToast(BOTTOM)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onClick={() => this.addToast(BOTTOM_RIGHT)}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Top"
                                                      onClick={() => this.addToast(LEFT_TOP)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left"
                                                      onClick={() => this.addToast(LEFT)}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onClick={() => this.addToast(LEFT_BOTTOM)}/>
                                    </div>

                                    <div className="button-group center">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Center"
                                                      onClick={() => this.addToast(CENTER)}/>
                                    </div>

                                </div>

                                <Toaster toasts={toasts[TOP_LEFT]}
                                         position={TOP_LEFT}
                                         onToastPop={this.toastPopHandler}/>
                                <Toaster toasts={toasts[TOP]}
                                         position={TOP}
                                         onToastPop={this.toastPopHandler}/>
                                <Toaster toasts={toasts[TOP_RIGHT]}
                                         position={TOP_RIGHT}
                                         onToastPop={this.toastPopHandler}/>
                                <Toaster toasts={toasts[RIGHT_TOP]}
                                         position={RIGHT_TOP}
                                         onToastPop={this.toastPopHandler}/>
                                <Toaster toasts={toasts[RIGHT]}
                                         position={RIGHT}
                                         onToastPop={this.toastPopHandler}/>
                                <Toaster toasts={toasts[RIGHT_BOTTOM]}
                                         position={RIGHT_BOTTOM}
                                         onToastPop={this.toastPopHandler}/>
                                <Toaster toasts={toasts[CENTER]}
                                         position={CENTER}
                                         onToastPop={this.toastPopHandler}/>
                                <Toaster toasts={toasts[BOTTOM_LEFT]}
                                         position={BOTTOM_LEFT}
                                         onToastPop={this.toastPopHandler}/>
                                <Toaster toasts={toasts[BOTTOM]}
                                         position={BOTTOM}
                                         onToastPop={this.toastPopHandler}/>
                                <Toaster toasts={toasts[BOTTOM_RIGHT]}
                                         position={BOTTOM_RIGHT}
                                         onToastPop={this.toastPopHandler}/>
                                <Toaster toasts={toasts[LEFT_TOP]}
                                         position={LEFT_TOP}
                                         onToastPop={this.toastPopHandler}/>
                                <Toaster toasts={toasts[LEFT]}
                                         position={LEFT}
                                         onToastPop={this.toastPopHandler}/>
                                <Toaster toasts={toasts[LEFT_BOTTOM]}
                                         position={LEFT_BOTTOM}
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

export default ToastExamples;
