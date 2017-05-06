import React, {Component} from 'react';

import IconButton from 'dist/IconButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import IconButtonDoc from 'assets/propTypes/IconButton.json';

import 'sass/containers/app/modules/buttons/IconButtonExamples.scss';

export default class IconButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example icon-button-examples">

                <h2 className="example-title">Icon Button</h2>

                <p>
                    An <span>Icon Button</span> generates a button element around an icon.Also,focus styles will happen
                    on click.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Icon Button Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Icon Button using icon specified with the iconCls property and a disabled
                                    example.</p>

                                <IconButton iconCls="fa fa-plus"/>

                                <IconButton iconCls="fa fa-trash"/>

                                <IconButton iconCls="fa fa-wrench"
                                            disabled={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Icon Button Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Icon Button using different theme and a disabled example.</p>

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

                <Widget>

                    <WidgetHeader className="example-header" title="Icon Button Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the isCircular property to false for not circular shape and use the value
                                    property for text description.</p>

                                <IconButton iconCls="fa fa-plus"
                                            value="add"
                                            isCircular={false}
                                            theme="success"/>

                                <IconButton iconCls="fa fa-trash"
                                            value="delete"
                                            isCircular={false}
                                            theme="error"/>

                                <IconButton iconCls="fa fa-wrench"
                                            value="tools"
                                            isCircular={false}
                                            disabled={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={IconButtonDoc}/>

            </div>
        );
    }
};