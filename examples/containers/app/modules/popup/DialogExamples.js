/**
 * Created by DT314 on 2017/4/7.
 */
import React, {Component, PropTypes} from 'react';

import Dialog from 'dist/Dialog';
import FlatButton from 'dist/FlatButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import 'sass/containers/app/modules/popup/DialogExamples.scss';

export default class DialogExamples extends Component {
    constructor(props) {
        super();
        this.clickHandle = this::this.clickHandle;
        this.hideHandle = this::this.hideHandle;
        this.state = {
            hide: 'hide'
        }
    }

    clickHandle() {
        this.setState({
            hide: ''
        })
    }

    hideHandle() {
        this.setState({
            hide: 'hide'
        })
    }

    render() {

        let propertiesList = [{
            Name: 'className',
            Type: 'PropTypes.string',
            Default: 'hide',
            Description: 'The css class name of the root element.'
        }, {
            Name: 'title',
            Type: 'PropTypes.string',
            Default: 'Dialog',
            Description: 'The title to display on the Dialog. Could be number, string, element or an array containing these types.'
        }, {
            Name: 'desc',
            Type: 'PropTypes.string',
            Default: 'here is the dialog description.',
            Description: 'The description of the dialog box.'
        }, {
            Name: 'buttonBool',
            Type: 'PropTypes.array',
            Default: '[true, true]',
            Description: 'Whether the button is clickable.'
        }, {
            Name: 'onHide',
            Type: 'PropTypes.func',
            Default: 'false',
            Description: 'The function that trigger when click cancel.'
        }, {
            Name: 'onSure',
            Type: ' PropTypes.func',
            Default: '',
            Description: 'The function that trigger when click submit.'
        }];

        return (
            <div className="example dialog-example">

                <h2 className="example-title">Dialog</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Dialog Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Please click this button to show Dialog.</p>

                            <FlatButton onTouchTap={this.clickHandle} value="Dialog"/>

                            <Dialog className={this.state.hide}
                                    onHide={this.hideHandle}
                                    onSure={this.hideHandle}/>

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
}