import React, {Component} from 'react';

import IconButton from 'dist/IconButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import WidgetDoc from 'assets/propTypes/Widget.json';

import 'sass/containers/app/modules/layout/WidgetExamples.scss';

export default class WidgetExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example widget-examples">

                <h2 className="example-title">Widget</h2>

                <p>
                    A <span>Widget</span> element is a basic container that can give a title.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Widget Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Widget example showing title and content.Set the value of the title property to
                                    'Title' and place the content in the widget-content container.</p>

                                <Widget>

                                    <WidgetHeader title="Title">
                                        <IconButton iconCls="fa fa-thumbs-up"/>
                                        <IconButton iconCls="fa fa-trash"/>
                                    </WidgetHeader>

                                    <div className="widget-content">
                                        widget content
                                    </div>

                                </Widget>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={WidgetDoc}/>

            </div>
        );
    }
};