import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import HuePicker from 'src/HuePicker';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/HuePicker.json';

import 'sass/containers/app/modules/media/HuePickerExamples.scss';

export default class HuePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example hue-picker-examples">

                <h2 className="example-title">Lazy Image</h2>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <HuePicker/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};