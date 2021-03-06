import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import RaisedButton from 'src/RaisedButton';
import Tip from 'src/Tip';
import TipProvider from 'src/TipProvider';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Theme from 'src/Theme';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/Tip.json';

import 'scss/containers/app/modules/pop/PopExamples.scss';
import 'scss/containers/app/modules/pop/TipExamples.scss';

class TipExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            popVisible: {}
        };

    }

    show = id => {

        const popVisible = {...this.state.popVisible};
        popVisible[id] = true;

        this.setState({
            popVisible
        });

    };

    hide = id => {

        const popVisible = {...this.state.popVisible};
        popVisible[id] = false;

        this.setState({
            popVisible
        });

    };

    render() {

        const {popVisible} = this.state;

        return (
            <div className="example pop-examples tip-examples">

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
                                        <RaisedButton ref={el => this.trigger3 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Top Left"
                                                      onMouseOver={() => this.show(3)}
                                                      onMouseOut={() => this.hide(3)}/>
                                        <RaisedButton ref={el => this.trigger4 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Top"
                                                      onMouseOver={() => this.show(4)}
                                                      onMouseOut={() => this.hide(4)}/>
                                        <RaisedButton ref={el => this.trigger5 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Top right"
                                                      onMouseOver={() => this.show(5)}
                                                      onMouseOut={() => this.hide(5)}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton ref={el => this.trigger9 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Right Top"
                                                      onMouseOver={() => this.show(9)}
                                                      onMouseOut={() => this.hide(9)}/>
                                        <RaisedButton ref={el => this.trigger10 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Right"
                                                      onMouseOver={() => this.show(10)}
                                                      onMouseOut={() => this.hide(10)}/>
                                        <RaisedButton ref={el => this.trigger11 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onMouseOver={() => this.show(11)}
                                                      onMouseOut={() => this.hide(11)}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton ref={el => this.trigger0 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onMouseOver={() => this.show(0)}
                                                      onMouseOut={() => this.hide(0)}/>
                                        <RaisedButton ref={el => this.trigger1 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Bottom"
                                                      onMouseOver={() => this.show(1)}
                                                      onMouseOut={() => this.hide(1)}/>
                                        <RaisedButton ref={el => this.trigger2 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onMouseOver={() => this.show(2)}
                                                      onMouseOut={() => this.hide(2)}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton ref={el => this.trigger6 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Left Top"
                                                      onMouseOver={() => this.show(6)}
                                                      onMouseOut={() => this.hide(6)}/>
                                        <RaisedButton ref={el => this.trigger7 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Left"
                                                      onMouseOver={() => this.show(7)}
                                                      onMouseOut={() => this.hide(7)}/>
                                        <RaisedButton ref={el => this.trigger8 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onMouseOver={() => this.show(8)}
                                                      onMouseOut={() => this.hide(8)}/>
                                    </div>

                                </div>

                                <Tip visible={popVisible[0]}
                                     triggerEl={this.trigger0}
                                     position={Tip.Position.BOTTOM_LEFT}>
                                    Tip Content
                                </Tip>
                                <Tip visible={popVisible[1]}
                                     triggerEl={this.trigger1}
                                     position={Tip.Position.BOTTOM}>
                                    Tip Content
                                </Tip>
                                <Tip visible={popVisible[2]}
                                     triggerEl={this.trigger2}
                                     position={Tip.Position.BOTTOM_RIGHT}>
                                    Tip Content
                                </Tip>

                                <Tip visible={popVisible[3]}
                                     triggerEl={this.trigger3}
                                     position={Tip.Position.TOP_LEFT}>
                                    Tip Content
                                </Tip>
                                <Tip visible={popVisible[4]}
                                     triggerEl={this.trigger4}
                                     position={Tip.Position.TOP}>
                                    Tip Content
                                </Tip>
                                <Tip visible={popVisible[5]}
                                     triggerEl={this.trigger5}
                                     position={Tip.Position.TOP_RIGHT}>
                                    Tip Content
                                </Tip>

                                <Tip visible={popVisible[6]}
                                     triggerEl={this.trigger6}
                                     position={Tip.Position.LEFT_TOP}>
                                    Tip Content
                                </Tip>
                                <Tip visible={popVisible[7]}
                                     triggerEl={this.trigger7}
                                     position={Tip.Position.LEFT}>
                                    Tip Content
                                </Tip>
                                <Tip visible={popVisible[8]}
                                     triggerEl={this.trigger8}
                                     position={Tip.Position.LEFT_BOTTOM}>
                                    Tip Content
                                </Tip>

                                <Tip visible={popVisible[9]}
                                     triggerEl={this.trigger9}
                                     position={Tip.Position.RIGHT_TOP}>
                                    Tip Content
                                </Tip>
                                <Tip visible={popVisible[10]}
                                     triggerEl={this.trigger10}
                                     position={Tip.Position.RIGHT}>
                                    Tip Content
                                </Tip>
                                <Tip visible={popVisible[11]}
                                     triggerEl={this.trigger11}
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

                                <RaisedButton ref={el => this.trigger12 = findDOMNode(el)}
                                              className="trigger-button"
                                              value="Show Tip"
                                              onMouseOver={() => this.show(12)}
                                              onMouseOut={() => this.hide(12)}/>

                                <Tip className="customized-tip"
                                     theme={Theme.DEFAULT}
                                     visible={popVisible[12]}
                                     triggerEl={this.trigger12}
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
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Use Tip Provider"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <TipProvider tipContent="Tip Content">
                                    <RaisedButton className="trigger-button"
                                                  value="Show Tip"
                                                  onMouseOver={() => console.log('onMouseOver')}
                                                  onMouseOut={() => console.log('onMouseOut')}/>
                                </TipProvider>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Tip in Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <RaisedButton className="trigger-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(13)}/>

                                <Dialog visible={popVisible[13]}
                                        onRequestClose={() => this.hide(13)}>
                                    {
                                        dialogContentEl =>
                                            <div className="tip-dialog-content-scroller">

                                                <RaisedButton ref={el => this.trigger14 = findDOMNode(el)}
                                                              className="dialog-trigger-button"
                                                              value="Toggle Tip"
                                                              onMouseOver={() => this.show(14)}
                                                              onMouseOut={() => this.hide(14)}/>
                                                <Tip position={Tip.Position.BOTTOM_LEFT}
                                                     visible={popVisible[14]}
                                                     triggerEl={this.trigger14}
                                                     parentEl={dialogContentEl}>
                                                    Tip Content
                                                </Tip>

                                                <TipProvider tipContent="Tip Content"
                                                             parentEl={dialogContentEl}
                                                             position={TipProvider.Position.BOTTOM_LEFT}>
                                                    <RaisedButton className="dialog-trigger-button"
                                                                  value="Toggle TipProvider"/>
                                                </TipProvider>

                                                <RaisedButton ref={el => this.trigger15 = findDOMNode(el)}
                                                              className="dialog-trigger-button"
                                                              value="Toggle Tip"
                                                              onMouseOver={() => this.show(15)}
                                                              onMouseOut={() => this.hide(15)}/>
                                                <Tip position={Tip.Position.BOTTOM_LEFT}
                                                     visible={popVisible[15]}
                                                     triggerEl={this.trigger15}
                                                     shouldFollowScroll={true}>
                                                    Tip Content
                                                </Tip>

                                                <TipProvider tipContent="Tip Content"
                                                             position={TipProvider.Position.BOTTOM_LEFT}
                                                             shouldFollowScroll={true}>
                                                    <RaisedButton className="dialog-trigger-button"
                                                                  value="Toggle TipProvider"/>
                                                </TipProvider>

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

export default TipExamples;
