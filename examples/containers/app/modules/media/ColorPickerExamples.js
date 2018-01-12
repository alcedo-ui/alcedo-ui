import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import ColorPicker from 'src/ColorPicker';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/ColorPicker.json';

import 'sass/containers/app/modules/media/ColorPickerExamples.scss';

export default class ColorPickerExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: [56, 177, 235]
        };

    }

    render() {

        const {value} = this.state;

        return (
            <div className="example color-picker-examples">

                <h2 className="example-title">Color Picker</h2>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <ColorPicker value={value}/>

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