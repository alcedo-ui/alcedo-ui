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

                <Widget>

                    <WidgetHeader className="example-header" title="Icon Button Example"/>

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

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={IconButtonDoc}/>

            </div>
        );
    }
};