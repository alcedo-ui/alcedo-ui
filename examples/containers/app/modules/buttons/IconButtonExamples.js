import React, {Component} from 'react';

import IconButton from 'dist/IconButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import 'sass/containers/app/modules/buttons/IconButtonExamples.scss';

export default class IconButtonExamples extends Component {

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
            <div className="example icon-button-example">

                <h2 className="example-title">Icon Button</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Icon Button Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <IconButton iconCls="fa fa-plus"
                                            theme="success"/>

                                <IconButton iconCls="fa fa-trash"
                                            theme="error"/>

                                <IconButton iconCls="fa fa-wrench"
                                            disabled={true}/>

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