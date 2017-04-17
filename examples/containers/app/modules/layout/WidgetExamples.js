import React, {Component} from 'react';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import IconButton from 'dist/IconButton';

import 'sass/containers/app/modules/layout/WidgetExamples.scss';

export default class WidgetExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example widget-examples">

                <div className="examples">
                    <div className="examples-title">Widget</div>
                    <div className="examples-wrapper">

                        <Widget>

                            <WidgetHeader title="Title">
                                <IconButton iconCls="fa fa-thumbs-up"/>
                                <IconButton iconCls="fa fa-trash"/>
                            </WidgetHeader>

                            <div className="widget-content">
                                content
                            </div>

                        </Widget>

                    </div>
                </div>

            </div>
        );
    }
};