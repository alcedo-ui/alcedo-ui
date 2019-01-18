import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import ColorPicker from 'src/ColorPicker';
import PopupProvider from 'src/PopupProvider';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/ColorPicker.json';

import Color from 'src/_vendors/Color';

import 'scss/containers/app/modules/media/ColorPickerExamples.scss';

class ColorPickerExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: '38b1eb'
        };

    }

    handleChange = value => {
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

                                <ColorPicker hue={Color.rgb2hsb(Color.hex2rgb('38b1eb'))[0]}
                                             value={value}
                                             onChange={this.handleChange}/>

                                <div className="picked-color-wrapper">
                                    <div className="picked-color"
                                         style={{background: `#${value}`}}></div>
                                    <div className="picked-color-value">#{value}</div>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <PopupProvider popupContent={
                                    <ColorPicker hue={Color.rgb2hsb(Color.hex2rgb('38b1eb'))[0]}
                                                 value={value}
                                                 onChange={this.handleChange}/>
                                }>
                                    <div className="color-select"
                                         style={{background: `#${value}`}}></div>
                                </PopupProvider>

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
