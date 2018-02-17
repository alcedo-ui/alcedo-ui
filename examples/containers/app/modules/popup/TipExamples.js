import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import RaisedButton from 'src/RaisedButton';
import Tip from 'src/Tip';
import TipProvider from 'src/TipProvider';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Theme from 'src/Theme';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/TipBody.json';

import 'sass/containers/app/modules/popup/TipExamples.scss';

export default class TipExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            tipVisible: {},
            triggerEl: {}
        };

        this.showTip = ::this.showTip;
        this.hideTip = ::this.hideTip;

    }

    showTip(id) {

        const {tipVisible} = this.state;

        tipVisible[id] = true;

        this.setState({
            tipVisible
        });

    }

    hideTip(id) {

        const {tipVisible} = this.state;

        tipVisible[id] = false;

        this.setState({
            tipVisible
        });

    }

    componentDidMount() {

        const triggerEl = {};

        for (let i = 0; i <= 12; i++) {
            triggerEl[i] = findDOMNode(this.refs[`trigger${i}`]);
        }

        this.setState({
            triggerEl
        });

    }

    render() {

        const {tipVisible, triggerEl} = this.state;

        return (
            <div className="example tip-examples">

                <h2 className="example-title">Tip</h2>

                <p>
                    A <span>Tip</span> can be used as an alternative to a Drop Down Tip that can contain elements
                    inside.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With value"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>
                                    Set the <code>value</code> property to show different position of <code>Tip</code>.
                                </p>

                                <div className="button-group-wrapper">

                                    <div className="button-group top">
                                        <RaisedButton ref="trigger3"
                                                      className="trigger-position-button"
                                                      value="Top Left"
                                                      onMouseEnter={() => {
                                                          this.showTip(3);
                                                      }}
                                                      onMouseLeave={() => {
                                                          this.hideTip(3);
                                                      }}/>
                                        <RaisedButton ref="trigger4"
                                                      className="trigger-position-button"
                                                      value="Top"
                                                      onMouseEnter={() => {
                                                          this.showTip(4);
                                                      }}
                                                      onMouseLeave={() => {
                                                          this.hideTip(4);
                                                      }}/>
                                        <RaisedButton ref="trigger5"
                                                      className="trigger-position-button"
                                                      value="Top right"
                                                      onMouseEnter={() => {
                                                          this.showTip(5);
                                                      }}
                                                      onMouseLeave={() => {
                                                          this.hideTip(5);
                                                      }}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton ref="trigger9"
                                                      className="trigger-position-button"
                                                      value="Right Top"
                                                      onMouseEnter={() => {
                                                          this.showTip(9);
                                                      }}
                                                      onMouseLeave={() => {
                                                          this.hideTip(9);
                                                      }}/>
                                        <RaisedButton ref="trigger10"
                                                      className="trigger-position-button"
                                                      value="Right"
                                                      onMouseEnter={() => {
                                                          this.showTip(10);
                                                      }}
                                                      onMouseLeave={() => {
                                                          this.hideTip(10);
                                                      }}/>
                                        <RaisedButton ref="trigger11"
                                                      className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onMouseEnter={() => {
                                                          this.showTip(11);
                                                      }}
                                                      onMouseLeave={() => {
                                                          this.hideTip(11);
                                                      }}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton ref="trigger0"
                                                      className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onMouseEnter={() => {
                                                          this.showTip(0);
                                                      }}
                                                      onMouseLeave={() => {
                                                          this.hideTip(0);
                                                      }}/>
                                        <RaisedButton ref="trigger1"
                                                      className="trigger-position-button"
                                                      value="Bottom"
                                                      onMouseEnter={() => {
                                                          this.showTip(1);
                                                      }}
                                                      onMouseLeave={() => {
                                                          this.hideTip(1);
                                                      }}/>
                                        <RaisedButton ref="trigger2"
                                                      className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onMouseEnter={() => {
                                                          this.showTip(2);
                                                      }}
                                                      onMouseLeave={() => {
                                                          this.hideTip(2);
                                                      }}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton ref="trigger6"
                                                      className="trigger-position-button"
                                                      value="Left Top"
                                                      onMouseEnter={() => {
                                                          this.showTip(6);
                                                      }}
                                                      onMouseLeave={() => {
                                                          this.hideTip(6);
                                                      }}/>
                                        <RaisedButton ref="trigger7"
                                                      className="trigger-position-button"
                                                      value="Left"
                                                      onMouseEnter={() => {
                                                          this.showTip(7);
                                                      }}
                                                      onMouseLeave={() => {
                                                          this.hideTip(7);
                                                      }}/>
                                        <RaisedButton ref="trigger8"
                                                      className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onMouseEnter={() => {
                                                          this.showTip(8);
                                                      }}
                                                      onMouseLeave={() => {
                                                          this.hideTip(8);
                                                      }}/>
                                    </div>

                                </div>

                                <Tip visible={tipVisible[0]}
                                     triggerEl={triggerEl[0]}
                                     position={Tip.Position.BOTTOM_LEFT}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible[1]}
                                     triggerEl={triggerEl[1]}
                                     position={Tip.Position.BOTTOM}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible[2]}
                                     triggerEl={triggerEl[2]}
                                     position={Tip.Position.BOTTOM_RIGHT}>
                                    Tip Content
                                </Tip>

                                <Tip visible={tipVisible[3]}
                                     triggerEl={triggerEl[3]}
                                     position={Tip.Position.TOP_LEFT}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible[4]}
                                     triggerEl={triggerEl[4]}
                                     position={Tip.Position.TOP}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible[5]}
                                     triggerEl={triggerEl[5]}
                                     position={Tip.Position.TOP_RIGHT}>
                                    Tip Content
                                </Tip>

                                <Tip visible={tipVisible[6]}
                                     triggerEl={triggerEl[6]}
                                     position={Tip.Position.LEFT_TOP}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible[7]}
                                     triggerEl={triggerEl[7]}
                                     position={Tip.Position.LEFT}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible[8]}
                                     triggerEl={triggerEl[8]}
                                     position={Tip.Position.LEFT_BOTTOM}>
                                    Tip Content
                                </Tip>

                                <Tip visible={tipVisible[9]}
                                     triggerEl={triggerEl[9]}
                                     position={Tip.Position.RIGHT_TOP}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible[10]}
                                     triggerEl={triggerEl[10]}
                                     position={Tip.Position.RIGHT}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible[11]}
                                     triggerEl={triggerEl[11]}
                                     position={Tip.Position.RIGHT_BOTTOM}>
                                    Tip Content
                                </Tip>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Customized Tip Triangle"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <RaisedButton ref="trigger12"
                                              className="trigger-button"
                                              value="Show Tip"
                                              onMouseEnter={() => {
                                                  this.showTip(12);
                                              }}
                                              onMouseLeave={() => {
                                                  this.hideTip(12);
                                              }}/>

                                <Tip className="customized-tip"
                                     theme={Theme.DEFAULT}
                                     visible={tipVisible[12]}
                                     triggerEl={triggerEl[12]}
                                     triangle={
                                         <svg xmlns="http://www.w3.org/2000/svg"
                                              version="1.1"
                                              className="customized-tip-triangle"
                                              width="17"
                                              height="7">
                                             <polyline points="0,7 9,0 17,7"
                                                       style={{stroke: '#e7e7e7', fill: '#fff'}}/>
                                         </svg>
                                     }>
                                    Tip Content
                                </Tip>

                            </div>

                        </div>
                    </div>
                </Widget><Widget>

                <WidgetHeader className="example-header"
                              title="Use Tip Provider"/>

                <div className="widget-content">
                    <div className="example-content">

                        <div className="popup-example-wrapper">

                            <TipProvider text="Tip Content">
                                <RaisedButton className="trigger-button"
                                              value="Show Tip"/>
                            </TipProvider>

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