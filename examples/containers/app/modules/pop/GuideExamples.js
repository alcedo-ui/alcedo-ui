import React, {Component} from 'react';

import RaisedButton from 'src/RaisedButton';
import Guide from 'src/Guide';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import ButtonRadioGroup from 'src/ButtonRadioGroup';
import MaterialTextField from 'src/MaterialTextField';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Guide.json';

import 'sass/containers/app/modules/pop/PopExamples.scss';
import 'sass/containers/app/modules/pop/GuideExamples.scss';
import {findDOMNode} from 'react-dom';

class GuideExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            type: Guide.Type.INFO,
            message: 'Message',
            guideVisible: {},
            triggerEl: {}
        };

        this.Type = Object.keys(Guide.Type).map(item => ({
            className: `type-${item.toLowerCase()}`,
            iconCls: 'fas fa-check',
            label: item,
            value: Guide.Type[item]
        }));

    }

    updateField = (key, value) => {
        let state = {};
        state[key] = value;
        this.setState(state);
    };

    showGuide = id => {

        const {guideVisible} = this.state;

        guideVisible[id] = true;

        this.setState({
            guideVisible
        });

    };

    componentDidMount() {

        const triggerEl = {};

        for (let i = 0; i <= 16; i++) {
            triggerEl[i] = findDOMNode(this.refs[`trigger${i}`]);
        }

        this.setState({
            triggerEl
        });

    }

    render() {

        const {type, message, guideVisible, triggerEl} = this.state;

        return (
            <div className="example pop-examples notification-examples">

                <h2 className="example-title">Guide</h2>

                <p>
                    <span>Guide</span>
                    is a global display notification alert information .
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <ButtonRadioGroup data={this.Type}
                                                  value={type}
                                                  onChange={value => this.updateField('type', value)}/>

                                <MaterialTextField className=""
                                                   theme={MaterialTextField.Theme.HIGHLIGHT}
                                                   value={message}
                                                   onChange={value => this.updateField('message', value)}/>

                                <div className="button-group-wrapper">

                                    <div className="button-group top">
                                        <RaisedButton ref="trigger5"
                                                      className="trigger-position-button"
                                                      value="Top Left"
                                                      onClick={() => this.showGuide(5)}/>
                                        <RaisedButton ref="trigger6"
                                                      className="trigger-position-button"
                                                      value="Top"
                                                      onClick={() => this.showGuide(6)}/>
                                        <RaisedButton ref="trigger7"
                                                      className="trigger-position-button"
                                                      value="Top right"
                                                      onClick={() => this.showGuide(7)}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton ref="trigger11"
                                                      className="trigger-position-button"
                                                      value="Right Top"
                                                      onClick={() => this.showGuide(11)}/>
                                        <RaisedButton ref="trigger12"
                                                      className="trigger-position-button"
                                                      value="Right"
                                                      onClick={() => this.showGuide(12)}/>
                                        <RaisedButton ref="trigger13"
                                                      className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onClick={() => this.showGuide(13)}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton ref="trigger2"
                                                      className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onClick={() => this.showGuide(2)}/>
                                        <RaisedButton ref="trigger3"
                                                      className="trigger-position-button"
                                                      value="Bottom"
                                                      onClick={() => this.showGuide(3)}/>
                                        <RaisedButton ref="trigger4"
                                                      className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onClick={() => this.showGuide(4)}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton ref="trigger8"
                                                      className="trigger-position-button"
                                                      value="Left Top"
                                                      onClick={() => this.showGuide(8)}/>
                                        <RaisedButton ref="trigger9"
                                                      className="trigger-position-button"
                                                      value="Left"
                                                      onClick={() => this.showGuide(9)}/>
                                        <RaisedButton ref="trigger10"
                                                      className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onClick={() => this.showGuide(10)}/>
                                    </div>

                                    <div className="button-group center">
                                        <RaisedButton ref="trigger14"
                                                      className="trigger-position-button"
                                                      value="Center"
                                                      onClick={() => this.showGuide(14)}/>
                                    </div>

                                </div>

                                <Guide visible={guideVisible[2]}
                                       triggerEl={triggerEl[2]}
                                       position={Guide.Position.BOTTOM_LEFT}
                                       onRequestClose={() => this.closePopup(2)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[3]}
                                       triggerEl={triggerEl[3]}
                                       position={Guide.Position.BOTTOM}
                                       onRequestClose={() => this.closePopup(3)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[4]}
                                       triggerEl={triggerEl[4]}
                                       position={Guide.Position.BOTTOM_RIGHT}
                                       onRequestClose={() => this.closePopup(4)}>
                                    {message}
                                </Guide>

                                <Guide visible={guideVisible[5]}
                                       triggerEl={triggerEl[5]}
                                       position={Guide.Position.TOP_LEFT}
                                       onRequestClose={() => this.closePopup(5)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[6]}
                                       triggerEl={triggerEl[6]}
                                       position={Guide.Position.TOP}
                                       onRequestClose={() => this.closePopup(6)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[7]}
                                       triggerEl={triggerEl[7]}
                                       position={Guide.Position.TOP_RIGHT}
                                       onRequestClose={() => this.closePopup(7)}>
                                    {message}
                                </Guide>

                                <Guide visible={guideVisible[8]}
                                       triggerEl={triggerEl[8]}
                                       position={Guide.Position.LEFT_TOP}
                                       onRequestClose={() => this.closePopup(8)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[9]}
                                       triggerEl={triggerEl[9]}
                                       position={Guide.Position.LEFT}
                                       onRequestClose={() => this.closePopup(9)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[10]}
                                       triggerEl={triggerEl[10]}
                                       position={Guide.Position.LEFT_BOTTOM}
                                       onRequestClose={() => this.closePopup(10)}>
                                    {message}
                                </Guide>

                                <Guide visible={guideVisible[11]}
                                       triggerEl={triggerEl[11]}
                                       position={Guide.Position.RIGHT_TOP}
                                       onRequestClose={() => this.closePopup(11)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[12]}
                                       triggerEl={triggerEl[12]}
                                       position={Guide.Position.RIGHT}
                                       onRequestClose={() => this.closePopup(12)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[13]}
                                       triggerEl={triggerEl[13]}
                                       position={Guide.Position.RIGHT_BOTTOM}
                                       onRequestClose={() => this.closePopup(13)}>
                                    {message}
                                </Guide>

                                <Guide visible={guideVisible[14]}
                                       triggerEl={triggerEl[14]}
                                       position={Guide.Position.CENTER}
                                       onRequestClose={() => this.closePopup(14)}>
                                    {message}
                                </Guide>

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

export default GuideExamples;