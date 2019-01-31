import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import OpacityPicker from 'src/OpacityPicker';
import ColorBlock from 'src/ColorBlock';
import PopupProvider from 'src/PopupProvider';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/OpacityPicker.json';

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
                                               color="38b1eb"
                                               onChange={this.changeHandler}/>

                                <div className="picked-opacity-wrapper">
                                    <ColorBlock className="picked-opacity"
                                                value="38b1eb"
                                                opacity={opacity}/>
                                    <div className="picked-opacity-value">{opacity}</div>
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

                                <div className="opacity-select-scroller-wrapper">
                                    <div className="opacity-select-scroller">
                                        <PopupProvider className="opacity-select-pop"
                                                       position={PopupProvider.Position.BOTTOM_LEFT}
                                                       parentEl={document.querySelector('.opacity-select-scroller-wrapper')}
                                                       popupContent={
                                                           <OpacityPicker value={opacity}
                                                                          color="38b1eb"
                                                                          scrollEl={document.querySelector('.opacity-select-scroller-wrapper')}
                                                                          onChange={this.changeHandler}/>
                                                       }>
                                            <div className="picked-opacity-wrapper">
                                                <ColorBlock className="picked-opacity"
                                                            value="38b1eb"
                                                            opacity={opacity}/>
                                                <div className="picked-opacity-value">{opacity}</div>
                                            </div>
                                        </PopupProvider>
                                    </div>
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
