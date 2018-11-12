import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import ColorPicker from 'src/ColorPicker';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/ColorPicker.json';

import Color from 'src/_vendors/Color';

import 'scss/containers/app/modules/media/ColorPickerExamples.scss';

class ColorPickerExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: Color.hex2rgb('38b1eb')
        };

    }

    changeHandler = value => {
        this.setState({
            value
        });
    };

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

                                <ColorPicker value={value}
                                             onChange={this.changeHandler}/>

                                <div className="picked-color-wrapper">

                                    <div className="picked-color"
                                         style={{background: `rgb(${value.join(', ')})`}}></div>

                                    <div className="picked-color-value">{value.join(', ')}</div>

                                </div>

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

export default ColorPickerExamples;
