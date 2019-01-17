import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import OpacityPicker from 'src/OpacityPicker';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/OpacityPicker.json';

import Color from 'src/_vendors/Color';

import 'scss/containers/app/modules/media/OpacityPickerExamples.scss';

class OpacityPickerExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            opacity: 1
        };

    }

    changeHandler = opacity => {
        this.setState({
            opacity
        });
    };

    render() {

        const {opacity} = this.state;

        return (
            <div className="example opacity-picker-examples">

                <h2 className="example-title">Opacity Picker</h2>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <OpacityPicker value={opacity}
                                               color={Color.hex2rgb('38b1eb')}
                                               onChange={this.changeHandler}/>

                                <div className="picked-opacity-wrapper">

                                    <div className="picked-opacity">
                                        <div className="picked-opacity-color"
                                             style={{
                                                 background: '#38b1eb',
                                                 opacity: opacity
                                             }}></div>
                                    </div>

                                    <div className="picked-opacity-value">{opacity}</div>

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

export default OpacityPickerExamples;
