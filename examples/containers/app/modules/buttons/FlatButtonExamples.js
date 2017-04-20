import React, {Component} from 'react';

import FlatButton from 'dist/FlatButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import 'sass/containers/app/modules/buttons/FlatButtonExamples.scss';

export default class FlatButtonExamples extends Component {

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
            <div className="example flat-button-example">

                <h2 className="example-title">Flat Button</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Flat Button Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <FlatButton value="Default"/>

                                <FlatButton value="Primary"
                                            theme="primary"/>

                                <FlatButton value="Success"
                                            theme="success"/>

                                <FlatButton value="Warning"
                                            theme="warning"/>

                                <FlatButton value="Error"
                                            theme="error"/>

                                <FlatButton value="Disabled"

                                            disabled={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Flat Button Rounded Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <FlatButton value="Default"
                                            isRounded={true}/>

                                <FlatButton value="Primary"
                                            theme="primary"
                                            isRounded={true}/>

                                <FlatButton value="Success"
                                            theme="success"
                                            isRounded={true}/>

                                <FlatButton value="Warning"
                                            theme="warning"
                                            isRounded={true}/>

                                <FlatButton value="Error"
                                            theme="error"
                                            isRounded={true}/>

                                <FlatButton value="Disabled"
                                            disabled={true}
                                            isRounded={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Flat Button with Icon Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <FlatButton value="Reset"
                                            iconCls="fa fa-undo"/>

                                <FlatButton value="Add"
                                            theme="success"
                                            iconCls="fa fa-plus"/>

                                <FlatButton value="Delete"
                                            theme="error"
                                            iconCls="fa fa-trash"/>

                                <FlatButton value="Next"
                                            theme="primary"
                                            rightIconCls="fa fa-chevron-right"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <div className="example-properties">
                    <h3>Properties</h3>
                    <table className="example-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                propertiesList && propertiesList.length > 0 ?
                                    (
                                        propertiesList.map(function (val) {
                                            return <tr>
                                                <td className="properties-name">{val.Name}</td>
                                                <td className="properties-type">{val.Type}</td>
                                                <td>{val.Default}</td>
                                                <td>{val.Description}</td>
                                            </tr>
                                        })
                                    )
                                    : null
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
};