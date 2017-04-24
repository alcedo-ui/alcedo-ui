import React, {Component} from 'react';

import GhostButton from 'dist/GhostButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import GhostButtonDoc from 'assets/propTypes/GhostButton.json';

import 'sass/containers/app/modules/buttons/GhostButtonExamples.scss';

export default class GhostButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example ghost-button-examples">

                <h2 className="example-title">Ghost Button</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Ghost Button Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <GhostButton value="Default"/>

                                <GhostButton value="Primary"
                                             theme="primary"/>

                                <GhostButton value="Success"
                                             theme="success"/>

                                <GhostButton value="Warning"
                                             theme="warning"/>

                                <GhostButton value="Error"
                                             theme="error"/>

                                <GhostButton value="Disabled"
                                             disabled={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Ghost Button Rounded Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <GhostButton value="Default"
                                             isRounded={true}/>

                                <GhostButton value="Primary"
                                             theme="primary"
                                             isRounded={true}/>

                                <GhostButton value="Success"
                                             theme="success"
                                             isRounded={true}/>

                                <GhostButton value="Warning"
                                             theme="warning"
                                             isRounded={true}/>

                                <GhostButton value="Error"
                                             theme="error"
                                             isRounded={true}/>

                                <GhostButton value="Disabled"
                                             disabled={true}
                                             isRounded={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Ghost Button with Icon Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <GhostButton value="Reset"
                                             iconCls="fa fa-undo"/>

                                <GhostButton value="Add"
                                             theme="success"
                                             iconCls="fa fa-plus"/>

                                <GhostButton value="Delete"
                                             theme="error"
                                             iconCls="fa fa-trash"/>

                                <GhostButton value="Next"
                                             theme="primary"
                                             rightIconCls="fa fa-chevron-right"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={GhostButtonDoc}/>

            </div>
        );
    }
};