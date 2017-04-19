/**
 * Created by DT314 on 2017/4/7.
 */
import React, {Component, PropTypes} from 'react';

import Dialog from 'dist/Dialog';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import 'sass/containers/app/modules/popup/DialogExamples.scss';

export default class DialogExamples extends Component{
    constructor(props){
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
        return (
            <div className="example dialog-example">

                <h2 className="example-title">Dialog</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Dialog Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <p>Please click this button to show Dialog.</p>
                            <button onClick={this.clickHandle}>Dialog</button>
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
                            <tr>
                                <td className="properties-name">title</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td>Dialog</td>
                                <td>The title to display on the Dialog. Could be number, string, element or an array containing these types.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">desc</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td>here is the dialog description.</td>
                                <td>The description of the dialog box.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">buttonBool</td>
                                <td className="properties-type">PropTypes.array</td>
                                <td>[true,true]</td>
                                <td>Whether the button is clickable.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">className</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td>hide</td>
                                <td>The css class name of the root element.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">onHide</td>
                                <td className="properties-type">PropTypes.func</td>
                                <td> </td>
                                <td>Click the Cancel button will trigger this function.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">onSure</td>
                                <td className="properties-type">PropTypes.func</td>
                                <td> </td>
                                <td>Click the Commit button will trigger this function.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}