import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import HuePicker from 'src/HuePicker';

import Color from 'src/_vendors/Color';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/HuePicker.json';

import 'sass/containers/app/modules/media/HuePickerExamples.scss';

export default class HuePickerExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            hue: 199
        };

        this.changeHandler = ::this.changeHandler;

    }

    changeHandler(hue) {
        this.setState({
            hue
        });
    }

    render() {

        const {hue} = this.state;

        return (
            <div className="example hue-picker-examples">

                <h2 className="example-title">Hue Picker</h2>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <HuePicker value={hue}
                                           onChange={this.changeHandler}/>

                                <div className="picked-hue-wrapper">

                                    <div className="picked-hue"
                                         style={{background: `rgb(${Color.hue2rgb(hue).join(', ')})`}}></div>

                                    <div className="picked-hue-value">{hue}°</div>

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