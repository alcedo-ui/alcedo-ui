import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import RaisedButton from 'src/RaisedButton';
import Guide from 'src/Guide';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import ButtonRadioGroup from 'src/ButtonRadioGroup';
import MaterialTextField from 'src/MaterialTextField';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Guide.json';

import 'scss/containers/app/modules/pop/PopExamples.scss';
import 'scss/containers/app/modules/pop/GuideExamples.scss';

class GuideExamples extends Component {

    constructor(props) {

        super(props);

        this.Type = Object.keys(Guide.Type).map(item => ({
            className: `type-${item.toLowerCase()}`,
            iconCls: 'fas fa-check',
            text: item,
            value: Guide.Type[item]
        }));

        this.state = {
            type: Guide.Type.INFO,
            message: 'Message',
            guideVisible: {}
        };

    }

    updateField = (key, value) => {
        let state = {};
        state[key] = value;
        this.setState(state);
    };

    show = id => {

        const {guideVisible} = this.state;

        guideVisible[id] = true;

        this.setState({
            guideVisible
        });

    };

    hide = id => {

        const {guideVisible} = this.state;

        guideVisible[id] = false;

        this.setState({
            guideVisible
        }, () => {
            if (id == '15') {
                this.hide(16);
            }
        });

    };

    render() {

        const {type, message, guideVisible} = this.state;

        return (
            <div className="example pop-examples notification-examples guide-examples">

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
                                                  onChange={item => this.updateField('type', item.value)}/>

                                <MaterialTextField theme={MaterialTextField.Theme.HIGHLIGHT}
                                                   value={message}
                                                   onChange={value => this.updateField('message', value)}/>

                                <div className="button-group-wrapper">

                                    <div className="button-group top">
                                        <RaisedButton ref={el => this.trigger5 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Top Left"
                                                      onClick={() => this.show(5)}/>
                                        <RaisedButton ref={el => this.trigger6 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Top"
                                                      onClick={() => this.show(6)}/>
                                        <RaisedButton ref={el => this.trigger7 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Top right"
                                                      onClick={() => this.show(7)}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton ref={el => this.trigger11 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Right Top"
                                                      onClick={() => this.show(11)}/>
                                        <RaisedButton ref={el => this.trigger12 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Right"
                                                      onClick={() => this.show(12)}/>
                                        <RaisedButton ref={el => this.trigger13 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onClick={() => this.show(13)}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton ref={el => this.trigger2 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onClick={() => this.show(2)}/>
                                        <RaisedButton ref={el => this.trigger3 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Bottom"
                                                      onClick={() => this.show(3)}/>
                                        <RaisedButton ref={el => this.trigger4 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onClick={() => this.show(4)}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton ref={el => this.trigger8 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Left Top"
                                                      onClick={() => this.show(8)}/>
                                        <RaisedButton ref={el => this.trigger9 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Left"
                                                      onClick={() => this.show(9)}/>
                                        <RaisedButton ref={el => this.trigger10 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onClick={() => this.show(10)}/>
                                    </div>

                                    <div className="button-group center">
                                        <RaisedButton ref={el => this.trigger14 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Center"
                                                      onClick={() => this.show(14)}/>
                                    </div>

                                </div>

                                <Guide visible={guideVisible[2]}
                                       type={type}
                                       triggerEl={this.trigger2}
                                       position={Guide.Position.BOTTOM_LEFT}
                                       onRequestClose={() => this.hide(2)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[3]}
                                       type={type}
                                       triggerEl={this.trigger3}
                                       position={Guide.Position.BOTTOM}
                                       onRequestClose={() => this.hide(3)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[4]}
                                       type={type}
                                       triggerEl={this.trigger4}
                                       position={Guide.Position.BOTTOM_RIGHT}
                                       onRequestClose={() => this.hide(4)}>
                                    {message}
                                </Guide>

                                <Guide visible={guideVisible[5]}
                                       type={type}
                                       triggerEl={this.trigger5}
                                       position={Guide.Position.TOP_LEFT}
                                       onRequestClose={() => this.hide(5)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[6]}
                                       type={type}
                                       triggerEl={this.trigger6}
                                       position={Guide.Position.TOP}
                                       onRequestClose={() => this.hide(6)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[7]}
                                       type={type}
                                       triggerEl={this.trigger7}
                                       position={Guide.Position.TOP_RIGHT}
                                       onRequestClose={() => this.hide(7)}>
                                    {message}
                                </Guide>

                                <Guide visible={guideVisible[8]}
                                       type={type}
                                       triggerEl={this.trigger8}
                                       position={Guide.Position.LEFT_TOP}
                                       onRequestClose={() => this.hide(8)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[9]}
                                       type={type}
                                       triggerEl={this.trigger9}
                                       position={Guide.Position.LEFT}
                                       onRequestClose={() => this.hide(9)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[10]}
                                       type={type}
                                       triggerEl={this.trigger10}
                                       position={Guide.Position.LEFT_BOTTOM}
                                       onRequestClose={() => this.hide(10)}>
                                    {message}
                                </Guide>

                                <Guide visible={guideVisible[11]}
                                       type={type}
                                       triggerEl={this.trigger11}
                                       position={Guide.Position.RIGHT_TOP}
                                       onRequestClose={() => this.hide(11)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[12]}
                                       type={type}
                                       triggerEl={this.trigger12}
                                       position={Guide.Position.RIGHT}
                                       onRequestClose={() => this.hide(12)}>
                                    {message}
                                </Guide>
                                <Guide visible={guideVisible[13]}
                                       type={type}
                                       triggerEl={this.trigger13}
                                       position={Guide.Position.RIGHT_BOTTOM}
                                       onRequestClose={() => this.hide(13)}>
                                    {message}
                                </Guide>

                                <Guide visible={guideVisible[14]}
                                       type={type}
                                       triggerEl={this.trigger14}
                                       position={Guide.Position.CENTER}
                                       onRequestClose={() => this.hide(14)}>
                                    {message}
                                </Guide>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Guide in Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="guide-example-wrapper">
                                <RaisedButton className="trigger-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(15)}/>

                                <Dialog visible={guideVisible[15]}
                                        onRequestClose={() => this.hide(15)}>
                                    {
                                        dialogContentEl =>
                                            <div className="guide-dialog-content-scroller">

                                                <RaisedButton ref={el => this.trigger16 = findDOMNode(el)}
                                                              className="dialog-trigger-button"
                                                              value="Toggle Guide"
                                                              onClick={() => this.show(16)}/>
                                                <Guide visible={guideVisible[16]}
                                                       type={type}
                                                       triggerEl={this.trigger16}
                                                       parentEl={dialogContentEl}
                                                       position={Guide.Position.BOTTOM_LEFT}
                                                       onRequestClose={() => this.hide(16)}>
                                                    {message}
                                                </Guide>

                                                <RaisedButton ref={el => this.trigger17 = findDOMNode(el)}
                                                              className="dialog-trigger-button"
                                                              value="Toggle Guide"
                                                              onClick={() => this.show(17)}/>
                                                <Guide position={Guide.Position.BOTTOM_LEFT}
                                                       visible={guideVisible[17]}
                                                       type={type}
                                                       triggerEl={this.trigger17}
                                                       shouldFollowScroll={true}
                                                       onRequestClose={() => this.hide(17)}>
                                                    {message}
                                                </Guide>

                                            </div>
                                    }
                                </Dialog>
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
