import React, {Component} from 'react';

import RaisedButton from 'src/RaisedButton';
import Tip from 'src/Tip';
import TipProvider from 'src/TipProvider';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/TipBody.json';

import 'sass/containers/app/modules/popup/TipExamples.scss';

export default class TipExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            tipVisible1: false,
            tipVisible2: false,
            tipVisible4: false,
            tipVisible5: false,
            tipVisible6: false,
            tipVisible7: false,
            tipVisible8: false,
            tipVisible9: false,
            tipVisible10: false,
            tipVisible11: false,
            tipVisible12: false,
            tipVisible13: false,
            tipVisible14: false,
            tipVisible15: false,
            triggerEl1: null,
            triggerEl2: null,
            triggerEl4: null,
            triggerEl5: null,
            triggerEl6: null,
            triggerEl7: null,
            triggerEl8: null,
            triggerEl9: null,
            triggerEl10: null,
            triggerEl11: null,
            triggerEl12: null,
            triggerEl13: null,
            triggerEl14: null,
            triggerEl15: null
        };

        this.showTip = ::this.showTip;
        this.hideTip = ::this.hideTip;

    }

    showTip(e, id) {
        this.setState({
            [`tipVisible${id}`]: true,
            [`triggerEl${id}`]: e.currentTarget
        });
    }

    hideTip(id) {
        this.setState({
            [`tipVisible${id}`]: false
        });
    }

    render() {

        const {
            tipVisible1, tipVisible2, tipVisible4, tipVisible5, tipVisible6,
            tipVisible7, tipVisible8, tipVisible9, tipVisible10, tipVisible11,
            tipVisible12, tipVisible13, tipVisible14, tipVisible15,
            triggerEl1, triggerEl2, triggerEl4, triggerEl5, triggerEl6,
            triggerEl7, triggerEl8, triggerEl9, triggerEl10, triggerEl11,
            triggerEl12, triggerEl13, triggerEl14, triggerEl15
        } = this.state;

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
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top Left"
                                                      onMouseEnter={(e) => {
                                                          this.showTip(e, 7);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top"
                                                      onMouseEnter={(e) => {
                                                          this.showTip(e, 8);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top right"
                                                      onMouseEnter={(e) => {
                                                          this.showTip(e, 9);
                                                      }}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Top"
                                                      onMouseEnter={(e) => {
                                                          this.showTip(e, 13);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right"
                                                      onMouseEnter={(e) => {
                                                          this.showTip(e, 14);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onMouseEnter={(e) => {
                                                          this.showTip(e, 15);
                                                      }}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onMouseEnter={(e) => {
                                                          this.showTip(e, 4);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom"
                                                      onMouseEnter={(e) => {
                                                          this.showTip(e, 5);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onMouseEnter={(e) => {
                                                          this.showTip(e, 6);
                                                      }}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Top"
                                                      onMouseEnter={(e) => {
                                                          this.showTip(e, 10);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left"
                                                      onMouseEnter={(e) => {
                                                          this.showTip(e, 11);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onMouseEnter={(e) => {
                                                          this.showTip(e, 12);
                                                      }}/>
                                    </div>

                                </div>

                                <Tip visible={tipVisible4}
                                     triggerEl={triggerEl4}
                                     position={Tip.Position.BOTTOM_LEFT}
                                     onRequestClose={() => {
                                         this.hideTip(4);
                                     }}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible5}
                                     triggerEl={triggerEl5}
                                     position={Tip.Position.BOTTOM}
                                     onRequestClose={() => {
                                         this.hideTip(5);
                                     }}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible6}
                                     triggerEl={triggerEl6}
                                     position={Tip.Position.BOTTOM_RIGHT}
                                     onRequestClose={() => {
                                         this.hideTip(6);
                                     }}>
                                    Tip Content
                                </Tip>

                                <Tip visible={tipVisible7}
                                     triggerEl={triggerEl7}
                                     position={Tip.Position.TOP_LEFT}
                                     onRequestClose={() => {
                                         this.hideTip(7);
                                     }}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible8}
                                     triggerEl={triggerEl8}
                                     position={Tip.Position.TOP}
                                     onRequestClose={() => {
                                         this.hideTip(8);
                                     }}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible9}
                                     triggerEl={triggerEl9}
                                     position={Tip.Position.TOP_RIGHT}
                                     onRequestClose={() => {
                                         this.hideTip(9);
                                     }}>
                                    Tip Content
                                </Tip>

                                <Tip visible={tipVisible10}
                                     triggerEl={triggerEl10}
                                     position={Tip.Position.LEFT_TOP}
                                     onRequestClose={() => {
                                         this.hideTip(10);
                                     }}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible11}
                                     triggerEl={triggerEl11}
                                     position={Tip.Position.LEFT}
                                     onRequestClose={() => {
                                         this.hideTip(11);
                                     }}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible12}
                                     triggerEl={triggerEl12}
                                     position={Tip.Position.LEFT_BOTTOM}
                                     onRequestClose={() => {
                                         this.hideTip(12);
                                     }}>
                                    Tip Content
                                </Tip>

                                <Tip visible={tipVisible13}
                                     triggerEl={triggerEl13}
                                     position={Tip.Position.RIGHT_TOP}
                                     onRequestClose={() => {
                                         this.hideTip(13);
                                     }}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible14}
                                     triggerEl={triggerEl14}
                                     position={Tip.Position.RIGHT}
                                     onRequestClose={() => {
                                         this.hideTip(14);
                                     }}>
                                    Tip Content
                                </Tip>
                                <Tip visible={tipVisible15}
                                     triggerEl={triggerEl15}
                                     position={Tip.Position.RIGHT_BOTTOM}
                                     onRequestClose={() => {
                                         this.hideTip(15);
                                     }}>
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

                                <RaisedButton className="trigger-button"
                                              value="Show Tip"
                                              onMouseEnter={(e) => {
                                                  this.showTip(e, 1);
                                              }}/>

                                <Tip className="customized-tip"
                                     visible={tipVisible1}
                                     triggerEl={triggerEl1}
                                     triangle={
                                         <svg xmlns="http://www.w3.org/2000/svg"
                                              version="1.1"
                                              className="customized-tip-triangle"
                                              width="17"
                                              height="7">
                                             <polyline points="0,7 9,0 17,7"
                                                       style={{stroke: '#e7e7e7', fill: '#fff'}}/>
                                         </svg>
                                     }
                                     onRequestClose={() => {
                                         this.hideTip(1);
                                     }}>
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