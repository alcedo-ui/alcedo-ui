import React, {Component} from 'react';

import RaisedButton from 'dist/RaisedButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import RaisedButtonDoc from 'assets/propTypes/RaisedButton.json';

import 'sass/containers/app/modules/buttons/RaisedButtonExamples.scss';

export default class RaisedButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let propertiesList = [{
            Name: 'className',
            Type: 'PropTypes.string',
            Default: '',
            Description: 'The css class name of the root element.'
        }, {
            Name: 'style',
            Type: 'PropTypes.object',
            Default: '',
            Description: 'The styles of the root element.'
        }, {
            Name: 'theme',
            Type: 'PropTypes.string',
            Default: '',
            Description: 'The button theme.'
        }, {
            Name: 'isRounded',
            Type: 'PropTypes.bool',
            Default: 'false',
            Description: 'Whether need rounded corners.'
        }, {
            Name: 'isCircular',
            Type: 'PropTypes.bool',
            Default: 'false',
            Description: 'Round button.'
        }, {
            Name: 'value',
            Type: 'PropTypes.string || PropTypes.number',
            Default: '',
            Description: 'The button text value.'
        }, {
            Name: 'type',
            Type: 'PropTypes.string',
            Default: 'button',
            Description: ''
        }, {
            Name: 'disabled',
            Type: 'PropTypes.bool',
            Default: 'false',
            Description: 'Button disabled.'
        }, {
            Name: 'isLoading',
            Type: 'PropTypes.bool',
            Default: 'false',
            Description: ''
        }, {
            Name: 'disableTouchRipple',
            Type: ' PropTypes.bool',
            Default: 'false',
            Description: ''
        }, {
            Name: 'iconCls',
            Type: ' PropTypes.string',
            Default: '',
            Description: 'Button left icon className.'
        }, {
            Name: 'rightIconCls',
            Type: ' PropTypes.string',
            Default: '',
            Description: 'Button right icon className.'
        }, {
            Name: 'rippleDisplayCenter',
            Type: ' PropTypes.bool',
            Default: 'false',
            Description: 'Ripple effect is centered.'
        }, {
            Name: 'onTouchTap',
            Type: ' PropTypes.func',
            Default: '',
            Description: 'The function that trigger when the button is clicked.'
        }];

        return (
            <div className="example raised-button-example">

                <h2 className="example-title">Raised Button</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Raised Button Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <RaisedButton value="Default"/>

                                <RaisedButton value="Primary"
                                              theme="primary"/>

                                <RaisedButton value="Success"
                                              theme="success"/>

                                <RaisedButton value="Warning"
                                              theme="warning"/>

                                <RaisedButton value="Error"
                                              theme="error"/>

                                <RaisedButton value="Disabled"
                                              disabled={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Raised Button Rounded Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <RaisedButton value="Default"
                                              isRounded={true}/>

                                <RaisedButton value="Primary"
                                              theme="primary"
                                              isRounded={true}/>

                                <RaisedButton value="Success"
                                              theme="success"
                                              isRounded={true}/>

                                <RaisedButton value="Warning"
                                              theme="warning"
                                              isRounded={true}/>

                                <RaisedButton value="Error"
                                              theme="error"
                                              isRounded={true}/>

                                <RaisedButton value="Disabled"
                                              disabled={true}
                                              isRounded={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Raised Button with Icon Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <RaisedButton value="Reset"
                                              iconCls="fa fa-undo"/>

                                <RaisedButton value="Add"
                                              theme="success"
                                              iconCls="fa fa-plus"/>

                                <RaisedButton value="Delete"
                                              theme="error"
                                              iconCls="fa fa-trash"/>

                                <RaisedButton value="Next"
                                              theme="primary"
                                              rightIconCls="fa fa-chevron-right"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={RaisedButtonDoc}/>

            </div>
        );
    }
};